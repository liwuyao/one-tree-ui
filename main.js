import 'one-tree-ui/dist/index.css'
import 'one-tree-ui/dist/plugin/type-3/index.css'
import oneTree from 'one-tree-ui'
import type3 from 'one-tree-ui/dist/plugin/type-3'

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
                isLazy:true
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
                name:'1-3菜单',
                isLazy:true
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
    isLazy:true,
    fatherNodeIcon:['icon-folderClose','icon-folderOpen'],
    style:{//样式
        liHeight:40,//一行菜单高度，单位px
        paddingLeft:24,//左侧缩进，单位px
    },
    // custom:function(data,tree,app){//data,当前数据，tree,树的实例，app,渲染函数的实例
    //     const html = app.template({//模板函数
    //         data:{//传递数据，类似于vue的data(),只有在这里注册过的数据，才能在下面的html模板语法中识别
    //             data,
    //             testfn:function(e){
    //                 e.stopPropagation();
    //                 data.name = '21344'
    //                 tree.instance.up()//想更新树的显示，就调用up()
    //             }
    //         },
    //         //模板，语法等同于vue的基本语法，v-for没有，有v-if,
    //         html:`<div @click="testfn">
    //             {{data.name}}
    //             <span @click="testfn">修改</span>
    //         </div>`
    //     })
    //     return {type:'r-html',el:html}//固定格式，type指明类型，el指明模板，可以是template,也可以是render的结构对象树。
    // }
});
Tree.event('back',(res)=>{
    console.log(res)
})
Tree.event('choose',function(res,tree){
    if(res.isLazy){
        console.log(res)
        //**更新视图显示loading动画 */
        /**模拟接口异步请求 */
        if(res.expandState && !res.children.length){
            res.loading = true
            tree.instance.up()
            setTimeout(()=>{
                let data = [
                    {
                        name:'2-1新增'
                    },
                    {
                        name:'2-2新增'
                    },
                ]
                res.loading = false
                Tree.resetItem(data,res)
            },5000)
        }else{
            tree.instance.up()
        }
    }
})
setTimeout(()=>{
    Tree.setActive('12')
},1000)
console.log(Tree)


