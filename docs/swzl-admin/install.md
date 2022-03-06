## 安装

确保自己加入了`Gitlab`的`TickNet`团队，并且有读写储存库的权限

```shell
$ git clone git@gitlab.com:ticknet/lost-and-found-admin-front.git
```

得到如下目录：

```py
├─ build                # webpack@3的不同构建相关配置
├─ config               # 不同构建相关配置
├─ src                  # 开发根目录
├─ static               # 静态资源
├─ test                 # 测试相关，不用管
├─ .babelrc             # babel配置，不用管
├─ .editorconfig        # 代码一致性的配置，不用管
├─ .eslintignore        # eslint配置，不用管
├─ .eslintrc.js         # babel配置，不用管
├─ .gitignore           # git提交时忽略提交的文件
├─ .postcssrc.js        # postcss配置，不用管
├─ CHANGELOG.md         # 变更日志，不用管
├─ debug.log            # 不用管
├─ deploy-test.sh       # 部署到测试环境的shell脚本
├─ deploy.sh            # 部署到正式环境的shell脚本
├─ docs-loader.js       # 不用管
├─ gulpfile.js          # gulp配置
├─ index.html           # html
├─ LICENSE              # 开源协议，不用管
├─ package.json         # 
├─ pnpm-lock.yaml       # pnpm的锁版本
└─ README.md            # readme文档
```

建议采用`pnpm`安装

```shell
# 确保已安装pnpm
$ pnpm -v
6.29.1

# 否则，安装pnpm
$ npm install -g pnpm
```
## 启动

```shell
$ pnpm dev
```

浏览器预览：

![img](https://img-blog.csdnimg.cn/8fd17a47af3f43d3ad56d3e4666f7d38.png)