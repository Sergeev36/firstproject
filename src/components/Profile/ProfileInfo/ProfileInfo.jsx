import mod from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={mod.profileInfo}>

                < img src="https://avatars.mds.yandex.net/get-pdb/251121/63f7b74c-ea57-4fc8-95be-7934d9798c6f/s1200"/>

            <div className={mod.postsBlock}>ava+post</div>
        </div>
    )

}
export default ProfileInfo;