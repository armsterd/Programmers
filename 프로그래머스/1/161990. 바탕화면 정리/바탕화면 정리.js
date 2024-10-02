function solution(wallpaper) {
    // 격자점들은 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현합니다. 빈칸은 ".", 파일이 있는 칸은 "#"의 값
    // wallpaper[i][j]는 바탕화면에서 i + 1행 j + 1열에 해당하는 칸의 상태
    const answer = [];
    // 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동
    const x = [];
    const y = [];
    // "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                x.push(j)
                y.push(i)
            }
        }
    }
    x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
    // 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return
    return [y[0], x[0], y[y.length - 1] + 1, x[x.length - 1] + 1];
}