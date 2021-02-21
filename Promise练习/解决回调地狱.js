// 引入fs模块
const fs = require('fs')
// fs.readFile('./resource/出师表.md', (err, data1) => {
//     fs.readFile('./resource/教案.md', (err, data2) => {
//         fs.readFile('./resource/沁园春雪.md', (err, data3) => {
//             let result = data1 + `\r\n` + data2 + '\r\n' + data3
//             console.log(result.toString());
//             if (err) throw err
//         })
//     })
// })

// promise 封装多个异步任务 
// then方法链式调用
const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/出师表.md', (err, data) => {
        resolve(data)
    })
})
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/教案.md', (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/沁园春雪.md', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n').toString());
})