import * as constants from './actionType'


const defaultState = {
    initData : {
        name: 'ccc',
        count: 10
    }
}


const mockInitData = {
    name: 'cccccccc',
    count: 10111111
}

let reducer = (state = defaultState, action) => {

    //let outputstate = state;
    let outputstate = Object.assign({},state);
    //let outputstate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case constants.Init_Home_Data:

            outputstate.initData = mockInitData;

            break;

        default:
            break;
    }

    return outputstate;
}

export default reducer;