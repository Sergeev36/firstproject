import mod from "../ProfileInfo.module.css";
import React from "react";


 const ProfileData = (props) => {
    return (
        <div className={mod.data}>
            <div><b>Full name: </b>{props.profile.fullName}</div>
            <div><b>Looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no" }</div>
            <div><b>My professional skills: </b>{props.profile.lookingForAJobDescription }</div>
            <div><b>About me: </b>{props.profile.aboutMe }</div>
            <div className={mod.contacts}>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => <ul key={key}>
                    <li><b>{key}: </b>{props.profile.contacts[key]}</li>
                </ul>
            )}</div>
            {props.isOwner && <button onClick={props.activateEditData}>Edit</button>}
        </div>
    )

}

export default ProfileData;

