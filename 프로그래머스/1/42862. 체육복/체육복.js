function solution(n, lost, reserve) {
    let lostStudent = lost.filter((i) => !reserve.includes(i)).sort((a, b) => a - b);
    let reserveStudent = reserve.filter((l) => !lost.includes(l)).sort((a, b) => a - b);
    let answer = n - lostStudent.length;
    
    lostStudent.forEach((l)=>{
        if(reserveStudent.length === 0){
            return;
        }
        
        if(reserveStudent.includes(l - 1)){
            reserveStudent = reserveStudent.filter((r) => r !== l - 1);
            answer++;
        }
        else if(reserveStudent.includes(l + 1)) {
            reserveStudent = reserveStudent.filter((r) => r !== l + 1);
            answer++;
        }
        
    })
    return answer;
}