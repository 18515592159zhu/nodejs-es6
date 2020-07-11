import {name, age, gender, say} from "./export1";

console.log(name, age, gender);
// import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
// name = "heima" //会报错 "name" is read-only

//上面代码中，脚本加载了变量name，对其重新赋值就会报错，因为name是一个只读的接口。
// 但是，如果name是一个对象，改写name的属性是允许的。也就是name.abc = xxx 这样是可以的
say("hello world");

import {name as abc, say as hello} from "./export1";

console.log(abc); // itcast
hello("hello world ....")