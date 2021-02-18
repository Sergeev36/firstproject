import {LoginApi} from "../api/api";
import {stopSubmit} from "redux-form";


let SET_USER_DATA = 'auth/SET_USER_DATA';
let SET_CAPTCHA = 'auth/SET_USER_DATA';


let initialState = {
    id: null as number | null ,
    email:null as string | null,
    login:null as string | null,
    isAuth:false as boolean,
    captcha:null as string | null

}

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action:any):initialStateType => {
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
type setUserDataPayloadType = {
    id:number | null,
    email:string | null,
    login:string | null,
    isAuth:boolean

}
type setUserDataType = {
    type:typeof SET_USER_DATA,
    payload: setUserDataPayloadType

}

export const setUserData = (id:number | null ,email:string | null ,login:string | null ,isAuth:boolean):setUserDataType =>
    ({type:SET_USER_DATA,payload:{id,email,login,isAuth}});

type setCaptchaType = {
    type:typeof SET_CAPTCHA,
    payload:{captcha:string}
}
export const setCaptcha = (captcha:string):setCaptchaType => ({type:SET_CAPTCHA,payload:{captcha}});

export const authThunk = () => async (dispatch:any) => {

        let data = await LoginApi.authMe()
                if (data.resultCode === 0) {
                    let {id,email,login} = data.data
                    dispatch(setUserData(id,email,login,true))
                }

}


export const loginThunk = (email:string,password:string,rememberMe:boolean,captcha:string) => async (dispatch:any) => {
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
export const loginOutThunk = () => async (dispatch:any) => {
        let data = await LoginApi.loginOut()
                if (data.resultCode === 0) {
                    dispatch(setUserData(null,null,null,false))
                }

}

export const getCaptchaUrl = () => async (dispatch:any) => {
        let data = await LoginApi.getCaptcha()
                   dispatch(setCaptcha(data))


}






export default authReducer;