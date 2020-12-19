#### 一级路由，二级路由，如何设置？
- 一级路由：大的分类：
- 2级路由：cdms



### 工具
1. postman

2. 编译工具
npm 工具 ： 
- chalk 这个包是为了使输出不再单调,添加文字背景什么的,改变字体颜色什么的, npm install chalk
- prompts ,Npm的question && answer工具
- BannerPlugin,编译后的文件信息
- HtmlWebpackPlugin:Generates an `index.html` file with the <script> injected.
- DefinePlugin,在node环境中定义变量，在生产环境中使用

```
new webpack.BannerPlugin({
    banner: `${process.env.NODE_ENV} BUILD by ${os.userInfo().username}: ${new Date()}`,
    entryOnly: true
}),

extract-text-webpack-plugin  --- 独立出css文件
optimize-css-assets-webpack-plugin  对css进行优化（主要是压缩)

```



### 目录结构
--config                编译配置
--scripts               编译脚本 
--public                静态文件，样式等
--src                   源代码 
--src\api               接口
--src\Components        组件
--src\Common            通用文件夹
--src\Pages             一级路由直达的页面
--src\router            路由管理
--src\Store             Store