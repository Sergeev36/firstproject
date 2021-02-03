import {LoginApi} from "../api/api";
import {stopSubmit} from "redux-form";


let SET_USER_DATA = 'auth/SET_USER_DATA';
let SET_CAPTCHA = 'auth/SET_USER_DATA';


let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    captcha:null


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
        case  SET_CAPTCHA :
            return {
                ...state,
                ...action.payload
            }



        default:
            return state;

    }

}



export const setUserData = (id,email,login,isAuth) => ({type:SET_USER_DATA,payload:{id,email,login,isAuth}});
export const setCaptcha = (captcha) => ({type:SET_CAPTCHA,payload:{captcha}});

export const authThunk = () => async (dispatch) => {

        let data = await LoginApi.authMe()
                if (data.resultCode === 0) {
                    let {id,email,login} = data.data
                    dispatch(setUserData(id,email,login,true))
                }

}
export const loginThunk = (email,password,rememberMe,captcha) => async (dispatch) => {
        let data = await LoginApi.login(email,password,rememberMe,captcha)
                if (data.resultCode === 0) {
                    dispatch(authThunk())
                } else {
                    if (data.resultCode === 10){
                        dispatch(getCaptchaUrl())
                    }
                    let message = data.messages.length > 0 ?  data.messages[0] : "Some error";
                    dispatch(stopSubmit("login",{_error:message}))
                }

}
export const loginOutThunk = () => async (dispatch) => {
        let data = await LoginApi.loginOut()
                if (data.resultCode === 0) {
                    dispatch(setUserData(null,null,null,false))
                }

}

export const getCaptchaUrl = () => async (dispatch) => {
        let data = await LoginApi.getCaptcha()
                   dispatch(setCaptcha(data))


}






export default authReducer;