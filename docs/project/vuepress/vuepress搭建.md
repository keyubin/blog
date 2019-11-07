
# vue press 搭建

## 安装环境

+ node 环境须>8.0

+ 安装全局 vuepress`npm install -g vuepress`

## 搭建框架
新建项目根文件夹

`mkdir <--blog name / project name-->`

生成package.json

`npm init -y`
``` js
// 修改 package.json 中的脚本命令
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```
创建 docs文件夹 并在docs文件夹中创建.vuepress文件夹
在.vuepress文件夹创建public文件夹 新建config.js

```
mkdir docs
cd ./docs
mkdir .vuepress
cd ./.vuepress
mkdir public
touch config.js
```
## 配置config

``` js
module.exports = {
    title: 'keyubin', //标题
    description: 'Blog',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: 'static/img/main.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {text:"日记",link: '/dayly/'},
            {text:'关于',link: '/about/'},
            { text: 'GitHub', link: 'https://github.com/keyubin' },
        ],
        sidebar: {
           '/dayly/':['/dayly/', //会自动找到dayly文件夹下的README.md 为首页
            {
                title:'2019',
                children:[
                '/dayly/2019/2019-01-25'
                '/dayly/2019/2019-01-26'
                ]
            },
            {
                title:'2018',
                children:[
                '/dayly/2019/2018-01-25'
                ]
                }
            ],
            '/about/':['/about/']
        },
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
```
## 目录结构
<pre style="color:#fff">
|-docs
| |-.vuepress
| |-dayly //目录
|   |-2019 //子目录
|     |-2019-01-25.md //目录文件
|     |-2019-01-26.md
|   |-2018
|     |-2018-01-25.md
|   |-README.md
| |-about //目录
|   |-README.md
| |-README.md //首页默认页面
|-package.json
</pre>

## 项目启动及打包
::: tip 项目启动及打包
执行npm run docs:dev 将会生成并部署于本地 `localhost:8080`</br>
  执行npm run docs:build 将会在public 文件夹下生成dist 文件夹 内容为静态网站页面及静态资源
:::
