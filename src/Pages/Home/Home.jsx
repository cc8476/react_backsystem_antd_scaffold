import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../../Store/actionCreators'

export class Home extends Component {


    componentDidMount() {
        setTimeout(() => {
            console.log("componentDidMount...")
            this.props.getData()
        }, 3000)
        
    }

    component

    render() {
        console.log("render")
        let {name,count} = this.props.initData;

        return (
            <div>
                Home页面
                {name}
                +++
                {count}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps",state)
    return {
        initData:state.initData
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        getData:()=>{
            dispatch(action.getHomeDataAction())
        }
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
