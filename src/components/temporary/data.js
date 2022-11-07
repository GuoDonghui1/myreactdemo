import * as icons from "../../utils/IconData";

export const menu = [
    {
        menuId: 1,
        title: '首页',
        icon: 'home',
        url: '/home',
        name: 'home',
    },
    {
        menuId: 2,
        title: '资讯',
        icon: 'list',
        url: '/news',
        name: 'news',
    },
    {
        menuId: 3,
        title: '我的',
        icon: 'license',
        url: '/me',
        name: 'me',
        authentication: true,
    },
]

export const settingMenus = {
    'user': [{
        menuId: 4,
        subMenuId: 'moreOptions',
        title: '更多',
        icon: 'application',
        children: [
            {
                menuId: 4001,
                title: '建议反馈',
                url: '/more/feedback',
                name: 'feedback',
                authentication: true,

            },
            {
                menuId: 4002,
                title: '关于',
                url: '/more/about',
                name: 'about',
                authentication: true,
            },
        ],
    },
        {
            menuId: 5,
            subMenuId: 'test',
            title: '测试',
            icon: 'pages',
            children: [
                {
                    menuId: 5001,
                    title: '测试1',
                    url: '/test/test1',
                    name: 'test1',
                    authentication: true,

                },
            ],
        },
    ],
    'admin': [
        {
            menuId: 4,
            subMenuId: 'moreOptions',
            title: '更多',
            icon: 'application',
            children: [
                {
                    menuId: 4001,
                    title: '用户管理',
                    url: '/more/usermanage',
                    name: 'userManagement',
                    authentication: true,

                },
                {
                    menuId: 4002,
                    title: '权限管理',
                    url: '/more/authorizationmanage',
                    name: 'authorizationManagement',
                    authentication: true,
                },
            ],
        },
        {
            menuId: 5,
            subMenuId: 'test',
            title: '测试',
            icon: 'pages',
            children: [
                {
                    menuId: 5001,
                    title: '测试1',
                    url: '/test/test1',
                    name: 'test1',
                    authentication: true,

                },
                {
                    active: true,
                    menuId: 5002,
                    title: '测试2',
                    url: '/test/test2',
                    name: 'test2',
                    authentication: true,
                },
            ],
        },
        {
            menuId: 6,
            title: '不需要权限',
            icon: 'license',
            url: '/noneedauth',
            name: 'noNeedAuth',
            authentication: false,
        },
        {
            menuId: 7,
            title: '需要权限',
            icon: 'license',
            url: '/needauth',
            name: 'needAuth',
            authentication: true,
        }
    ]
}
