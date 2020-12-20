## 路由

## 如何使用模板，而不是直接把html写在组件中

### 为什么我的Router需要刷新？

### package.json 的proxy字段，干嘛的？

react路由和后端Nginx或者Node,有什么关系？
HashRouter,BrowserRouter 分别有什么影响





### 教程：https://www.bilibili.com/video/BV1Hg4y167v6?p=3  react 后台+antd

### 教程：https://www.bilibili.com/video/BV1CJ411u7at?p=19  react 后台


#done done done done done done done done done done done done done done done done 
#done done done done done done done done done done done done done done done done 
#done done done done done done done done done done done done done done done done 
### 二级路由怎么配置
和一级路由一样的，在要render的地方，添加路由即可

### npm run eject 之后，对代码进行研究
### react 16和17的最大区别是啥
## 两栏布局，一栏固定宽；一栏撑满
#left {
    position: absolute;
    width: 150px;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  #right {

    margin-left: 150px;

  }

### 快速创建react和react带redux组价:
rcc,rcre


### Error: Actions must be plain objects. Use custom middleware for async actions.
const mapDispatchToProps =(dispatch)=>{
    return {
        getData:()=>{
            dispatch({type:"xxxx"})
        }
    } 
}
--注意写法

### 为什么我的mapStateToProps没有更新
let reducer = (state = defaultState, action) => {

    //let outputstate = state;  --- 这样写不会更新
    let outputstate = Object.assign({},state);  --- 这样可以
    //let outputstate = JSON.parse(JSON.stringify(state));   --- 这样也可以

### 异步action写法
首先必须要有thunk这个中间件
let getHomeDataAction = () => {
    return (dispatch) => {
        axios("./getdata").then((data) => {
            dispatch(data)
        }).catch((data) => {
            dispatch({
                type: constants.Init_Home_Data
            })
        })
    }
}

### 请求数据：dispatch action，通过axios去请求数据，通过Mock,获取数据，再render
