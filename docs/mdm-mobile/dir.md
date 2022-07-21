## 目录结构

这里介绍目录结构，主要是`src`
下面的结构

## src

:::tip
src 目录是最重要的一个文件夹，你大多数的开发都在此文件夹中
:::

```shell
├─ src
│  ├─ api           #封装了所有api
│  ├─ assets        #图片等静态资源
│  ├─ components    #封装的组件
│  ├─ composables   #组合式函数
│  ├─ config        #全局配置
│  ├─ layouts       #一些基础布局设置
│  ├─ modules       #一些模块
│  ├─ pages         #主要的页面
│  ├─ stores        #状态管理
│  ├─ styles        #样式文件
│  ├─ utils         #公共函数等
│  ├─ App.vue       #页面入口
│  ├─ auto-imports.d.ts    #自动引入和按需导入
│  ├─ components.d.ts      #组件配置
│  ├─ main.ts       #打包入口
│  ├─ shims.d.ts    #不用管
│  └─ types.ts      #不用管
```

## pages
所有比较页面都在这里了

刚开始开发的时候是直接根据[原型图](https://95vofl.axshare.com)中的页面路径来开发的
后来虽然觉得有点不太对但也懒得改了，主要目录结构介绍如下：
```
|-- pages
|   |-- index.vue     #首页
|   |-- [...all].vue  #404页面
|   |-- help          #在线帮助
|   |-- hi            #没用了
|   |-- join          #我要参与
|   |   |-- drawing       #我要抽签
|   |   |-- sign
|   |   |   |-- detail.vue          #签到记录（用户看到的）
|   |   |-- vote          #我要投票
|   |-- joinCheck     #我要签到
|   |-- launch        #发起签到
|   |-- record        #发起记录
|   |   |-- checkRecord     #签到记录（发起人看到的）
|   |   |   |-- help.vue             #辅助签到
|   |   |   |-- helpJumpPage.vue     #扫码签到跳转中间页面
|   |   |-- sortitionRecord #抽签记录
|   |   |-- voteRecord      #投票记录
|   └─  Space         #我的空间
|       |-- involve         #我参与的
|       └─  manage          #我管理的
|           |-- add_member        #成员追加
|           |   |-- addJumpPage.vue        #扫码加入空间跳转页面
|           |-- call_the_roll     #发起点名
|           |-- draw              #发起抽签
|           |   |-- owner_draw         #发起人进行抽签
|           |-- scorecard         #签到统计
|           └─  vote              #发起投票
|               └─  owner_vote         #发起人进行投票
```
