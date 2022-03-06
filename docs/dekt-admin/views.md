## 视图

:::info
views中存放着所有的视图页面，打感叹号的都值得你注意一下
:::

```shell
├─ views         
│  ├─ applications  # 二课所有重要的页面的都在这里！
│  ├─ components    # 不重要
│  ├─ dashboard     # 不重要
│  ├─ error         # 不重要
│  ├─ home          # 首页的页面！
│  ├─ monitor       # 不重要
│  ├─ system        # 系统管理的页面！
│  ├─ tool          # 不重要
│  ├─ index_v1.vue  # 没啥用
│  ├─ index.vue     # 没啥用
│  ├─ login.bak.vue # login.vue的复制品，没啥用
│  ├─ login.vue     # 登录页面！
│  └─ redirect.vue  # 不重要
```

## 蓝色侧边栏

蓝色侧边栏的位置在：/src/layout/index.vue

```vue
<div class="avatar" @click="logout">
    注销
</div>
<div
    v-if="device === 'mobile' && sidebar.opened"
    class="drawer-bg"
    @click="handleClickOutside"
/>
<!-- sidebar是蓝色侧边栏 -->
<sidebar
    class="sidebar-container"
    :style="{
        backgroundColor:
            sideTheme === 'theme-dark'
                ? variables.menuBg
                : variables.menuLightBg
    }"
/>
<!-- <router-view是右边的内容 -->
<router-view></router-view>
```

主要有两部分组成：

![img](https://img-blog.csdnimg.cn/16f36df409d84a4b9fb4a556a37e4420.png)

## 首页

首页的位置在：/src/views/home/index.vue

```vue
<!-- Menubar是左侧侧边栏 -->
<Menubar />  
<div
    style=" ;"
    :class="{ hasTagsView: needTagsView }"
    class="main-container"
>
    <div :class="{ 'fixed-header': fixedHeader }">
    <!-- tags-view是动态标签 -->
        <tags-view v-if="needTagsView" />
    </div>
    <!-- appMain是中间的内容 -->
    <app-main />
</div>
```
对应的页面：

![img](https://img-blog.csdnimg.cn/47c31e01dd5145b99183defe3dac3553.png)

## 系统管理

页面在 src/views/system/index.vue里面，结构和上面类似

![img](https://img-blog.csdnimg.cn/f1ff24f71923410f9420accd433316a3.png)

目录结构

```shell
├─ monitor         
│  └─ job           # 定时任务页面
├─ system         
│  ├─ admins        # 管理员管理页面
│  ├─ config        # 参数管理页面，实际上没用到
│  ├─ dept          # 部门管理页面
│  ├─ dict          # 字典管理页面
│  ├─ menu          # 菜单管理页面
│  ├─ notice        # 通知管理页面
│  ├─ post          # 岗位管理页面
│  ├─ role          # 用户管理页面
│  ├─ systemMenubar # 侧边栏
│  ├─ user          # 用户管理页面
│  └─ index.vue     # 主页面
```

## 第二课堂成绩单(核心)

**核心功能页面**

页面在 src/views/application/erke/index.vue里面，结构和上面类似

![img](https://img-blog.csdnimg.cn/eafdfa5eddaa44da82c59af467e86eb3.png)

目录结构

```shell
├─ activity         
│  ├─ activityDetail    # 活动详情
│     ├─ credit             # 学分管理页面
│     ├─ enrollment         # 报名管理页面
│     ├─ evaluation         # 评论管理页面
│     ├─ flocculus          # 花絮管理页面
│     ├─ leave              # 请假管理页面
│     ├─ prize              # 奖项管理页面
│     ├─ registration       # 签到管理页面
│     ├─ survey             # 概况页面
│     └─ index.vue
│  ├─ activityRotation  # 小程序轮播图页面
│  ├─ creditDetail      # 学分明细页面
│  ├─ creditFind        # 积分查询页面
│  ├─ creditVerify      # 积分审核页面
│  ├─ creditWarning     # 积分预警页面
│  ├─ detail            # 培养方案详情
│  ├─ erkeMenubar       # 侧边栏
│  ├─ erkePlan          # 培养方案页面
│  ├─ erkeStardard      # 积分标准页面
│  ├─ growthRecord      # 成长记录管理页面
│  └─ profile           # 个人信息，没用到
```

## 群组管理

**核心功能页面**

页面在 src/views/application/group/index.vue里面，结构和上面类似

![img](https://img-blog.csdnimg.cn/d3264e9dffde47d6a2b085404bc0383e.png)

目录结构

```shell
├─ group
│  ├─ groupClasify  # 分类页面
│  ├─ groupDetail   # 群组详情页面
│     ├─ change         # 管理变更页面
│     ├─ list           # 活动列表页面
│     └─ member         # 成员页面
│  ├─ groupSelf     # 群组页面
│  ├─ guidanceUnit  # 指导单位页面
│  └─ index.vue         
```