import React from 'react';
import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";



    const Dialogs = (props) => {



        let namesElements = props.dialogsPage.names.map(n => <NameItem name={n.name} id={n.id} avatar={n.avatar} />);

        let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />);

        let newMessagePost = React.createRef();

        let onMessageChange = (e) => {
            let text = e.target.value;
            props.dispatch(updateNewMessageActionCreator(text))
        };

        let addMessage = () => {
            props.dispatch(addMessageActionCreator())

        };






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
                                  onChange={onMessageChange}/>
                    </div>

                    <div>
                        <button onClick={addMessage}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;