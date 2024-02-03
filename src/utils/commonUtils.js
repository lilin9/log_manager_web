export default {
  //用来清空用 reactive 声明的属性
  clearObj(obj) {
    let keys = Object.keys(obj);
    keys.forEach(key => {
      obj[key] = ''
    });
  }
}