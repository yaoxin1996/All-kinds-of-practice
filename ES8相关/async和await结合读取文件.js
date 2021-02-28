//  引入fs模块
const fs = require('fs')

// 读取文件
function getChuShiBiao () {
    // 返回一个 promise 类型的值
    return new Promise ((resolve, reject) => {
        fs.readFile('../Promise练习/resource/出师表.md',(err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function getJiaoAn () {
    return new Promise ((resolve, reject) => {
        fs.readFile('../Promise练习/resource/教案.md',(err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function getQinYuanChun () {
    return new Promise ((resolve, reject) => {
        fs.readFile('../Promise练习/resource/出师表.md',(err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function main () {
    // await 的返回结果是 promise 成功时的值
    let chuShiBiao = await getChuShiBiao()
    let jiaoAn = await getJiaoAn()
    let qinYuanChun = await getQinYuanChun()
    console.log(chuShiBiao.toString());
    console.log(jiaoAn.toString());
    console.log(qinYuanChun.toString());
}
main()