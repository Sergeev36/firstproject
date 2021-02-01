import mod from "../ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";


const ProfileDataChange = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><b>fullName:</b><Field name="fullName" component={Input} validate={[required]} placeholder={"fullName"} /></div>
            <div><b>lookingForAJob:</b><Field name="job" component={Input}  type={"Checkbox"} /></div>
            <div><b>My professional skills:</b><Field name="skills" component={Input} validate={[required]} placeholder={"skills"} /></div>
            <div><b>aboutMe:</b><Field name="aboutMe" component={Input} validate={[required]} placeholder={"aboutMe"} /></div>
            <div className={mod.contacts}>
                <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => <ul key={key}>
                    <li><b>{key}:</b><Field name="contacts" component={Input} validate={[required]} /></li>
                </ul>
            )}</div>
            <button>Save</button>
        </form>
    )

}

const ProfileReduxForm = reduxForm({
    form: 'data'
})(ProfileDataChange)



export default ProfileReduxForm;