var data = [{
    title: '一级1',
    id: 1,
    children: [{
        title: '二级1-1 可允许跳转',
        id: 3,
        href: 'https://www.layui.com/',
        children: [{
            title: '三级1-1-3',
            id: 23,
            children: [{
                title: '四级1-1-3-1',
                id: 24,
                children: [{
                    title: '五级1-1-3-1-1',
                    id: 30
                }, {
                    title: '五级1-1-3-1-2',
                    id: 31
                }]
            }]
        }, {
            title: '三级1-1-1',
            id: 7,
            children: [{
                title: '四级1-1-1-1 可允许跳转',
                id: 15,
                href: 'https://www.layui.com/doc/'
            }]
        }, {
            title: '三级1-1-2',
            id: 8,
            children: [{
                title: '四级1-1-2-1',
                id: 32
            }]
        }]
    }, {
        title: '二级1-2',
        id: 4,
        children: [{
            title: '三级1-2-1',
            id: 9
        }, {
            title: '三级1-2-2',
            id: 10
        }]
    }, {
        title: '二级1-3',
        id: 20,
        children: [{
            title: '三级1-3-1',
            id: 21
        }, {
            title: '三级1-3-2',
            id: 22
        }]
    }]
}, {
    title: '一级2',
    id: 2,
    children: [{
        title: '二级2-1',
        id: 5,
        children: [{
            title: '三级2-1-1',
            id: 11
        }, {
            title: '三级2-1-2',
            id: 12
        }]
    }, {
        title: '二级2-2',
        id: 6,
        children: [{
            title: '三级2-2-1',
            id: 13
        }, {
            title: '三级2-2-2',
            id: 14,
            disabled: true
        }]
    }]
}, {
    title: '一级3',
    id: 16,
    children: [{
        title: '二级3-1',
        id: 17,
        fixed: true,
        children: [{
            title: '三级3-1-1',
            id: 18
        }, {
            title: '三级3-1-2',
            id: 19
        }]
    }, {
        title: '二级3-2',
        id: 27,
        children: [{
            title: '三级3-2-1',
            id: 28
        }, {
            title: '三级3-2-2',
            id: 29
        }]
    }]
}]