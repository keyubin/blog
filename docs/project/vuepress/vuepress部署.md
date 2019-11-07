# vue press 部署

+  在github添加一个项目，clone到本地
+  将自己代码复制到项目中然后上传到github

在根目录新建deploy.sh

``` bash
    #!/usr/bin/env sh

    # 确保脚本抛出遇到的错误
    set -e

    # 生成静态文件
    npm run docs:build

    # 进入生成的文件夹
    cd docs/.vuepress/dist

    git init
    git add -A
    git commit -m 'deploy'

    # 如果发布到 https://<USERNAME>.github.io/<REPO> --REPO对应仓库名称  
    git push -f git@github.com:keyubin/blog.git master:gh-pages

cd -

```

:::warning
config.js 文件中的base配置 所对应的链接 应为仓库名称 仓库名为blog 对应链接为 `/blog/`</br>
否则会造成静态资源加载失败 
:::

修改根目录下的package.json
```
"scripts": {
    "deploy": "deploy.sh",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```

+ 运行 npm run deploy 将会自动部署到github

+ 打开github  进入仓库 选择blog仓库后 进入deploy.sh文件中定义的分支名称 然后选择setting 找到GitHub Pages 下方source 选择该分支 将会自动部署到 `https://<USERNAME>.github.io/<REPO>`