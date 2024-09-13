function solution(s) {
    // 분해한 문자열개수 반환
    let answer = 0;
     // x와 x가 아닌 다른 글자들이 나온 횟수 각각
    let countX = 0;
    let countNotX = 0;
    // s 첫 글자 x
    let x = '';
    for (let i = 0; i <= s.length; i++) {
        if (!x) x = s[i];
        if (s[i] === x) {
            countX++;
        } else {
            countNotX++;
        }
        
        // 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열 분리, 그리고 다시 반복
        if (countX === countNotX) {
            answer++;
            countX = 0;
            countNotX = 0; 
            x = '';
        }
        // 더 이상 읽을 문자가 없으면 분리하고 종료
        if (s.length === 0) {
            answer++
            countX = 0;
            countNotX = 0; 
            x = ''
        }
    }
    if (x) answer++;
    
    return answer;
}