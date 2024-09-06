function solution(lottos, win_nums) {
    let zeroNumber = 0;
    let equalNumber = 0;
    lottos.forEach(number => {
        if (number === 0) {
            zeroNumber++;
        } else if (win_nums.includes(number)) {
            equalNumber++;
        }
    });
    let minRank = 7 - equalNumber >= 6 ? 6 : 7 - equalNumber;
    let maxRank = minRank - zeroNumber < 1 ? 1 : minRank - zeroNumber;
    
    return [maxRank, minRank];
}