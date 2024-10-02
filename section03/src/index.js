//const {add, sub} = require("./math"); // CommonJS 사용

// ESmodule 사용
// 확장자명 꼭 붙여줘야함(math.js)
import { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
