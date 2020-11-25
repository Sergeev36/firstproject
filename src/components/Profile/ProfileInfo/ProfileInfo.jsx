import mod from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={mod.profileInfo}>
            <div>
                < img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"/>
            </div>
            <div className={mod.postsBlock}>ava+post</div>
        </div>
    )

}
export default ProfileInfo;