import GlobalStore from "./globalStore";
import { autorun } from "mobx";

const stores = {
  globalStore: new GlobalStore(),
};

// autoruns是关于启动效果 (initiating effects)，而不是产生新的值
// 常用于打印日志、持久化或者更新UI的代码
autorun((view) => {
  console.log(view);
  console.log("启动会执行, stores.globalStore.count改变也会执行", stores.globalStore.count);
});
export default stores;
