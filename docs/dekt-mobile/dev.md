## 开发

首先，确保自己加入了apifox的第二课堂成绩单项目：

![img](https://img-blog.csdnimg.cn/c5886f25666b41ab875347ca2c3a0901.png)


## 修改开发环境

找到`js/http.js`文件:

```js
let flag = false;  //flag的值控制环境
let _baseUrl = "";
if (flag) {
  _baseUrl = "http://49.123.0.26:8090";   //测试数据库
} else {
  _baseUrl = "https://admin.ticknet.hnust.cn";  //线上数据库
}
```

## 原生微信/企业微信

小程序可以同时运行在**微信**上和**企业微信**上，但是这两个平台对小程序调用的`API`支持度是不一样的（tip：原生微信小程序支持所有，企业微信小程序支持部分）

[https://developer.work.weixin.qq.com/document/path/91503](https://developer.work.weixin.qq.com/document/path/91503)

例如：

![img](https://img-blog.csdnimg.cn/e812dfcd6a844db8b510baaffa001c48.png)

简而言之就是如果你想要的你的小程序同时能够在两个环境运行，只能采用它们都支持的`API`，而我们这个小程序也是这么做的

## 登录的不同

运行在不一样的环境，自然也是有不同的登录流程，下面解释小程序的登录流程调用：

1. 先在`app.js`中注册login函数

```js
let login = require("./js/login.js"); //login来自该文件

App({
  getToken() {
    return new Promise((resolve, reject) => {
      login(resolve, reject);
    });
  },
```

然后在`pages/index/index.js`中就可以调用：

```js
const app = getApp();

//...
async onLoad() {
    await app.getToken(); //等待获取token
}
```

上面的代码就是调用函数，真正的核心还是在`/js/login.js`文件，我们来看看：

```js
import { baseUrl } from "./http.js";
function reLogin(resolve, reject) {
  wx.getSystemInfo({        //获取系统信息
    success: (e) => {
      if (e.environment && e.environment == "wxwork") {
        //企业微信环境下进行的操作
      } else {
        //普通微信环境下进行的操作
      }
    },
  });
}

module.exports = reLogin;
```

先来看看企业微信环境下进行的操作的代码，原生微信环境下同理：

```js
if (e.environment && e.environment == "wxwork") {
    wx.qy.login({   //调用企业微信登录API
        success: function (res) {
        console.log("登录请求发送成功：", res);
        if (res.code) {
            //发起网络请求
            wx.request({
                url: `${baseUrl}/MpLoginByCode/${res.code}`,
                success: (res) => {
                    console.log("后端换取token请求发送成功：", res);
                    res.data.data && wx.setStorageSync("token", res.data.data.token); //存储Token
                    resolve();
                },
                fail: (err) => {    //学校有一台DNS服务器有问题，某些用户可能会导致错误
                    wx.showModal({
                        content: '获取运营商服务失败，请尝试连接校园网后重启！',
                    })
                    console.log("后端换取token请求发送失败：", err);
                    reject();
                },
            });
        } else {
            console.log("登录失败！" + res.errMsg);
            reject();
        }
        },
    });
}
```

## 请求流程

请求是我自己封装的请求，可以查看`js/http.js`

除去弹窗提示，下面是核心的代码

```js
let flag = false;
let _baseUrl = "";
if (flag) {
  _baseUrl = "http://192.168.124.10:8080";
} else {
  _baseUrl = "https://admin.ticknet.hnust.cn";
}
export const baseUrl = _baseUrl;
let commonParams = {
  url: "",
  data: {},
  method: "POST",
  header: {},
  dataType: "json",
};

export const request = (opt) => { //用的是这个
  let options = Object.assign({}, commonParams, opt);
  let { url, data, method, header, dataType } = options;
  header["Authorization"] = wx.getStorageSync("token") || ""; //提取储存的token，放到请求头上面
  let _url = baseUrl + url; //合成url
  showFullScreenLoading();
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      data: data,
      method: method,
      header: header,
      dataType: dataType,
      success: function (res) {
        if (res && res.statusCode == 200 && res.data) {
          if (res.data.code == 401) {       //401token失效重新登录
            reLogin(resolve, reject);
          } else if (res.data.code == 403) {  //403无权限
            wx.showToast({
              title: "无权限操作",
              icon: "loading",
              duration: 1000,
            });
            reject(res);
          } else if (res.data.msg == "不允许重复提交，请稍后再试") {
            wx.showToast({
              title: "不允许频繁操作，请稍后再试",
              icon: "none",
              mask: true,
              duration: 1000,
            });
          } else if (               //500服务端出错
            res.data.code == 500 &&
            res.data.data == null &&
            res.data.msg != "操作失败"
          ) {
            console.log(res, res.data);
            wx.showModal({
              content: "未知错误，请反馈给管理员",
              showCancel: false,
            });
          } else {
            resolve(res.data);
          }
        } else {
          reject(res);
        }
      }
    });
  });
};
```

上面的看起来很复杂，但其实可以不用管那么多，使用方法很简单：

```js
import { request } from '../../js/http.js'

//get请求
request({
    url: "/secondClass/activity/list", //地址（根据apifox来）
    method: "GET",
    data: {
        name: '123'
    },
}).then((value) => {
    console.log(value) //拿到数据
}

//其他请求的写法可以从pages里面某些页面的`.js`文件里面找
```