// const name = "전수효";
// const age = 30;
// const coffee = "아메리카노";
// const birth = 2000;

// // 문자 타입 : "".``,''
// // 숫자 타입 : 아라비아 숫자

// window.console.log(age + birth);
// window.console.log(coffee + age);
// window.console.log(age + coffee + birth);

// const age1 = "17";
// const age2 = "19";
// window.console.log(age1 + age2);

// 더하기에 문자 타입이 들어가면 모두 문자 취급함

//prompt는 문자 취급

const age = window.prompt("숫자 입력");
const number_age = Number(age);

window.alert(`만 나이로 ${number_age}의 10을 더한 값은 : ${number_age + 10}`);
