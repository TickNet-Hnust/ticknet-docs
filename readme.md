## 目的

这里是[TickNet](http://home.ticknet.hnust.cn)应用的[开发文档](https://ticknet-docs.vercel.app)

## 注意

应用的维护人员可以更新完善文档，越详细越好

## 如何更新文档

1. 克隆仓库到本地

```shell
$ git clone git@github.com:TickNet-Hnust/ticknet-docs.git
$ cd ticknet-docs
```

2. 启动项目

```shell
# 确保有Node环境
$ npm -v
8.5.5

# 安装pnpm
$ npm install -g pnpm

# 安装依赖
$ pnpm i

# 启动项目
$ pnpm docs:dev
```

打开：<http://localhost:8080> （端口可能被其他服务占用，以命令行的提示为准）

## 提示

`docs/.vuepress/config.js` 控制着页面的结构配置

修改 `docs/.vuepress/config.js` 后要重启项目才会生效

## 发布

很简单，更新`master`分支即可自动更新文档（需要半分钟左右，域名下才会同步更新）

```
$ git push origin master
```