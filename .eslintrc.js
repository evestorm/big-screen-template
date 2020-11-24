module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'airbnb-base/legacy'],
	rules: {
		// 文档：https://cn.eslint.org/docs/rules/
		'generator-star-spacing': 'off', // 强制 generator 函数中 * 号周围使用一致的空格
		// 开发模式允许使用console
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 开发环境允许使用调试 (生产模式禁用)
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 禁止使用 var
		'no-var': 'error',
		'padded-blocks': 'off', // 代码块中避免多余留白
		'comma-dangle': ['error', 'never'], // 是否允许对象中出现结尾逗号
		'no-undef': 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		quotes: 0, // 强制使用一致的反勾号、双引号或单引号 (0: double, 1: single, 2: backtick)
		eqeqeq: 'off', //  关闭 (要求使用 === 和 !==) 的校验
		'eol-last': 'off', // 要求或禁止文件末尾存在空行
		indent: 0, // 忽略强制使用一致的缩进
		"no-tabs": 0, // 忽略tab检查
		'no-mixed-spaces-and-tabs': 0 // 忽略检查当空格用于对齐时，允许混合制表符和空格。
	}
};
