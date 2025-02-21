const number = +window.prompt("10000자리 숫자를 입력하시오.");
const num = parseInt((number / 100) % 10);
window.console.log(`${num}`);

const age = +window.prompt("몇년생이신가요?");
const adult = age > 2006 ? "미성년자입니다" : "성인입니다";
window.console.log(`${adult}`);
