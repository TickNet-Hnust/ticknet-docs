## 本地安装
1. github仓库：[https://github.com/TickNet-Hnust/sign](https://github.com/TickNet-Hnust/sign)
   注：开发中 待开发完成会迁移到另外的仓库

2. 确保自己是TickNet-Hnust组织的成员，如果不是，找管理员添加（蒋俊杰）

3. 本地克隆该仓库的main分支

```shell
$ git clone -b main git@github.com:TickNet-Hnust/sign.git
```

4. 你将会得到如下目录结构

## 目录结构
```shell {}
├─ .github
├─ .vscode
├─ cypress
├─ locales
├─ public      #静态文件夹
├─ src         #开发根目录
├─ test
├─ .eslintignore
├─ .eslintrc
├─ .gitignore           #git提交忽略的文件
├─ .npmrc
├─ cypress.json
├─ deploy.sh            #部署相关
├─ inedx.html
├─ LICENSE
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ pmpm-lock.yaml
├─ README.md            #readme文档
├─ README.zh-CN.md
├─ tsconfig.json
├─ unocss.config.ts
├─ vite.config.ts
```

## 启动项目
采用pnpm安装

```shell {}
# 安装pnpm
$ npm install -g pnpm

# 安装依赖
$ pnpm i

# 启动项目
$ pnpm dev
```
