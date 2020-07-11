// 方式一
export default function (str) {
    console.log(str);
}

// 方式二 一个文件只能一个export default，不能1个以上同时存在
/*
export default {
    eat(sth) {
        console.log("eat " + sth);
    },
    drink(sth) {
        console.log("drink " + sth);
    }
}
*/
