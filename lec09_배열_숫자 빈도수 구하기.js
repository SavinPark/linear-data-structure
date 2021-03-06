// [ 문제 09 ] 숫자 빈도수 구하기
// 두 자연수 M, N을 입력받아, M부터 N까지 각 자리수의 빈도수를 합하는 프로그램을 제작하시오.
// 예를 들어, 129와 137이 주어졌을 때, 129, 130, 131, 132, 133, 134, 135, 136, 137 숫자가 나오고
// 이 숫자들의 각 자릿수 별 숫자 빈도수를 계산하여, 0부터 9까지의 빈도수 값을 반환한다.
// 입력값은 M, N은 10000 이하의 자연수이며, 0부터 9까지의 자릿수 별 빈도수를 배열 형태로 반환한다.

// INPUT
/* 129 137
   1412 1918
   4159 9182
*/

// OUTPUT
/* #1 [1,10,2,9,1,1,1,1,0,1]
   #2 [100,614,101,101,189,201,201,201,201,199]
   #3 [1503,1527,1503,1502,2343,2503,2512,2512,2505,1686]
*/
// user code
function answer(s, e) {
  let result = [];

  // 1. 각 자릿수별 idx 초기화 => 0
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  // 2. s <= n <= e
  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    // 3. n => % /
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    } 
  }
  return result;
}

// main code
let input = [
  // TC: 1
  [129, 137],
  // TC: 2
  [1412, 1918],
  // TC: 3
  [4159, 9182],
];

for (let i = 0 ; i < input.length ; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
