import React from 'react';
import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";


const maxLength = maxLengthCreator(50)

const DialogsForm = (props) => {
    return (
   <form onSubmit={props.handleSubmit} >

                <div className={mod.addMessage}>
                    <div>
                        <Field name="messageText" component={Textarea}
                               validate={[required,maxLength]} />
                    </div>

                    <div>
                        <button className={mod.button}>Send</button>
                    </div>
                </div>


        </form>
    )
}


const MessageReduxForm = reduxForm({
    form: 'newMessageText'
})(DialogsForm)


    const Dialogs = (props) => {

   const addNewMessage = (value) => {
            props.addMessage(value.messageText)
        }

        let namesElements = props.dialogsPage.names.map(n => <NameItem key={n.id} name={n.name} id={n.id} avatar={n.avatar} />);

        let messagesElements = props.dialogsPage.messages.map(m => <MessageItem key={m.id} message={m.message} />);

        return (<div className={mod.dialogs} >

            <div className={mod.names}>
                {namesElements}
            </div>

            <div className={mod.messages}>
                {messagesElements}
            </div>

            <div><MessageReduxForm onSubmit={addNewMessage}/></div>

        </div>)

    }

export default Dialogs;