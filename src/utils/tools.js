/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/**
 * forEach循环
 * @param {*} arr 数组
 * @param {*} fn 回调
 */
export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
      let item = arr[i];
      fn(item, i, arr);
  }
};

/**
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 * @param {*} arr1 数组1
 * @param {*} arr2 数组2
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length);
  let i = -1;
  let res = [];
  while (++i < len) {
      const item = arr2[i];
      if (arr1.indexOf(item) > -1) res.push(item);
  }
  return res;
};

/**
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 * @param {*} arr1 数组1
 * @param {*} arr2 数组2
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

/**
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {*} arr1 数组1
 * @param {*} arr2 数组2
 */
export const hasOneOf = (targetArr, arr) => {
  return targetArr.some(_ => arr.indexOf(_) > -1);
};

/**
 * @description 用来验证的字符串或数值在列表中
 * @param {*} arr1 数组1
 * @param {*} arr2 数组2
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
      if (value == validList[i]) {
          return true;
      }
  }
  return false;
}

/**
 * @description 当前浏览器名称
 * @returns {string}
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent;
  const isExplorer = (exp) => {
      return ua.indexOf(exp) > -1;
  };
  if (isExplorer('MSIE')) return 'IE';
  if (isExplorer('Firefox')) return 'Firefox';
  if (isExplorer('Chrome')) return 'Chrome';
  if (isExplorer('Opera')) return 'Opera';
  if (isExplorer('Safari')) return 'Safari';
  return 'Unknown';
};

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  };
}());

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler);
    }
  };

}());

/**
 * @description 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * @param {*} obj 对象
 * @param {*} key key值
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj;
      let keysArr = Object.keys(obj);
      return keysArr.length;
};

/**
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 * @param {object} obj1 对象1
 * @param {object} obj2 对象2
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) return false;
  if (keysArr1.length === 0 && keysArr2.length === 0) return true;
  return !keysArr1.some(key => obj1[key] != obj2[key]);
};

/**
 * @description 判断对象是否为空
 * @param {string} key 键
 * @param {object} obj 对象
 */
export const isEmpty = (key, obj = {}) => {
  const keysArray = Object.keys(obj);
  let ret = false;
  if (keysArray !== 0) {
    ret = keysArray.indexOf(key) === -1 || obj[key] === undefined || obj[key] === null;
  } else {
    ret = key === undefined || key === null;
  }
  return ret;
};

/**
 * @description 获取一个随机数
 * @returns {string}
 */
export const getRandomNumber = () => {
  return Math.random() + '' + new Date().getTime();
};