import mod from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloager";
import ProfileStatusWitchHook from "./ProfileStatusWithHook";
import ProfileData from "./ProfileData/ProfileData";
import React, {useState} from 'react'
import ProfileDataChange from "./ProfileData/ProfileDataChange";





const ProfileInfo = (props) => {
    let [editData,setEditData] = useState(false);

    let activateEditData = () =>{
        setEditData(true)
    }
    const onSubmit = (formData) => {
       props.dataThunk(formData).then(
           () => {
               setEditData(false)
           })

    }




    if (!props.profile) {
        return <Preloader/>
    }

   let onMainPhotoSelected = (e) => {
    props.updatePhoto(e.target.files[0])
   }



    return (
       <div className={mod.profileInfo}>
           {/*< img className={mod.fon} src="https://avatars.mds.yandex.net/get-pdb/251121/63f7b74c-ea57-4fc8-95be-7934d9798c6f/s1200"/>*/}
                <div >
                <img className={mod.photo} src={props.profile.photos.large || "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt=""/>
                {props.isOwner && <div> <input className={mod.addPhoto}  type="file" onChange={onMainPhotoSelected}/></div>}

                </div>
              <div className={mod.info} >
               <ProfileStatusWitchHook  isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
                {!editData && <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditData={activateEditData} />}
                {editData && <ProfileDataChange initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />}
              </div>

        </div>
            )
}



export default ProfileInfo;