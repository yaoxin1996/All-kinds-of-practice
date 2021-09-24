let that
class Tab {
  constructor (Id) {
    that = this
    this.main = document.querySelector(Id)
    this.addBtn = this.main.querySelector('.tabadd')
    // li的父元素
    this.ul = this.main.querySelector('.fisrstnav ul:first-child')
    // section的父元素
    this.tabscon = this.main.querySelector('.tabscon')
    this.init()
  }
  init () {
    this.updateNode()
    // 初始化 让相关元素绑定事件
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
      this.remove[i].onclick = this.removeTab
      this.spans[i].ondblclick = this.editTab
      this.section[i].ondblclick = this.editTab
    }
    this.addBtn.onclick = this.addTab
  }
  // 动态添加元素
  updateNode () {
    this.lis = this.main.querySelectorAll('li')
    this.section = this.main.querySelectorAll('section')
    this.remove = this.main.querySelectorAll('.icon-guanbi')
    this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
  }
  // 清除样式
  clearStyle () {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.section[i].className = ''
    }
  }
  // 1. 切换tab
  toggleTab () {
    that.clearStyle()
    this.classList.add('liactive')
    that.section[this.index].className = 'conactive'
  }
  // 2. 添加tab
  addTab () {
    let num = Math.random()
    that.clearStyle()
    var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
    var section = `<section class="conactive">测试${num}</section>`
    that.ul.insertAdjacentHTML('beforeend', li)
    that.tabscon.insertAdjacentHTML('beforeend', section)
    that.init()
  }
  // 3. 修改tab
  editTab () {
    window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty()
    this.innerHTML = `<input type="text" value="${this.innerText}"/>`
    let input = this.children[0]
    input.select()
    // 失去焦点
    input.onblur = function () {
      this.parentNode.innerHTML = this.value
    }
    // 回车
    input.onkeyup = function (e) {
      if (e.keyCode == 13) {
        this.onblur()
      }
    }
    console.log(input);

  }
  // 4. 删除tab
  removeTab (e) {
    e.stopPropagation()
    let i = this.parentNode.index
    console.log(i);
    that.lis[i].remove()
    that.section[i].remove()
    that.init()
    // 当删除的li不是选中状态，原来的li状态保持不变
    if (document.querySelector('.liactive')) {
      return
    }
    // 删除当前元素时，让它的前一个元素选中
    that.lis[i - 1] && that.lis[i - 1].click()
  }
}

new Tab('#tab')