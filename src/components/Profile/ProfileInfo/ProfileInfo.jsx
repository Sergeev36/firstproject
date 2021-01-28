import mod from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloager";
import ProfileStatusWitchHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
       <div className={mod.profileInfo}>
           {/*< img className={mod.fon} src="https://avatars.mds.yandex.net/get-pdb/251121/63f7b74c-ea57-4fc8-95be-7934d9798c6f/s1200"/>*/}


            <div className={mod.profile}>
                <img className={mod.photo} src={props.profile.photos.large || "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt=""/>

                <ProfileStatusWitchHook status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>


    )

}
export default ProfileInfo;