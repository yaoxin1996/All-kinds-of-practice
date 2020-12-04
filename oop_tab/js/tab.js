var that
class tab {
  constructor (id) {
    // 获取元素
    this.main = document.querySelector(id)
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
    this.init()
  }
  // 初始化
  init () {
    that = this
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
    }
  }
  // 切换
  toggleTab () {
    that.clearClass()
    this.className = 'liactive'
    that.sections[this.index].className = 'conactive'
  }
  // 添加
  addTab () {}
  // 删除
  delTab () {}
  // 修改
  editTab () {}
  // 清除样式
  clearClass () {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.sections[i].className = ''
    }
  }
}

new tab('#tab')