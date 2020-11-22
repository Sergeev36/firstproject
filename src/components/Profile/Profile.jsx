
import MyPosts from "./MyPosts/MyPosts";
import mod from './Profile.module.css';


const Profile = () => {


    return (

        < div className={mod.content} >
            < div>< img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg" / >
            < / div >
            < div>ava+post
            < / div >
         <MyPosts />
             < /div>
  )

                 };

   export default Profile;