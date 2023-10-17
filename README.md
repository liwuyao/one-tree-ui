# one-tree 一个树

前言
该树设计的初衷是为统一树的逻辑和样式。以一个树的渲染为基座，树的样式为插件的形式来呈现出不同的树

<a href="http://www.one-ui.com/page/introduce" target="_blank">详细文档地址</a>
 
安装

`npm install one-tree-ui`

html

```
<div id="app"></div>
```

引用

```
//type-3指的是类型
import 'one-tree-ui/dist/index.css' 
import 'one-tree-ui/dist/plugin/type-3/index.css'
import oneTree from 'one-tree-ui' 
import type3 from 'one-tree-ui/dist/plugin/type-3'
```


example

``` 
const Tree = new oneTree({
    container:'app',
    type:type3,
})
let demo = [
    {
        name:'一级菜单',
        children:[
            {
                name:'1-1菜单',
                id:'12',
            },
            {
                name:'1-2菜单',
                children:[
                    {
                        name:'1-2-1菜单'
                    }
                ]
            },
            {
                name:'1-3菜单'
            },
        ]
    },
    {
        name:'一级菜单2',
        children:[
            {
                name:'2-1菜单'
            },
            {
                name:'2-2菜单'
            },
        ]
    },
    {
        name:'一级菜单3'
    },
]
Tree.init({
    list:demo,//数据
    style:{//样式
        liHeight:40,//一行菜单高度，单位px
        paddingLeft:24//左侧缩进，单位px
    }
});
Tree.event('choose',function(res){
    console.log(res)
})

Tree.setActive('12')//手动设置选中
```


