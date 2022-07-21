## 项目框架介绍

项目框架使用[https://github.com/antfu/vitesse](https://github.com/antfu/vitesse)

优势：
![image](https://img-blog.csdnimg.cn/8c6d955203ef489785e9675ac17d8f23.png)

1. 组件写在`components`文件夹里面会自动读取，可以直接使用
2. `composition Api`不用引入直接使用
3. 使用[File based routing](https://github.com/antfu/vitesse/tree/main/src/pages) 因此没有router文件夹，pages文件夹下的文件路径就是路由路径

## 注意
没有router文件夹也会带来一个问题
我们以前在.ts或.js文件夹中操作路由都要先引入router对象
```js
import router from './router'
```
而现在，我们将无法直接通过这个方法拿到router，因此需要一个特殊的方法
```js
import { type UserModule } from "~/types"
export const install: UserModule = ({ router }) => {
  //此时即可对路由进行操作
  //例如：router.push('/')
}
```
