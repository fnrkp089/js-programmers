const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    var answer = 0;
    let wear = new Map();
    //clothes -> [[의상의 이름, 의상의 종류], ...]
    //wear -> [key: 의상의 종류 -> Array[의상의 이름]]
    //변환하는 과정
    clothes.forEach((val)=>{
        //key로 Array를 찾아와서 val[0]이 포함되어있지 않다면 추가 후 다시 set
        let kinds = wear.get(val[1]);
        kinds = !kinds ? [val[0]] : kinds.concat([val[0]]);
        wear.set(val[1], kinds);
    })
    let combinations = 1;
    //[안입은상태, 의상1, 2, ...] 조합
    wear.forEach((val)=>{
        combinations *= (val.length + 1);
    })
    answer = combinations - 1;

    return answer;
}

console.log(solution(clothes));