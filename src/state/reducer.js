import { combineReducers } from "redux"
import { GET_ALL_MEMES, CHANGE_INPUT } from "../action/action-creators"

export const initialMemes = {
    memeList: []
}

const memeReducer = (state=initialMemes, action) => {
    switch(action.type){
        case GET_ALL_MEMES:
            return {
                ...state,
                memeList: action.payload
            }
        default:
            return state
    }
}


export const initialInput ={
    input: ''
}

const form = (state=initialInput, action) => {
    switch(action.type){
        case CHANGE_INPUT:{
            return {
                ...state,
                input: action.payload}
            }
        default:
            return state
    }
}

export default combineReducers({
    memeReducer,
    form
})