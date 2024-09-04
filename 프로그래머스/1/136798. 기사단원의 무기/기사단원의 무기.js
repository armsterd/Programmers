function solution(number, limit, power) {
    let answer = 0;
    let numbers = [];
    for (let j = 1; j <= number; j++) {
        numbers.push(j);
    }
    
    numbers.forEach(a => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                if (a / i === i) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }
        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    })
    return answer;
}