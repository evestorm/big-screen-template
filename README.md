# Vue 大屏项目模板

## 环境

- vue/cli3
- node v14+
- npm v6+

## VSCode 安装插件：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 组件库

- [DataV](https://github.com/DataV-Team/Datav)
- [Echarts](https://echarts.apache.org/zh/index.html)

优先使用 DataV 组件库，无法实现则使用 Echarts。

## 大屏配置

若大屏尺寸为 3840 \* 1080 ，则需要修改如下配置：

### 项目根目录下 `.env` 文件

```js
SCREEN_WIDTH = 3840;
SCREEN_HEIGHT = 1080;
```

### pages/DashBoard.vue 文件

```css
.dashboard {
  width: 3840px;
  height: 1080px;
  ...;
}
```

布局采用绝对定位，设计稿上多少 px，实际代码中就写多少 px。项目中已写好两个示例，分别为 DataV 的写法和 ECharts 的写法。见 `components` 文件夹下的 `datavBar` 以及 `echartsBar` 。

## 项目运行脚本

### 依赖包安装

```shell
npm install
```

### 本地运行&热更新

```shell
npm run serve
```

### 编译发布

```shell
npm run build
```

### Lints 代码风格修复

```shell
npm run lint
```
