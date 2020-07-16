
# 一、简介

## 1、项目介绍

- 基于 angularV10，ng.ant.design V9.3 开发的后台管理系统

## 2、 平台功能开发进度
- [x] 登录(用户名、密码、验证码)
- [x] 首页
- [x] layout
- [x] UI 控件（Ant Design）
- [x] http请求封装
- [x] services封装
- [x] 路由钩子配置

# 三、开发代码
## 1、 代码规范

- 请按照 angular 官网提出的 `风格指南`  开发代码

【风格指南】[https://angular.cn/guide/styleguide#prevent-re-import-of-the-core-module](https://angular.cn/guide/styleguide#prevent-re-import-of-the-core-module)

## 2、 前后端通信

【 使用 httpclient】[https://angular.cn/guide/http](https://angular.cn/guide/http)

## 五、代码目录结构

```markdown
.
├── README.md # 介绍文档
├── angular.json # 工作区中所有项目的默认 CLI 配置，包括 CLI 使用的构建选项、运行选项、测试工具选项（比如 TSLint、Karma、Protractor）等
├── node_modules # 提供给整个工作区的 npm 包
├── package-lock.json # 锁定安装时的包的版本号，并且需要上传到 git，以保证其他人在 npm install 时大家的依赖能保证一致。
├── package.json # 配置用于工作区中所有项目的包依赖项
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.route.ts # 根路由
│   │   ├── components # 组件
│   │   ├── service # 服务
│   │   └── share.service.ts # 单例服务
│   ├── assets # 静态资源文件
│   │   ├── browser # 浏览器
│   │   ├── doc # 文档
│   │   ├── fonts # 字体图标
│   │   │   ├── ali_iconfont # 阿里图标库
│   │   │   └── antdesign # antdesign 本地图标
│   │   ├── image # 图片资源
│   │   ├── plugin # 第三方插件
│   │   │   └── spread
│   │   ├── styles # 样式文件
│   ├── environments # 环境配置
│   │   ├── environment.51.ts # 其它环境配置
│   │   ├── environment.dev.ts # 开发环境配置
│   │   └── environment.prod.ts # 上线环境配置
│   ├── favicon.ico # 一个用在书签栏上的应用图标
│   ├── fccomponents # 平台组件
│   ├── compoennts # 模板
│   │   ├── layout  
│   │   ├── login # 指令
│   ├── services # 服务
│   │   ├── baserUrl  #请求地址  
│   │   ├── request   #http请求
│   │   ├── router   #路由守卫
│   │   ├── storage   #本地存储
│   │   ├── user   #用户操作
│   ├── index.html # 主 HTML 文件
│   ├── karma.conf.js
│   ├── main.ts # 应用的主入口点,引导应用的根模块 AppModule 来运行在浏览器中
│   ├── polyfills.ts # 为浏览器支持提供腻子脚本
│   ├── styles.less # 项目的样式文件
│   ├── test.ts
│   ├── tsconfig.app.json # 继承自工作区级的 tsconfig.json 文件
│   ├── tsconfig.spec.json
│   └── tslint.json # 继承自工作区级的 tsconfig.json 文件
├── tsconfig.json # 工作区中所有应用的默认 TypeScript 配置。包括 TypeScript 选项和 Angular 模板编译器选项。
├── tslint.json # 工作区中所有应用的默认 TSLint 配置。
├── .gitignore # 指定 Git 要忽略的非跟踪的文件。
├── .editorconfig # 代码编辑器配置
└── tslint 代码检查.READE.md # 介绍文档
```
