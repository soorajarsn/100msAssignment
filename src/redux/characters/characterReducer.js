import { GET_CHARACTER_REQUEST, GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR } from "./characterConsts"

const initialState = {
    characters: [],
    loading:false,
    error: ''
}
const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTER_REQUEST:
            return {...state, loading:true, error:''};
        case GET_CHARACTER_SUCCESS:
            return {laoding:false, characters: action.payload, error:''};
        case GET_CHARACTER_ERROR:
            return {...state, loading:false, error:action.payload};
        default:
            return state;
    }
}
export default characterReducer