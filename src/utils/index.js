/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import {
 forEach, oneOf, hasOneOf, objEqual
} from '@/utils/tools';

/**
 * @description 获取url参数（对象形式）
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * @description: 防抖函数：函数被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
 * @param {function} fn 要执行的函数
 * @param {number} delay  delay毫秒后执行回调
 * @returns {Object}
 */
export function debounce(fn, delay = 500) {
	let timer = null;
	return function () {
		const context = this;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(context, arguments);
			timer = null;
		}, delay);
	};
}

/**
 * @description: 节流函数：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行
 * @param {function} fn 要执行的函数
 * @param {number} gapTime  单位时间
 * @returns {Object}
 */
export function throttle(fn, gapTime = 500) {
	let canUse = true;
	return function () {
		if (canUse) {
			fn.apply(this, arguments);
			canUse = false;
			setTimeout(() => { canUse = true; }, gapTime);
		}
	};
}

/**
 * 获取随机整数
 * @param {number} min: Number, 最小值
 * @param {number} max: Number, 最大值
 * @param {number} range: String, 圈定范围，默认左闭右闭,可传 '[]', '[)', '(]', '()'
 * @returns {number}
 */
export function getRandomNumberFrom(min, max, range = '[]') {
	let num = 0;
	switch (range) {
		case '[)':
			num = Math.floor(Math.random() * (max - min) + min);
			break;
		case '(]':
			num = Math.ceil(Math.random() * (max - min) + min);
			break;
		case '()':
			num = Math.round(Math.random() * (max - min - 2) + min + 1);
			break;
		default:
			num = Math.round(Math.random() * (max - min) + min);
	}
	return num;
}

/**
 * @description 类切换
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += '' + className;
  } else {
    classString = classString.substr(0, nameIndex)
      + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * @description 数组去重
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * @description 检查一个元素是否包含某个类
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

/**
 * @description 给露个元素添加类
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

/**
 * @description 删除类
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

export const hasChild = item => {
  return item.children && item.children.length !== 0;
};

const showThisMenuEle = (item, access) => {
  if (
    item.meta
    && item.meta.auth
    && item.meta.auth.length
    && access
    && access.length
  ) {
    if (hasOneOf(item.meta.auth, access)) return true;
    return false;
  } return true;
};
/**
 * @description 通过路由列表得到菜单列表
 * @param {Array} list 路由列表
 * @param {string} 类型
 * @returns {Array}
 */
export const getMenuByRouter = (list, type, auth) => {
  let res = [];
  forEach(list, item => {
    let isAuth = true;
    if (item.meta.power && item.meta.power.length && type) {
      if (!oneOf(type, item.meta.power)) {
        isAuth = false;
      }
    }
    if (item.meta.auth && item.meta.auth.length && auth && auth.length) {
      isAuth = hasOneOf(item.meta.auth, auth);
    }
    if (!item.meta.hideInMenu && isAuth) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      };
      if (
        (hasChild(item) || (item.meta && item.meta.showAlways))
        && showThisMenuEle(item, type)
      ) {
        obj.children = getMenuByRouter(item.children, type, auth);
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href;
      if (showThisMenuEle(item, type)) res.push(obj);
    }
  });
  return res;
};

/**
 * @description 当前路由matched
 * @param {Array} routeMatched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = {
    ...homeRoute,
    icon: homeRoute.meta.icon
  };
  let routeMatched = route.matched;
  if (routeMatched.some(item => item.name === homeRoute.name)) return [homeItem];
  let res = routeMatched
    .filter(item => {
      return item.meta === undefined || !item.meta.hide;
    })
    .map(item => {
      let meta = {
        ...item.meta
      };
      if (meta.title && typeof meta.title === 'function') { meta.title = meta.title(route); }
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: meta
      };
      return obj;
    });
  res = res.filter(item => {
    return !item.meta.hideInMenu;
  });
  return [
    {
      ...homeItem,
      to: homeRoute.path
    },
    ...res
  ];
};

export const getRouteTitleHandled = route => {
  let router = {
    ...route
  };
  let meta = {
    ...route.meta
  };
  if (meta.title && typeof meta.title === 'function') { meta.title = meta.title(router); }
  router.meta = meta;
  return router;
};

/**
 * @description 过滤日期时间
 * @param {string} value 时间
 * @param {*} type 类型
 */
export const validate = (value, type = 'date') => {
  let date;
  if (!value || value === '') {
      date = new Date();
  } else {
      date = new Date(value);
  }
  let years = date.getFullYear();
  let months = (date.getMonth() + 1).toString().padStart(2, '0');
  let days = date
      .getDate()
      .toString()
      .padStart(2, '0');
  if (type === 'dateTime') {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${years}-${months}-${days} ${hours}:${minutes}:${seconds}`;
  }
  return `${years}-${months}-${days}`;
};
export const showTitle = item => (item.meta && item.meta.title) || item.name;

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalStorage = list => {
  localStorage.tagNaveList = JSON.stringify(list);
};
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalStorage = () => {
  const list = localStorage.tagNaveList;
  return list ? JSON.parse(list) : [];
};

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = 'home') => {
  let i = -1;
  let len = routers.length;
  let homeRoute = {};
  while (++i < len) {
    let item = routers[i];
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children, homeName);
      if (res.name) {
        return res;
      }
    } else if (item.name === homeName) {
        homeRoute = item;
      }
  }
  return homeRoute;
};

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const { name, path, meta } = newRoute;
  let newList = [...list];
  if (newList.findIndex(item => item.name === name) >= 0) return newList;

    newList.push({
      name,
      path,
      meta
    });

  return newList;
};

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) { return hasOneOf(access, route.meta.access); } return true;
};

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = list => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children);
      } if (item.name === name) {
        return hasAccess(access, item);
      }
    });
  };

  return routePermissionJudge(routes);
};

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&');
  let paramObj = {};
  keyValueArr.forEach(item => {
    const keyValue = item.split('=');
    paramObj[keyValue[0]] = keyValue[1];
  });
  return paramObj;
};

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {};
  const params2 = route2.params || {};
  const query1 = route1.query || {};
  const query2 = route2.query || {};
  return (
    route1.name === route2.name
    && objEqual(params1, params2)
    && objEqual(query1, query2)
  );
};

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list, route) => {
  let res = {};
  if (list.length === 2) {
    res = getHomeRoute(list);
  } else {
    const index = list.findIndex(item => routeEqual(item, route));
    if (index === list.length - 1) res = list[list.length - 2];
    else res = list[index + 1];
  }
  return res;
};

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};

/**
 * @param {Object} file 从上传组件得到的文件对象
 * @returns {Promise} resolve参数是解析后的二维数组
 * @description 从Csv文件中解析出表格，解析成二维数组
 */
export const getArrayFromFile = file => {
  let nameSplit = file.name.split('.');
  let format = nameSplit[nameSplit.length - 1];
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsText(file); // 以文本格式读取
    let arr = [];
    reader.onload = function (evt) {
      let data = evt.target.result; // 读到的数据
      let pasteData = data.trim();
      arr = pasteData
        .split(/[\n\u0085\u2028\u2029]|\r\n?/g)
        .map(row => {
          return row.split('\t');
        })
        .map(item => {
          return item[0].split(',');
        });
      if (format === 'csv') resolve(arr);
      else reject(new Error('[Format Error]:你上传的不是Csv文件'));
    };
  });
};

/**
 * @param {Array} array 表格数据二维数组
 * @returns {Object} { columns, tableData }
 * @description 从二维数组中获取表头和表格数据，将第一行作为表头，用于在iView的表格中展示数据
 */
export const getTableDataFromArray = array => {
  let columns = [];
  let tableData = [];
  if (array.length > 1) {
    let titles = array.shift();
    columns = titles.map(item => {
      return {
        title: item,
        key: item
      };
    });
    tableData = array.map(item => {
      let res = {};
      item.forEach((col, i) => {
        res[titles[i]] = col;
      });
      return res;
    });
  }
  return {
    columns,
    tableData
  };
};

export const findNodeUpper = (ele, tag) => {
  if (ele.parentNode) {
    if (ele.parentNode.tagName === tag.toUpperCase()) {
      return ele.parentNode;
    }
      return findNodeUpper(ele.parentNode, tag);

  }
};

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode;
  if (parentNode) {
    let classList = parentNode.classList;
    if (
      classList
      && classes.every(className => classList.contains(className))
    ) {
      return parentNode;
    }
      return findNodeUpperByClasses(parentNode, classes);

  }
};

export const findNodeDownward = (ele, tag) => {
  const tagName = tag.toUpperCase();
  if (ele.childNodes.length) {
    let i = -1;
    let len = ele.childNodes.length;
    while (++i < len) {
      let child = ele.childNodes[i];
      if (child.tagName === tagName) return child;
      return findNodeDownward(child, tag);
    }
  }
};

export const showByAccess = (access, canViewAccess) => {
  return hasOneOf(canViewAccess, access);
};

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let len = tagNavList.length;
  let res = false;
  doCustomTimes(len, index => {
    if (routeEqual(tagNavList[index], routeItem)) res = true;
  });
  return res;
};

export const localSave = (key, value) => {
  localStorage.setItem(key, value);
};

export const localRead = key => {
  return localStorage.getItem(key) || '';
};

export const sessionSave = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const sessionRead = (key, value) => {
  return JSON.parse(sessionStorage.getItem(key, value));
};

export const cookieSave = (key, value, expireDays) => {
  let expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  document.cookie = key
    + '='
    + escape(value)
    + (expireDays == null ? '' : ';expires=' + expireDate.toGMTString());
};

export const cookieRead = key => {
  let cookies = document.cookie.replace(/[ ]/g, ''); // 获取cookie，并且将获得的cookie格式化，去掉空格字符
  let arrCookie = cookies.split(';'); // 将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
  let tips; // 声明变量tips
  for (let i = 0; i < arrCookie.length; i++) {
    // 使用for循环查找cookie中的tips变量
    let arr = arrCookie[i].split('='); // 将单条cookie用"等号"为标识，将单条cookie保存为arr数组
    if (key == arr[0]) {
      // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
      tips = arr[1]; // 将cookie的值赋给变量tips
      break; // 终止for循环遍历
    }
  }
  return tips;
};