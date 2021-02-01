import mod from "../ProfileInfo.module.css";


 const ProfileData = (props) => {
    return (
        <div className={mod.data}>
            <div><b>fullName:</b>{props.profile.fullName}</div>
            <div><b>lookingForAJob:</b>{props.profile.lookingForAJob ? "yes" : "no" }</div>
            <div><b>My professional skills:</b>{props.profile.lookingForAJobDescription }</div>
            <div><b>aboutMe:</b>{props.profile.aboutMe }</div>
            <div className={mod.contacts}>
                <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => <ul key={key}>
                    <li><b>{key}:</b>{props.profile.contacts[key]}</li>
                </ul>
            )}</div>
            <button>Edit</button>
        </div>
    )

}

export default ProfileData;

