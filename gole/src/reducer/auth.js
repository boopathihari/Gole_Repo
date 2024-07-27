import {AUTH,LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData:null} , action) =>{
    switch (action.type) {
        case AUTH:
            console.log(action.payload);
            localStorage.setItem('profile',JSON.stringify({...action.payload}));
            return {...state, authData:action.payload};
        default:
            return state;
    }
}

export default authReducer;