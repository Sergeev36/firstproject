import {authThunk} from "./auth-reducer";

let SET_INITIALIZED = 'app/SET_INITIALIZED';

type initialStateType = {
    initialized:boolean
}
let initialState:initialStateType = {

    initialized:false
}


const appReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true
            }

        default:
            return state;

    }

}


type initializedSuccessType = {
    type: typeof SET_INITIALIZED
}
export const  initializedSuccess = ():initializedSuccessType => ({type:SET_INITIALIZED});

export const initializeThunk = () => {
    return (dispatch:any) => {
       let promise = dispatch(authThunk());
       promise.then(()=>{
           dispatch(initializedSuccess())
       })
    }
}






export default appReducer;