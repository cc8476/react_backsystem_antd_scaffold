import Add from '../Pages/Course/Add'
import Detail from '../Pages/Course/Detail'
import List from '../Pages/Course/List'



let routes = [
    {path:"/course/add",component:Add,extact:true},
    {path:"/course/detail",component:Detail,extact:true},
    {path:"/course/list",component:List,extact:true},
]

export default routes;