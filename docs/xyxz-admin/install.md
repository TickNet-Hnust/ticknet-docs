## 安装

确保自己加入了`GitHub`的`school-flea-market`团队，并且有读写储存库的权限（找郑淼添加）

```shell
$ git clone https://github.com/school-flea-market/market-admin.git
```

得到如下目录：

```shell
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