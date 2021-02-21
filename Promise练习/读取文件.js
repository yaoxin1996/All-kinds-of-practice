// 1. 引入fs
const fs = require('fs')

// 2. 调用方法获取文件
// fs.readFile('./resource/教案.md', (err, data) => {
//     // 如果有错误 则抛出
//     if (err) throw error
//     // 没错 输出内容
//     console.log(data.toString());
// })

// 3. 使用promise封装
const p = new Promise(function (resolve, reject) {
    let data = fs.readFile('./resource/教案.md', (err, data) => {
        // 失败
        if (err) reject(err)
        // 成功
        resolve(data)
        
    })
})
p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败')
})