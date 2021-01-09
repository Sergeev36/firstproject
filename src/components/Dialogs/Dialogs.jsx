import React from 'react';
import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";




    const Dialogs = (props) => {



        let namesElements = props.dialogsPage.names.map(n => <NameItem key={n.id} name={n.name} id={n.id} avatar={n.avatar} />);

        let messagesElements = props.dialogsPage.messages.map(m => <MessageItem key={m.id} message={m.message} />);

        let newMessagePost = React.createRef();

        let onNewMessageChange = (e) => {
            let text = e.target.value;
            props.updateNewMessage(text)
        };

        let onSendMessageClick = () => {
            props.addMessage()

        };

        if (!props.isAuth) return <Redirect to={"/login"} />




    return (



        <div className={mod.dialogs}>

            <div className={mod.names}>
                {namesElements}
            </div>

            <div className={mod.messages}>

                {messagesElements}

                <div className={mod.addMessage}>
                    <div>
                        <textarea cols="20" rows="3" ref={newMessagePost}
                                  value={props.dialogsPage.newMessageText}
                                  onChange={onNewMessageChange}/>
                    </div>

                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;