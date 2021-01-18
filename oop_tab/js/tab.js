// var that
class tab {
  constructor (id) {
    // that = this
    // 获取元素
    this.main = document.querySelector(id)
    this.add = this.main.querySelector('.tabadd')
    // li 的父元素
    this.ul = this.main.querySelector('.firstnav ul:first-child')
    // section 的父元素
    this.fsection = this.main.querySelector('.tabscon')
    this.init()
  }
  // 初始化
  init () {
    this.updateNode()
    this.add.onclick = this.addTab.bind(this.add, this)
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      // 方法后面不加括号 (加括号会立即执行，当前是click之后才执行)
      // bind 方法 第一个参数指 不改变原来this的指向， 第二个参数修改this指向
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this)
      this.remove[i].onclick = this.delTab.bind(this.remove[i], this)
      this.spans[i].ondblclick = this.editTab
      this.section[i].ondblclick = this.editTab
    }
  }
  // 获取元素
  updateNode () {
    this.lis = this.main.querySelectorAll('li')
    this.section = this.main.querySelectorAll('section')
    this.remove = this.main.querySelectorAll('.icon-guanbi')
    this.spans = this.main.querySelectorAll('.firstnav span:first-child')
  }
  // 切换
  toggleTab (that) {
    that.clearClass()
    this.className = 'liactive'
    that.section[this.index].className = 'conactive'
  }
  // 添加
  addTab (that) {
    that.clearClass()
    var random = Math.random()
    // 先创建新元素
    var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
    var section = '<section class="conactive">'+ random +'</section>'
    // 追加到li的父元素末尾
    that.ul.insertAdjacentHTML('beforeEnd', li)
    that.fsection.insertAdjacentHTML('beforeEnd', section)
    // 初始化 获取元素 并绑定事件 (先创建元素再初始化)
    that.init()
  }
  // 删除
  delTab (that, e) {
    e.stopPropagation()  // 阻止冒泡 即 点击关闭图标时触发li上的点击事件
    var index = this.parentNode.index  // 获取父元素的索引值
    // remove 可以直接移除元素
    that.lis[index].remove()
    that.section[index].remove()
    that.init()
    // 当删除的不是选中状态的li  原有选中状态保持不变 仅删除点击的li
    // return 之后的代码不执行
    if (document.getElementsByClassName('liactive')) return
    // 移除当前元素之后让它的前一个默认为选定状态
    index--
    // click  手动调用click 事件 (当存在li时执行)
    // && 相当于 that.lis[index] 为true 时，执行that.lis[index].click()
    that.lis[index] && that.lis[index].click()
  }
  // 修改
  editTab () {
    // 获取span中的值
    var str = this.innerHTML
    // 双击时禁止选中文字
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    // 双击创建元素
    this.innerHTML = '<input type="text"/>'
    // 把原来span的值赋给input 并选中
    var input = this.children[0]
    console.log(str);
    input.value = str
    input.select()
    // 输入框失去焦点时 把输入的值赋给span
    input.onblur = function () {
      this.parentNode.innerHTML = this.value
    }
    // 按下回车键时 赋值给span
    input.onkeyup = function (e) {
      if (e.keyCode == 13) {
        this.blur()
      }
    }
  }
  // 清除样式
  clearClass () {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.section[i].className = ''
    }
  }
}

new tab('#tab')