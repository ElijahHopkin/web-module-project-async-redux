import axios from 'axios'

export const GET_ALL_MEMES = 'GET_ALL_MEMES'
export const CHANGE_INPUT = 'CHANGE_INPUT'

export const fetchAllMemes = () => dispatch => {
    axios.get('https://api.imgflip.com/get_memes')
    .then(res => {
        dispatch({ type: GET_ALL_MEMES, payload: res.data.data.memes})
        console.log(res.data.data.memes)
    })
    .catch(err => {
        console.log({err})
    })
}

export const changeInput = (value) => {
    return{
        type: CHANGE_INPUT, payload:  value
    }

}