import mod from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={mod.friendsItem}>
            <img src={props.avatar} alt=""/>
            <div>{props.name}</div>
        </div>
    )
}

export default Friends;