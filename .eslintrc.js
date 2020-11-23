module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base/legacy'],
  rules: {
    // 文档：https://cn.eslint.org/docs/rules/
    // 允许异步
    'generator-star-spacing': 'off',
    // 开发模式允许使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 开发环境允许使用调试 (生产模式禁用)
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 代码块中避免多余留白
    'padded-blocks': 'off',
    'comma-dangle': ['error', 'never'], // 是否允许对象中出现结尾逗号
    'no-undef': 0,
    quotes: [1],
    eqeqeq: 'off', //  关闭===校验
    'eol-last': 'off',
    indent: 'off'
  }
};
