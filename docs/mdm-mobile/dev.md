## 本地开发
安装完成后可进行本地开发

## 生产环境的登录流程
企业微信提供了OAuth的授权登录方式，可以让从企业微信终端打开的网页获取成员的身份信息，从而免去登录的环节。

[https://developer.work.weixin.qq.com/document/path/91335](https://developer.work.weixin.qq.com/document/path/91335)

### 企业微信OAuth2接入流程
![img](https://p.qpic.cn/pic_wework/3033848529/181ef914a06abb1b1c775696a42f5cfcf7815f1675cdab77/0)
### 前端主要需要做的工作有
1. 如果登录状态为未登录，则判断路径中是否存在`code`字段，当然首次登录肯定是不存在的
2. 不存在`code`字段，跳转到企业微信提供的网址，同时提供`appid`（企业微信的CorpID，一般不需要更改）以及`redirect_uri`（重定向地址）
3. 企业微信授权通过后，将会重定向到`redirect_uri`的网址上，并且带上`code`和`state`参数
4. 这时路径中就已经存在`code`字段，拿到这个`code`字段向后端发送登录请求即可
```js

//获取code字段
const code = String(to.query.code)
sign(code, to.path).then(() => {
  next()
})

// 登录方法
const sign = (code: string, path: string) => {
  return new Promise((resolve, reject) => {
    if(code==='' || code===null || code==='undefined') {
      //未登录
      const corpid = 'wx6219dbfa9b86489e'
      const redirect_uri = 'signff.ticknet.hnust.cn'+ path;
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${corpid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
    } else {
      loginByCode(code).then((res: any) => {
        if(res.code === 200) {
          const newToken = res.data.access_token
          setToken(newToken)
          resolve('登录成功')
        } else {
          resolve('登录失败')
        }
      })
    }
  })
}
```
### 注意
我在这里将`cookie`的有效期设置成了30天，这样就可避免短时间内用户使用应用时每次都要重新登录，但同时也可能带来一些问题，如果后续出了一些登录状态方面的bug，可以考虑是不是这个地方的造成的
```js
export function setToken(token: string) {
  // return Cookies.set(TokenKey, token)
  return Cookies.set(TokenKey, token, { expires: 30 })//设置cookie30天过期
}
```

## 开发环境登录
因为此应用生产环境时调用企业微信内部接口登录，因此在本地开发时需作如下更改
```js
const config = {
  isLoginTest: true  //false -> true
}
```
#### 使用测试环境登录
![img](https://img-blog.csdnimg.cn/304e914ffcd9438ebe3cc42ef6362267.png)

## 登录账号设置
首先，确保自己加入了apifox的面对面签到项目
#### 这里设置了两个登录账号
![img](https://img-blog.csdnimg.cn/239b6d551052471e805e752ac1b7f771.png)


#### 当需要两个账号配合测试时可直接更改`api`下`system.ts`中的`loginByTest`方法
```js
export function loginByTest() {
  return request({
    method: 'get',
    url: '/login/test1' //使用test1或者test2
  })
}
```
![img](https://img-blog.csdnimg.cn/b8a4ea005aaf4142a142833422b38017.png)

#### 同时还需要清除登录状态
将`removeToken()`前的注释去掉即可

![img](https://img-blog.csdnimg.cn/ffa83ed14ae24160b33e2c53e379e998.png)
