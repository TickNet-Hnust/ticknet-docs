## 新闻接口

小程序端的新闻接口有一些特殊，所以单独拿出来说明

![img](https://img-blog.csdnimg.cn/c6be1dcc843a4827b5d32b07a3177619.png)

可以看到，数据是来自学校的官网，通过`49.123.0.28`上面的`Python`服务抓取数据，然后暴露在`49.123.0.28:8000`

后端通过检测`49.123.0.28:8000`的数据，缓存到`Redis`上面，然后暴露`/secondclass./home/news`给前端提供服务

## 单次启动

由于某些情况，如果服务器重启，我们需要手动启动该`Python`服务

通过`ssh`来到`49.123.0.28@/home/lsh`目录下，执行:

```shell
$ uvicorn "tw_hnust_edu_cn":app --host 0.0.0.0 --port 8000
```

这样该`Python`服务就启动了。

但是我们退出`ssh`后，该服务就会停止，所以我们需要用到`linux`的`screnn`技术

## 稳定启动

重新启动终端，只需要执行：

```shell
$ screen -S news # 新建screen并进入，名称为news
$ uvicorn "tw_hnust_edu_cn":app --host 0.0.0.0 --port 8000 # 启动服务
```

然后关闭该终端，我们新开一个终端，输入:

```shell
$ screen -ls
There is a screen on:
      286730.news     (04/10/2022 12:32:35 PM)    (Detached)
1 Socket in /run/screen/S-lsh.
```

就可以看到有一个screen正在维持着该服务，即使我们关闭了终端服务也不会停止