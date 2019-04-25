<Learning Javascript> Chapter5_exampleCode
==========================================
> 해당 챕터 제목과 소제목을 적어두었습니다. 찾으시는 예제는 책 내용 그대로 입력하셔서 찾으시면 되겠습니다.
> 
> ex) CHAPTER5 표현식과 연산자 // 5.1 연산자
---
CHAPTER5 표현식과 연산자
--------------------
```` Javascript
// 표현식과 표현식이 아닌 것의 차이 이해
let x;
x = 3 * 5;      // 두 개의 표현식 존재, 
                // (1)15라는 값을 변수 x에 할당한 표현식, 
                // (2)값 15를 반환하는 3 * 5 라는 표현식


let x, y;
y = x = 3 * 5; // x와 y값 두 변수의 값은 모두 15 
               // 자바스크립트는 이렇게 표현식이 결합된 형태는 
               // 쪼갤 수 있는 만큼 쪼개서 한 부분씩 실행

let x, y; 
y = x = 3 * 5;  // 기존의 문
y = x = 15;     // 실행순서 1: 곱셈 표현식을 평가 && 첫 번째 할당
                // y는 undefined 상태
y = 15;         // 두 번째 할당을 평가, y는 값 15를 할당받음
15;             // 전체 문의 결과 15, 이 값은 사용도 안되고, 할당도 안돼서 버려짐


// y = x 부터 실행돼서 y에 값 undefined를 할당한 후 
// 차례대로 실행되지 않고 3 * 5의 연산이 먼저 평가되는 것은 연산자 우선순위 때문
````
---

### 5.2 산술 연산자
```` Javascript
// 단항 부정 '-'
x = 5; 
console.log(-x);

// 단항 플러스 '+'
x = 5;
console.log(+x);
x = "5";
console.log(+x);

// 전위 증가 '++' 
x = 5;
y = ++x;
console.log(x, y);

// 후위 증가 '++'
x = 5;
y = x++;
console.log(x, y);

// 전위 감소 '--'
x = 5;
y = --x;
console.log(x, y);

// 전위 감소 '--'
x = 5;
y = x--;
console.log(x, y);

// 단항 부정 예제
const x = 5;
const y = 3 - -x; // 결과값 y = 8, 단항 부정이 우선 실행, 이후 뺄셈 처리
````
---
```` Javascript
// 단항 플러스 예제
const s = "5";
const y = 3 + +s; // y는 8
                  // 만약 단항 플러스를 사용하지 않았다면, 문자열 병합으로 결과는 "35"

// 줄을 맞추기 위해서도 사용
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p3 = -x4*4;
````
---
```` Javascript
// 전위 증가, 후위 증가, 전위 감소, 후위 감소 
// 예제
let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

// 풀이 예제
let x = 2;
const r1 = x++ + x++;
//       ((x++) + (x++))   
//       ((  2  + (x++))   왼쪽에서 오른쪽으로 진행. x의 값은 현재 3
//       ((  2  +  3  ))   x는 지금 4
//              5          결과는 5, x는 4

const r2 = ++x + ++x;
//       ((++x) + (++x))
//       ((  5  + (++x))   왼쪽에서 오른쪽으로 진행. x의 값은 현재 5
//       ((  5  +  6  ))   x는 지금 6
//              11         결과는 11, x는 6

const r1 = x++ + ++x;
//       ((x++) + (++x))
//       ((  6  + (++x))   왼쪽에서 오른쪽으로 진행. x의 값은 현재 7
//       ((  6  +  8  ))   x는 지금 8
//              14          결과는 14, x는 8
````
---

### 5.3 연산자 우선순위
```` Javascript
// 연산자 우선순위 생각해보기 예제
let x = 3, y;
x += y = 6 * 5 / 2;
// 위 표현식을 우선순위에 따라 다음에 일어날 행동에 괄호
//
// 곱셈과 나눗셈. 우선순위 14, 왼쪽에서 오른쪽으로
//    x += y = (6 * 5) / 2
//    x += y = (30 / 2)
//    x += y = 15
// 할당. 우선순위 3, 오른쪽에서 왼쪽으로
//    x += (y = 15)
//    x += 15       y는 이제 15.
//    18            x는 이제 18.
````
---

### 5.4 비교 연산자
```` Javascript
// 일치 연산자와 동등 연산자 예제
const n = 5;
const s = "5";
n === s;               // false -- n는 Number, s는 String
n !== s;               // true 
n === Number(s);       // true -- 문자열 "5"를 숫자로 5로 변환
n !== Number(s);       // false
n == s;                // true; 권장하지 않습니다.
n != s;                // false; 권장하지 않습니다.

const a = { name: "an object" };
const b = { name: "an object" };
a === b;               // false -- 객체는 항상 다릅니다.
a !== b;               // true
a == b;                // false; 권장하지 않습니다.
a != b;                // true; 권장하지 않습니다.
````
---
```` Javascript
// 관계 연산자 예제
3 > 5;                 // false
3 >= 5;                // false
3 < 5;                 // true
3 <= 5;                // true

5 > 5;                 // false
5 >= 5;                // true
5 < 5;                 // false
5 <= 5;                // true
````
---

### 5.5 숫자 비교
```` Javascript
// 자바스크립트의 숫자가 더블 형식이기 때문에 발생하는 문제의 예제
let n = 0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);
````
---
```` Javascript
// Number.EPSILON과 관계 연산자를 사용해서 루프 탈출 예제
let n = 0;
while(true) {
    n += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);
````
---
```` Javascript
// Math.abs() 함수는 주어진 숫자의 절대값을 반환
// 예제
function difference(a, b) {
    return Math.abs(a - b);
}
console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2
````
---

### 5.6 문자열 병합
```` Javascript
// 자바스크립트는 피연산자의 타입을 보고 덧셈을 할지 문자열 병합을 할지 판단
// 예제
3 + 5 + "8"             // 문자열 "88"이 됩니다.
"3" + 5 + 8             // 문자열 "358"이 됩니다.
// 피연산자 중 하나라도 문자열이면 문자열 병합 수행
// 두 값이 모두 숫자형일때 덧셈
````
---

#### 5.8.1 단축 평가
```` Javascript
// 두 번째 피연산자에 부수 효과가 있다 하더라도,
// 단축 효과를 거치면 그 효과는 일어나지 않는다. 예제는 다음과 같다.
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(x, result);
// 이 때 skipIt이 true라면 result는 0을 반환한다.

// AND의 첫 번째 피연산자가 false이므로 두 번째 피연산자를 평가하지 않음
const doIt = false;
let x = 0;
const result = doIt && x++;
console.log(x, result);

// 그러나 doIt을 true로 바꾸면 두 피연산자를 모두 평가해야하므로
// result는 0이 된다. 이 때 x = 1
const doIt = true;
let x = 0;
const result = doIt && x++;
console.log(x, result);

// 5.8.2 피연산자가 불리언이 아닐 때 논리 연산자가 동작하는 방법

// suppliedOptions가 객체일 때,
let suppliedOptions = { status: "hungry" };
const options = suppliedOptions || { name: "Default" };
console.log(options);
// 이 때 options는 앞의 suppliedOptions의 값을 가진다.

// suplliedOptions가 'null' || 'undefined' 일 때
let suppliedOptions;
const options = suppliedOptions || { name: "Default" };
console.log(options);
// options는 name의 값을 가진다.
````

#### 5.8.3 조건 연산자
```` Javascript
// doIt의 값이 true면 두 번째 피연산자, false면 세 번째 피연산자 출력
const doIt = false;
const result = doIt ? "Did it" : "Didn't do it";
console.log(result);

// 5.8.4 쉼표 연산자

let x = 0, y = 10, z;
z = (x++, y++);
// 결과값으로 10을 반환 
// 표현식을 하나 이상 실행해야하지만, 결과값은 마지막 표현식의 값만 필요할 때 사용
````
---

#### 5.9.1 비트 연산자
```` Javascript
// 이 부분 아직 이해하기가 힘들어서 예제만 적었습니다 😭
let n = 22        // 32 비트 바이너리: 00000000000000000000000000010110
n >> 1            //                00000000000000000000000000001011
n >>> 1           //                00000000000000000000000000001011
n = ~n            // 1의 보수:       11111111111111111111111111101001
n ++              // 2의 보수:       11111111111111111111111111101010
n >> 1            //                11111111111111111111111111110101
n >>> 1           //                01111111111111111111111111110101
````
---
```` Javascript
// 유닉스에서의 세 플래그 (읽기, 쓰기, 실행)
const FLAG_EXECUTE = 1    // 0b001
const FLAG_WRITE = 2      // 0b010
const FLAG_READ = 4       // 0b100\
````
---
```` Javascript
let p = FLAG_READ | FLAG_WRITE;           // 0b110
let hasWrite = p & FLAG_WRITE;            // 0b010 - 참 같은 값
let hasExecute = p & FLAG_EXECUTE;        // 0b010 - 거짓 같은 값
p = p ^ FLAG_WRITE;          // 0b100 -- 쓰기 플래그 토글 (이제 쓰기 권한이 없습니다)
p = p ^ FLAG_WRITE;          // 0b110 -- 쓰기 플래그 토글 (쓰기 권한이 다시 생겼습니다)

// 표현식 하나로 여러 플래그를 동시에 판단할 수도 있습니다.
const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;
````
---

#### 5.9.3 void 연산자
```` HTML
<!--  
쓸모 없다고 합니다...😭
표현식을 평가해야 하긴 하지만 반환값이 undefined여야 하는 상황에 사용
-->

<a href = "javascript:void 0">Do nothing</a>

<!--
가끔 HTML에서 <a> 태그의 URI에 사용, 브라우저에서 다른 페이지로 이동하는 일을 막을 수 있음
-->
````
---

#### 5.9.4 할당 연산자
```` Javascript
let v, v0;
v = v0 = 9.8;            // 먼저 v0이 9.8이 되고, 그 다음 v가 9.8이 됨.

// n이 nums[i]의 값을 받고,
// 다음에는 표현식 전체가 그 값으로 평가되므로 숫자로 비교 가능
// ex. 첫 번째 n은 nums[0] = 3 이므로, 3의 값이 할당됨
const nums = [ 3, 5, 15, 7, 5];
let n, i = 0;
while((n = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10: ${n}`);
    console.log(`i: ${i}`);
}
console.log(`Number greater than 10 found: ${n}`); 
console.log(`${nums.length - i - 1} numbers remain.`);

/*
i가 2인 상태에서 반복문을 빠져나왔으므로 n값은 nums[2]의 값인 15
// 해당 반복문에서 배열의 값 중 두개를 사용, 마지막 10보다 큰 수 15를 호출하였으므로
// 남아있는 배열 안 숫자의 개수는 2개이다. 
*/
````
---

### 5.10 해체 할당
```` Javascript
// 객체 선언
const obj = { b: 2, c: 3, d: 4 };

// 해체 할당
const {a, b, c} = obj;
a;              // undefined: obj에는 "a"프로퍼티가 없습니다.
b;              // 2
c;              // 3
d;              // ReferenceError: "d"는 정의되지 않았습니다.
````
---

객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야함
해체 할당 명령을 내렸을 때, d는 포함이 되지 않았으므로,
d는 변수할당 되지 않았다.

```` Javascript
const obj = { b: 2, c: 3, d: 4 };
let a, b, c;

// 에러가 일어나는 경우
{a, b, c} = obj;

// 동작하는 경우
({a, b, c} = obj);
````
---
배열을 해체할 때
```` Javascript
// 배열 선언
const arr = [1, 2, 3];

// 배열 해체 할당
let [x, y] = arr;
x;              // 1
y;              // 2
z;              // ReferenceError: "z"는 정의되지 않았습니다.
````
---
```` Javascript
const arr = [1, 2, 3, 4, 5];

let [x, y, ...rest] = arr;
x;              // 1
y;              // 2
rest;           // [3, 4, 5]
````
확산 연산자 spread operator(...)을 사용해서 나머지 요소를 새 배열에 할당

---
```` Javascript
let a = 5, b = 10;
[a, b] = [b, a];
a;              // 10
b;              // 5
````
---

### 5.12 객체와 배열 연산자
```` Javascript
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` +
                `${currentTempC-roomTempC}\u00b0c different than room temperature.`;
const fahrenheit =
    `The current temperature is ${currentTempC * 9/5 +  32}\u00b0F`;
````
---

#### 5.13.1 if...else 문을 3항 연산자로 바꾸기
```` Javascript
if(isPrime(n)) {
    label = 'prime'
    console.log(label);
} else {
    label = 'non-prime';
    console.log(label);
}
````
---
```` Javascript
label = isPrime(n) ? 'prime' : 'non-prime';
````
---

#### 5.13.2 if 문을 단축 평가하는 OR 표현식으로 바꾸기
```` Javascript
if(!options) options = {};
````
---

다음과 같이 쓸 수 있음
```` Javascript
options = options || {};
// options가 true일때 options 를 그대로 할당받고, false의 경우 빈 객체를 할당받음
````