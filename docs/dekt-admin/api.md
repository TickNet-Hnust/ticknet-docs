## 核心结构

与二课核心有关的几乎都在 **src/api/application/secondClass** 目录下

此处只介绍这个文件夹

```shell
├─ application
│  ├─ secondclass               # 核心目录
│     ├─ activity                  # 活动页面有关
│     ├─ creditDetail              # 学分详细页面有关
│     ├─ creditFind                # 学分查询页面有关
│     ├─ creditVerify              # 学分审核页面有关
│     ├─ creditWarning             # 学分预警页面有关
│     ├─ dict                      # 字典页面有关
│     ├─ group                     # 群组页面有关
│     ├─ growthRecord              # 成长记录页面有关
│     ├─ rotation                  # 小程序轮播同页面有关
│     ├─ utils                     # 工具接口
│     ├─ course.js                 # 课程页面有关
│     ├─ courseClassification.js   # 积分标准页面有关
│     ├─ index.js                  # 将所有接口从这里导出！
│     ├─ schoolYear.js             # 学年有关
│     ├─ traningProgram.js         # 培养方案有关
│  └─ ossImage.js        # 上传图片有关
```

## 如何封装接口

根据 Apifox 上接口的格式封装

```js
import request from '@/utils/request.js'  //导入封装的axios

export function xxx() {  //自己去取一个函数名
    return request({
        url: '/xxxxxx/xxxxx',  //接口路径
        method: 'xxx',  //方法名
    })
}
```

**method**

根据 apifox，apifox 写的什么类型，就写什么类型，常见的`get、post、delete、put`

**参数类型**

后端可能需要各种各样的类型，总结为以下几个类别

### Query型

例如：

![img](https://img-blog.csdnimg.cn/cdd31db6528e4c64b162482126f7b3f1.png)

需要在返回的对象上添加上参数 **params**：

```js
export function activityList(params) {  //参数写params
    return request({
        url: '/admins/secondClass/activity/list',
        method: 'get',
        params     //这里也为params
    })
}

//在另一个页面调用，调用方式与Query类似
activityList({
    schoolYearId: xx,
    deptId: xx
    //...
}).then(value => {
    console.log('接口返回的数据：', value)
})
```

### Body型

![img](https://img-blog.csdnimg.cn/891b3f3970db46ceb347ef10a255fbbe.png)

需要

```js
export function activityPut(data) { //参数写data
    return request({
        url: '/admins/secondClass/activity',
        method: 'put',
        data        //参数写data
    })
}

//在另一个页面调用的时候
activityPut({
    id: xx,
    activityEndTime: xx
    //...
}).then(value => {
    console.log('接口返回的数据：', value)
})
```

### Path型

例如：

![img](https://img-blog.csdnimg.cn/6a6e2ee6948741baa05728104b4304ca.png)

**需要自己手动将参数拼接到路径中：**

```js
export function activityIdNextStatus({ id, nextStatus }) {
    return request({
        url: `/admins/secondClass/activity/${id}/${nextStatus}`,
        method: 'put'
    })
}

//在另一个页面调用的时候
activityIdNextStatus({
    id: xx,
    nextStatus: xx
}).then(value => {
    console.log('接口返回的数据：', value)
})
```

### 混合型

混合型是上面的组合，我们可以灵活应对，例如下面的接口既有Query又有Path

![img](https://img-blog.csdnimg.cn/a700870b19ae44a2964b135321eb9097.png)

下面只是一个例子，你可以用喜欢的方式

```js
export function queryIntegralUserName({ userName, params }) {
    return request({
        url: `/admins/secondClass/activity/integral/queryIntegral/${userName}`,
        method: 'get',
        params
    })
}

//在另一个页面调用的时候
queryIntegralUserName({
    userName: xx,
    params: {
        pageNum: xx,
        pageSize: xx
    }
}).then(value => {
    console.log('接口返回的数据：', value)
})
```