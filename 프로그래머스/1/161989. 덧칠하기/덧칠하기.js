function solution(n, m, section) {
    let answer = 0;
    let paint = 0;
    section.forEach(a => {
        if (a > paint) {
            paint = a + m - 1;
            answer++;
        }
    })
    return answer;
}