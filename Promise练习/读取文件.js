const fs = require('fs')
const util = require('util')
// util.promisify可以把api转换成promise类型的函数
const mineReadFile = util.promisify(fs.readFile)

// 回调函数方式
fs.readFile('./resource/出师表.md', (err, data1) => {
  if (err) throw err
  fs.readFile('./resource/教案.md', (err, data2) => {
    if (err) throw err
    fs.readFile('./resource/沁园春雪.md', (err, data3) => {
      if (err) throw err
      console.log(data1 + data2 + data3);
    })
  })
})

// async await方式
async function main () {
  try {
    let data1 = await mineReadFile('./resource/出师表.md')
    let data2 = await mineReadFile('./resource/教案.md')
    let data3 = await mineReadFile('./resource/园春雪.md')
    console.log(data1+ data2 + data3);
  } catch (e) {
    console.log(e);
  }
}

main()