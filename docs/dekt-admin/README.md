## 第二课堂管理端

<https://secondclass.ticknet.hnust.cn>


## 运维架构

![img](https://img-blog.csdnimg.cn/a18835208f604720a01862055e19137f.png)

## 部署地址

线上环境：

* 外网地址：<https://secondclass.ticknet.hnust.cn>（通过外网的Nginx转发到内网）
* 内网地址：<http://49.123.0.27:8086>
* 文件路径：49.123.0.27 - /app/secondclass/
* Ngnix配置路径：49.123.0.27 - /etc/nginx/conf.d/secondclass.conf

测试地址：
* 内网：<http://49.123.0.27:9999>
* 文件地址：49.123.0.27 - /app/secondclassTest/
* Ngnix配置路径：49.123.0.27 - /etc/nginx/conf.d/secondclasstest.conf

## 部署服务器

所在服务器：49.123.0.27

## SSL证书

前端接口过期时间：2022-09-26 07:59:59（来自林舒恒的腾讯云免费SSL）

后端接口过期时间：2022-10-02 07:59:59（来自林舒恒的腾讯云免费SSL）

