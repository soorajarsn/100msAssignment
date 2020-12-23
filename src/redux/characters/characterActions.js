import { GET_CHARACTER_REQUEST, GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR } from "./characterConsts";
import axios from "axios";

export const getCharacterRequest = () => ({type: GET_CHARACTER_REQUEST});
export const getCharacterSuccess = (characters) => ({type: GET_CHARACTER_SUCCESS,payload:characters});
export const getCharacterError = (err) => ({type: GET_CHARACTER_ERROR, payload: err});

export const getCharacters = (endpoint) => {
    return (dispatch,getState) => {
        dispatch(getCharacterRequest());
        axios.get('https://www.breakingbadapi.com/api/'+endpoint)
        .then(response => {
            const data = response.data;
            dispatch(getCharacterSuccess(data));
        })
        .catch(err => {
            console.log(err, err.response);
            dispatch(getCharacterError("Something went wrong"));
        })
    }
}