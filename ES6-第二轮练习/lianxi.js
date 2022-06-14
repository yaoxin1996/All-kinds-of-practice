const fs = require('fs')

function readFirst () {
  return new Promise((resolve, reject) => {
    fs.readFile('../resource/first.md', (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}

function readSecond () {
  return new Promise((resolve, reject) => {
    fs.readFile('../resource/second.md', (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}

function readThird () {
  return new Promise((resolve, reject) => {
    fs.readFile('../resource/third.md', (err, data) => {
      if (err) reject(err) 
      resolve(data.toString())
    })
  })
}

async function fun () {
  let first = await readFirst()
  let second = await readSecond()
  let thired = await readThird()
  console.log(first);
  console.log(second);
  console.log(thired);
}

fun()