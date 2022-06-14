// 声明构造函数
function Promise (executor) {
  this.PromiseState = 'pending'
  this.PromiseResult = null
  this.callback = []
  let _this = this
  function resolve (data) {
    if (_this.PromiseState !== 'pending') return
    _this.PromiseState = 'fulfilled'
    _this.PromiseResult = data
    _this.callback.forEach(item => {
      item.onResolved(data)
    })
  }
  function reject (data) {
    if (_this.PromiseState !== 'pending') return
    _this.PromiseState = 'rejected'
    _this.PromiseResult = data
    _this.callback.forEach(item => {
      item.onRejected(data)
    })
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  return new Promise((resolve, reject) => {
    if (this.PromiseState == 'fulfilled') {
      try {
        let result = onResolved(this.PromiseResult)
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v)
          }, r => {
            reject(r)
          })
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }
    if (this.PromiseState == 'rejected') {
      onRejected(this.PromiseResult)
    }
    if (this.PromiseState == 'pending') {
      this.callback.push({
        onResolved, 
        onRejected
      })
    }
  })
}