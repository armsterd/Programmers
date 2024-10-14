function solution(today, terms, privacies) {
    let answer = [];
    let expireDay = new Date(today);
    let termType = {};
    
    terms.forEach((item) => {
    let [type, term] = item.split(" ");
    termType[type] = Number(term);
    });
    
    privacies.forEach((item, idx) => {
    let [date, type] = item.split(" ");
    let customerDate = new Date(date);
        
    customerDate.setMonth(customerDate.getMonth() + termType[type]);
        
    if (customerDate <= expireDay) answer.push(idx + 1);
    });
    
    return answer;
}