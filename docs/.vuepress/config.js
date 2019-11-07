module.exports = {
    title: 'keyubin',
    description: 'Blog',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: 'static/img/main.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['title', 'Hi guys'],
    ],
    base: '/blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: "项目", link: '/project/' },
            {
                text: '博文',
                items: [
                    { text: 'vue', link: '/vue/' },
                    { text: 'nodejs', link: '/nodejs/' },
                ]
            },
            // { text: '生活', link: '/life/' },
            // { text: '关于', link: '/about/' },
            // { text: 'GitHub', link: 'https://github.com/keyubin' },
        ],
        sidebar: {
            '/project/': ['/project/',
                {
                    title: 'Vue Press 博客搭建及部署',
                    children: ['/project/vuepress/vuepress搭建',
                        '/project/vuepress/vuepress部署',
                        '/project/vuepress/未解决问题','/project/vuepress/自定义组件']
                }]
        },
        sidebarDepth: 2, // 侧边栏显示2级
    }
};