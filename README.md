# NV UI

`NV-UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 H5 网站前端页面


## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上

## 安装

- npm 

```bash
npm install nvui --save
```

## 使用

###全局引入

```js
import NVUI from 'nvui' // 引入组件库
import '../node_modules/nvui/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(NVUI)
```

###按需引入

```js
import { WButton } from 'nvui'

export default {
  components: {
    WButton
  }
}
```

## 自定义样式

### 全局安装gulp 

```bash
npm install gulp -g
```

### 新增或修改默认样式

用户可在/packages/theme-default/src文件夹下修改和新增组件样式


### 执行gulp打包

```bash
gulp build
```

### 页面引入相应的样式文件

```js
import '../node_modules/nvui/packages/theme-default/lib/index.css'
```


## 贡献

如果你在使用 `NV-UI` 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/zj0715zh/nvui/issues)

