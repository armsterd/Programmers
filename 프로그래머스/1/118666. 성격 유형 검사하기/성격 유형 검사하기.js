function solution(survey, choices) {
    let answer = '';
    // R <=> T : R
    // C <=> F : C
    // J <=> M : J
    // A <=> N : A
    let characteristicType = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}
    for (let i = 0; i < survey.length; i++) {
        
    // survey = ['RT'], survey[0]의 비동의 = R (4점미만), 동의 = T (4점이상), survey.length + 1이 마지막 문제
    // choices[0] = 6 => 튜브형 2점
        let [disagreeType, agreeType] = survey[i].split("");
        if (choices[i] < 4) {
            // 매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다. : 7, 1 => 3
            // 동의나 비동의 선택지를 선택하면 2점을 얻습니다. : 6, 2 => 2
            // 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다. : 5, 3 => 1
            // 모르겠음 선택지를 선택하면 점수를 얻지 않습니다. : 4 => 0    |choice - 4|
            characteristicType[disagreeType] += Math.abs(choices[i] - 4);
        } else {
            characteristicType[agreeType] += Math.abs(choices[i] - 4);
        }
    }
    // 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.
    // 하나의 지표에서 각 성격 유형 점수가 같으면, 
    // 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단 (R, C, J, A)
    let resultType = Object.keys(characteristicType);
    let resultScore = Object.values(characteristicType);
    for (let i = 0; i < resultType.length; i += 2) {
        if (resultScore[i] >= resultScore[i + 1]) {
            answer += resultType[i];
        } else {
            answer += resultType[i + 1];
        }
        
    }

    return answer;
}