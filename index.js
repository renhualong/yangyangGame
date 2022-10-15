//公共方法
function setStyle(d, styleObject) {
  for (const key in styleObject) {
    d["style"][key] = styleObject[key]
  }
  d["style"]["transition"] = ".225s"
}
//随机坐标
function randomKPosition(min, max) {
  return randomKey(min, max)
}
//随机数
function randomKey(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min)
}
//打乱数组
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1
}
//获取Dom元素
const app = document.querySelector('#APP')
console.log(app)
//设置图片的大小
const $width = 50
const $height = 50
//多少组 3的倍数
const BlockNums = 12
//存放Block块
const allBlock = []
//图片地址
const Imgs = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',

]
//游戏是否结束？
const gameOver = false
//定义一个类，类的实例对象上保存自身信息
class Block {
  constructor(src, i) {
    this.width = $width
    this.height = $height
    this.src = src
    this.index = i
    this.n = src
    this.blockState = false
  }
  draw() {
    const ImgDom = new Image()
    ImgDom.src = this.src
    ImgDom.id = this.index
    let style = {
      width: this.width + 'px',
      height: this.height + 'px',
    }
    setStyle(ImgDom, style)
    return ImgDom

  }
}

function drawBlock(gloup) {
  let virtualArr = []
  for (let i = 0; i < gloup; i++) {
    virtualArr.push(...Imgs.sort(randomSort))
  }
  virtualArr.forEach((item, index) => {
    const vBlock = new Block(item, index)
    allBlock.push(vBlock)
  })
  allBlock.forEach(item => {
    app.appendChild(item.draw())
  })
}
drawBlock(BlockNums)
console.log(allBlock)
