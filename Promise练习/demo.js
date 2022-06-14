// util.promisify方法
// 引入util模块
const util = require('util')
// 引入fs模块
const fs = require('fs')
// 返回一个新的promise函数
// 把异步回调方法改为返回promise实例
let mineReadFile = util.promisify(fs.readFile)
mineReadFile('./resource/出师表.md').then(res => {
  console.log(res.toString());
}, err => {
  console.log(err);
})

let p = new Promise((resolve, reject) => {
  // 同步调用
  console.log(1111);
})
console.log(222);