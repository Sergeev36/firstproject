
import mod from "./Post.module.css"

const Post = (props) => {

    return (
        <div>
            <div className={mod.post}>
                <div><img src={props.avatar} alt=""/></div>
                <div className={mod.postText}>{props.message}</div>
            </div>
            <div className={mod.likes}>

                <img src="https://pngimg.com/uploads/like/like_PNG29.png" alt=""/>

                <div className={mod.likesNumbers}>
                    <b>{props.likesCount}</b>
                </div>

            </div>
        </div>

    )

};

export default Post;