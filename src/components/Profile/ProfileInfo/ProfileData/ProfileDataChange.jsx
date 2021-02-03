import mod from "../ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";



const ProfileDataChange = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div><b>Full name:</b><Field name="fullName" component={Input} validate={[required]} placeholder={"Full name"} /></div>
            <div><b>Looking for a job:</b><Field name="lookingForAJob" component={Input}  type={"Checkbox"} /></div>
            <div><b>My professional skills:</b><Field name="lookingForAJobDescription" component={Textarea}  placeholder={"My professional skills"} /></div>
            <div><b>About me:</b><Field name="aboutMe" component={Textarea} placeholder={"About me"} /></div>
                <div className={mod.contacts}>
                    <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => <ul key={key}>
                    <li><b>{key}: </b><Field name={"contacts." + key} component={Input}  placeholder={key} /></li>
                </ul>
                )}</div>
            {props.error && <div className={mod.formError}>{props.error}</div>}
            <button>Save</button>
        </form>
    )

}

const ProfileReduxForm = reduxForm({
    form: 'data'
})(ProfileDataChange)



export default ProfileReduxForm;