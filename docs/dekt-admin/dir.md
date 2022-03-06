## 目录结构

接下来介绍部分目录的结构

## src

:::tip
src 目录是最重要的一个文件夹，你大多数的开发都在此文件夹中
:::

大多数时间，你都会在下面三个文件夹工作
 
* views
* api
* router

```shell
├─ src         
│  ├─ api           # 封装了所有api     
│  ├─ assets        # 图片等静态资源
│  ├─ components    # 若依封装的一些组件
│  ├─ directive     # 若依封装的一些指令
│  ├─ layout        # 首页
│  ├─ mixins        # 混入，与上传图片有关
│  ├─ router        # 所有路由
│  ├─ store         # 若依封装的状态管理
│  ├─ style         # css
│  ├─ utils         # 工具，js函数
│  ├─ views         # 所有视图
│  ├─ APP.vue       # 页面入口
│  ├─ iconfont.js   # 不用管
│  ├─ permission.js # 不用管
│  ├─ main.js       # 打包入口
│  └─ settings.js   # 不用管
```