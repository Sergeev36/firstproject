import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";



    const Dialogs = (props) => {

        let names= [
            {id: "0", name: "Sergey"},
            {id: "1", name: "Victor"},
            {id: "2", name: "Olga"},
            {id: "3", name: "Ekaterina"},
            {id: "4", name: "Kirill"},
        ];

        let messages = [
            {id: "0", message: "Great job,thank you!"},
            {id: "1", message: "Hi,I'm still happy!!"},
            {id: "2", message: "Hello,how are you?!"}
        ];

        let namesElements = names.map(n => <NameItem name={n.name} id={n.id} />);

        let messagesElements = messages.map(m => <MessageItem message={m.message}/>);




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