## 安装

确保自己加入了`GitLab`的`TickNet`团队，并且有读写储存库的权限（找林舒恒添加）

```shell
$ git clone git@gitlab.com:peterroe/school-flea-market-admin.git
```

得到如下目录：

```shell
├─ public               # 定时维护的html页面资源
├─ src                  # 主目录
├─ tests                # 测试相关，不用管
├─ .browserlistrc       # babel浏览器相关配置
├─ .editorconfig        # 同一的编辑风格配置
├─ .env                 # 默认环境配置
├─ .env.development     # 开发环境配置
├─ .env.preview         # 构建预览页面
├─ .eslintignore        # eslint相关
├─ .eslintrc.js         # eslint相关
├─ .gitignore           # git忽略的文件
├─ .postcssrc.js        # postcss相关
├─ babel.config.js      # babel相关
├─ d2-admin.babel       # d2-admin相关
├─ dependencies-cdn     # 依赖的CDN
├─ deploy-prod.sh       # 生产环境部署脚本
├─ deploy-test.sh       # 测试环境部署脚本
├─ jest.config.js       # 测试相关
├─ jsconfig.json        # js语法限制  
├─ LICENSE              # 开源协议
├─ package.json
├─ pnpm-lock.yaml       # pnpm-lock file
├─ README.md
└─ vue.config.js        # vue-cli相关配置
```

推荐使用`pnpm`进行构建依赖

```shell
# 确保自己安装了pnpm
$ pnpm -v
6.29.1

# 否则，先安装pnpm
$ npm install -g pnpm
```

然后进行安装

```shell
$ pnpm i
```

启动项目：

```shell
$ pnpm serve
```

浏览器预览：

![img](https://img-blog.csdnimg.cn/b2936bef79e04911b977d4c42a80b43c.png)

登录账号后即可看到后台界面，通过修改代码，实时查看界面效果，但是主意，因为连接的是线上的数据库，所有小心对数据进行测试

开发完成之后，进行打包，然后就是部署环节