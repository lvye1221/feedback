

# 需求分析 #

需要在手机上，快速创建调查表，实时在手机上来来看到调查结果。



# 工具及环境搭建 #

1. gulp
2. nodejs express
3. vue
4. mongodb mogonsee


# 目录结构 #

```
- dist 项目代码发布目录
- src 项目文件源代码
    + images 图片文件
    + styles 样式文件
    + index.html
- server 服务器目录
    + db 数据库文件
    + model 项目中存在的数据模型
    + router 服务器
```

## 环境搭建 ##

```
cnpm i -S gulp


// 你可以使用我们定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

npm install -g cnpm --registry=https://registry.npm.taobao.org
```

测试

```
gulp eat

// 输出 
eating
```

---------
数据库 mongosee 安装

```
cnpm i -S mongoose

```


---------
服务器 nodejs express 的安装


server 目录
```
cd server

npm init

// 用淘宝镜像来安装
cnpm install express --save 


npm start

// 网址
http://localhost:3000/user/auth
```


# 项目管理 #

## 文件自动执行 ##




# 数据库设计 #



```
mongod.exe --dbpath "server\db\data"
```



# 问题及解决 #

## 配置启动脚本 ##

package.json

```
  "scripts": {
    "start": "node server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```



## mogosee ##

```
`open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead

```

这只是一个警告而已，关系不大



