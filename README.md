# 个人博客系统（长期更新）

主要使用 Vue3，NextJs，React，Node-Express，Scss,MySQl

**[博客地址](https://blogweb.cn)**

## 源码：

1.  个人博客管理系统（admin）
2.  博客门户页面（client）
3.  Node.js 后台接口（api）
4.  Node.js 接口处理资源管理（assets）

## 用户端

### 功能

1.  在首页查询全部文章
2.  展示作者基本社交平台账号
3.  点击文章标题进入文章页面查询文章详情
4.  搜索页面可以根据搜索栏关键词进行指定文章查询
5.  关于作者编写作者简单信息
6.  发布文章、设置用户基本信息
7.  可以对管理员进行留言
8.  浏览并使用管理员发布的开发 API 接口


## 管理系统

### 功能

1.  分页查询文章
2.  可以查询指定文章信息并对其修改、删除
3.  发布文章可以上传图片并对图片进行水印添加
4.  可以查询用户留言进行并且删除
5.  可以添加、查询文章类型
6.  可以查询、删除富文本编辑器所有上传的静态图片
7.  可以简单获取服务器当前信息
8.  登录并且可以修改管理员密码
9.  处理开源仓库信息
10.  增删改查友链
11.  大屏数据可视化

### 备注

1.  日志使用文件形式或者变量进行存储
2.  使用 JWT 算法 RSA256 进行签名解密进行接口请求权限判断 
3.  统计访问量是在所有文件中注入一段 JS 代码,JS 代码每次被访问当日访问量+1,并且请求被缓存一天
4.  发送无权限请求返回错误代码 401
5.  接口文档工具使用 Apifox,需要的从博客中的联系方式中联系我

## 更新计划

1.  用户端支持移动端，更换 CSS 管理方案为 tailwind CSS 或者 styled-components
2.  服务端 Node.js 框架更换为 Koa2 或者 Nest.js
3.  将 assets 与 api 合并方便资源处理(但是会牺牲部署的便利性)
4.  将富文本编辑器换为 Markdown 编辑器

