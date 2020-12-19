import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Mine from '../Pages/Mine/Mine'
import CourseIndex from '../Pages/Course/Index'


let routes = [
    {path:"/home",component:Home,extact:true},
    {path:"/about",component:About,extact:true},
    {path:"/mine",component:Mine,extact:true},
    {path:"/course",component:CourseIndex},
]

export default routes;