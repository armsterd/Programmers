function solution(babbling) {
    let answer = 0;
    let possibleSay = ['aya', 'ye', 'woo', 'ma'];
    
    for (let i = 0; i < babbling.length; i++) {
        // 'aya', 'yee', 'u'
        let babble = babbling[i];
        
        for (let j = 0; j < possibleSay.length; j++) {
            // babble = aya, possibleSay[0] = aya
            if (babble.includes(possibleSay[j].repeat(2))){
                break;
            }
            babble = babble.split(possibleSay[j]).join(" ");
        }
        
        if (babble.split(" ").join("").length === 0) {
            answer++;
        }
    }
    
    return answer;
}