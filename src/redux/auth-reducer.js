import {LoginApi} from "../api/api";
import {stopSubmit} from "redux-form";


let SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload
            }



        default:
            return state;

    }

}



export const setUserData = (id,email,login,isAuth) => ({type:SET_USER_DATA,payload:{id,email,login,isAuth}});

export const authThunk = () => {
    return (dispatch) => {
       return LoginApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id,email,login} = data.data
                    dispatch(setUserData(id,email,login,true))
                }
            })
    }
}
export const loginThunk = (email,password,rememberMe) => {
    return (dispatch) => {
        LoginApi.login(email,password,rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authThunk())
                } else {
                    let message = data.messages.length > 0 ?  data.messages[0] : "Some error";
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
    }
}
export const loginOutThunk = () => {
    return (dispatch) => {
        LoginApi.loginOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null,null,null,false))
                }
            })
    }
}






export default authReducer;