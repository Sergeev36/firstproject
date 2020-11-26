import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";



    const Dialogs = (props) => {



        let namesElements = props.state.names.map(n => <NameItem name={n.name} id={n.id} />);

        let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>);




    return (
        <div className={mod.dialogs}>

            <div className={mod.names}>
                {namesElements}
            </div>

            <div className={mod.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;