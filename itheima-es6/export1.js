// 方式一
/*
export let name = "itcast";
export let age = 13;
export let gender = "男";
export let say = function (str) {
    console.log(str);
}
*/

// 方式二
let name = "itcast";
let age = 13;
let gender = "男";
let say = function (str) {
    console.log(str);
}
export {name, age, gender, say};