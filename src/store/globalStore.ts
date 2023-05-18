import { makeAutoObservable } from "mobx";

export default class GlobalStore {
  constructor() {
    // 观测this里的属性，并自动给目标的所有属性添加注解
    makeAutoObservable(this);
  }

  count = 0;

  token = "";

  language = "zh";

  // computed 计算属性会产生新的值
  get total() {
    return this.count * 100;
  }
  // action 改变观测属性
  setCount(count: number) {
    this.count = count;
  }

  setToken(token: string) {
    this.token = token;
  }

  setLanguage(language: string) {
    this.language = language;
  }
}
