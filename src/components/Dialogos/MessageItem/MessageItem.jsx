import mod from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div className={mod.messageItem}>
            {props.message}
        </div>
    )
}

export default MessageItem;