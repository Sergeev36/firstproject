import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import mod from "./../common/FormsControls/FormsControls.module.css"




export const LoginForm = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div><Field name="email" component={Input}
                    validate={[required]} placeholder={"Email"} /></div>
        <div><Field name="password" component={Input} type="password"
                    validate={[required]} placeholder={"Password"} /></div>
        <div><Field name="rememberMe" component={Input}  type={"Checkbox"} />remember me</div>
        {props.error && <div className={mod.formError}>{props.error}</div>}

        {props.captcha && <img src={props.captcha.url}/>}
        {props.captcha && <Field name="captcha" component={Input}  />}

        <div><button >Login</button></div>
        <div className={mod.test}>
            <div>Данные тестового аккаунта:</div>
            <div>Email: <b>free@samuraijs.com</b></div>
            <div>Password: <b>free</b></div>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }

    if (props.isAuth) {return <Redirect to={"profile"}/>}

    return <div> <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>

    </div>
}

const mapStateToProps = (state) => {
   return {
       isAuth:state.auth.isAuth,
       captcha:state.auth.captcha
   }
}


export default connect (mapStateToProps,{loginThunk}) (Login)