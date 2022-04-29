/*
 * @Author: your name
 * @Date: 2022-04-22 09:27:09
 * @LastEditTime: 2022-04-29 16:44:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnts\4.22lianxi\src\index.ts
 */
import './style/index.less'

// 获取食物元素
class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  //食物元素的x轴位置
  get x() {
    return this.element.offsetLeft
  }
  //食物元素的y轴位置
  get y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change() {
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + "px"
    this.element.style.top = top + "px"
  }
}

// let food = new Food()
// food.change()
// console.log(food);
// console.log(food.x, food.y);

//   定义表记分牌类
class Scoreapanel {
  score = 0;//分数
  level = 1;//等级

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxlevel: number;
  upScore: number;
  constructor(maxlevel: number = 10, upScore: number = 10) {
    /* this.scoreEle = document.getElementById(elementId "score")!;
    this.levelEle = document.getElementById(elementId: "level")!; */
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxlevel = maxlevel;
    this.upScore = upScore
  }

  // 设置一个加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ""
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 设置一个等级提升的方法
  levelUp() {
    if (this.level < this.maxlevel) {
      this.levelEle.innerHTML = ++this.level + ""
    }
  }

}
let scoreapanel = new Scoreapanel(maxlevel: 100, upScore: 2)

for (let index = 0; index < 10; index++) {
  scoreapanel.addScore();
}

