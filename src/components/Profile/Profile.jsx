import mod from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (

        < div className={mod.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )

        }

   export default Profile;