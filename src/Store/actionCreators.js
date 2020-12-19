import * as constants from './actionType'
import axios from 'axios'

//获取首页数据 -- 非异步
/* let getHomeDataAction =()=>(
    {
        type:constants.Init_Home_Data
    }
) */


let getHomeDataAction = () => {
    return (dispatch) => {
        axios("./getdata").then((data) => {
            dispatch({
                type: constants.Init_Home_Data
            })
        }).catch((data) => {
            dispatch({
                type: constants.Init_Home_Data
            })
        })
    }
}

let obj = {}
obj.getHomeDataAction = getHomeDataAction;

export default obj