import React from 'react';
import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";



    const Dialogs = (props) => {



        let namesElements = props.state.names.map(n => <NameItem name={n.name} id={n.id} avatar={n.avatar} />);

        let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} />);

        let newMessagePost = React.createRef();
        let addMessage = () => {
            let text = newMessagePost.current.value;
            alert (text);
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
                        <textarea cols="20" rows="3" ref={newMessagePost}></textarea>
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