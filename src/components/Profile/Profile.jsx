import mod from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (

        < div className={mod.content}>
            <ProfileInfo  isOwner={props.isOwner} profile={props.profile}
                          status={props.status}
                          updatePhoto={props.updatePhoto}
                          updateStatus={props.updateStatus}/>

            <MyPostsContainer/>
        </div>
    )

        }

   export default Profile;