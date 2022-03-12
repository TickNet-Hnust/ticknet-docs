## 本地安装

1. gitlab私有仓库：<https://gitlab.com/ticknet/lost-and-found-front>

2. 确保自己是这个私有仓库的成员，如若没有，找管理员添加（林舒恒）

3. 然后，本地克隆该仓库的 **master分支**

```shell
$ git clone git@gitlab.com:ticknet/lost-and-found-front.git
```

4. 你将会得到如下目录结构

## 目录结构

```shell {}
├─ public   # 静态资源
├─ src      # 核心目录
├─ static   # 静态资源
├─ .browserslistrc  # 打包浏览器兼容相关
├─ .editorconfig    # 编辑配置
├─ .env.development
├─ .env.production
├─ .env.staging
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .postcssrc.js
├─ .prettierrc
├─ babel.config.js
├─ deploy-stage.sh
├─ deploy.sh
├─ package.json
├─ README.md
├─ vue.config.js
```

## 安装依赖

因为该项目用到了`node-sass`，而`npm`下载`node-sass`依赖时需要用到`python`，所以确保你的电脑环境中支持`python`

```bash
$ npm install
```

## 授权

确保自己在企业号的分级管理员中

![img](https://img-blog.csdnimg.cn/30dc3a8fb50c4ae5b66265f28b05e9e5.png)

并且打开了开发选项

![img](https://img-blog.csdnimg.cn/8964ea159c9940dca017612a92ba3ca3.png)

使用微信开发者工具，调成URL的模式，访问`https://lost.ticknet.hnust.cn`

![img](https://img-blog.csdnimg.cn/3fe446a7cc064e9c9c3510d02403e442.png)

## 部署

部署方式和管理端差不多，[点击跳转](/swzl-admin/deploy)