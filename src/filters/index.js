/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import moment from 'moment';

/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
export const formatCurrency = (num) => {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num)) { num = "0"; }
	const sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 100 + 0.50000000001);
	let cents = num % 100;
	num = Math.floor(num / 100).toString();
	if (cents < 10) { cents = "0" + cents; }
	for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ','
		+ num.substring(num.length - (4 * i + 3));
    }
	return (((sign) ? '' : '-') + num + '.' + cents);
};

// 格式化货币
export const formatMoney = (s) => {
	if (/[^0-9]\./.test(s)) return 'invalid value';
	if (s == null) return 'invalid value';
	s = s.toString();
	s = s.replace(/^(\d*)$/, '$1.');
	s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
	s = s.replace('.', ',');
	let re = /(\d)(\d{3},)/;
	while (re.test(s)) {
		s = s.replace(re, '$1,$2');
	}
	s = s.replace(/,(\d\d)$/, '.$1');
	return s.replace(/^\./, '0.').toString();
};

// 转成大写
export const uppercase = (value) => {
	if (!value) return '';
	// 返回处理后的值
	return value.toUpperCase();
};

// 转成小写
export const lowercase = (value) => {
	if (!value) return '';
	// 返回处理后的值
	return value.toLowerCase();
};

// 首字母大写
export const capitalize = (value) => {
	if (!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
};

// 去除值为null
export const delNull = (value) => {
    if (value == null || value == undefined) return '';
    return value;
};

// 格式化日期为年月日
export const parseTextDate = (value) => {
	if (!value) return '';
	return moment(value).format("YYYY年MM月DD日");
};
// 格式化日期
export const parseShortDate = (value) => {
	if (!value) return '';
	return moment(value).format('YYYY-MM-DD');
};

// 格式化月份
export const date2month = (value) => {
	if (!value) return '';
	return moment(value).format('YYYY-MM');
};

// 格式化时间
export const parseTime = (value) => {
	if (!value) return '';
	return moment(value).format('HH:mm:ss');
};

// 格式化日期 + 时间
export const parseDateTime = (value) => {
	if (!value) return '';
	return moment(value).format('YYYY-MM-DD HH:mm');
};

// 格式化星期
export const parseShortWeek = (value) => {
	if (!value) return '';
	let week = moment(value).format('d');
	if (week == '1') {
		return '周 一';
	} if (week == '2') {
		return '周二';
	} if (week == '3') {
		return '周三';
	} if (week == '4') {
		return '周四';
	} if (week == '5') {
		return '周五';
	} if (week == '6') {
		return '周六';
	}
		return '周日';

};

// 格式化
export const currency = (value) => {
	if (!value) return 0;
	return formatCurrency(value);
};

// 币格式化带 带万的
export const currencyW = (value) => {
	if (!value) return 0;
	value /= 10000;
	return formatCurrency(value) + "万";
};

// 百分号格式化
export const percent = (value, fixPoint = 2, unit = '%') => {
	if (!value) return `0.${(new Array(fixPoint)).fill(0).join('')}${unit}`;
	value = (value * 100).toFixed(fixPoint);
	let result = value.toString() + `${unit}`;
	return result;
};

/**
 * @description 手机号码中间四位打※
 * @param {String} phone 电话号码
 */
export const formatPhone = (phone) => {
	return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};