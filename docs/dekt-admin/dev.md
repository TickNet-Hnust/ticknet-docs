---
sidebarDepth: 2
---

## 注意

因为企业微信扫码登录的限制，你不能直接使用手机扫码，在本地开发只能通过一种特殊的方式

首先，确保自己加入了apifox的第二课堂成绩单项目：

![img](https://img-blog.csdnimg.cn/c5886f25666b41ab875347ca2c3a0901.png)

## 连接线上数据库开发

此开发方式适合复现线上出现的Bug，然后进行修复，但是谨慎对里面的数据进行操作

1. 你需要先找到这两个文件：
 * /src/utils/request.js
 * /src/utils/ruoyi.js

确保里面的 baseURL，不是就改成下面的：
```js
const baseURL = 'https://admin.ticknet.hnust.cn'
```

2. 接下来需要获得Admin-Token：

![img](https://img-blog.csdnimg.cn/66468ecef97c45f3905ce9a0cc2c5514.png)

3. 打开控制台，执行代码：

```js
cookieStore.set('Admin-Token','xxxxxxx......')
```

![img](https://img-blog.csdnimg.cn/0664741f19a8457ab4eadfa3fc6d63ee.png)

4. F5刷新页面，成功进入

![img](https://img-blog.csdnimg.cn/72f3f471611243018dd89bb652d5abf5.png)

你对于代码的修改，都会在此页面上预览效果

## 连接开发数据库开发

此开发方式可以不用担心操作任意数据，过程与上面类似，不同之处在于

需要换成另一个baseURL：

```js
const baseURL = 'http://49.123.0.26:8090'
```

以及：

**获取Admin-Token的时候需要在apifox中选择开发服务器再发送请求**