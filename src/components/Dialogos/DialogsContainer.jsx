import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import React from "react";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let updateNewMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text)
        props.store.dispatch(action)
    };

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())

    };

    return <Dialogs updateNewMessageChange={updateNewMessageChange}
                    sendMessage={sendMessage}
                    dialogsPage={state.dialogsPage}
                    newMessageText={state.dialogsPage.newMessageText} />

}

    export default DialogsContainer;