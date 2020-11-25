import mod from './Dialogs.module.css'
import NameItem from "./NameItem/NameItem";
import MessageItem from "./MessageItem/MessageItem";



    const Dialogs = (props) => {

        let namesMod = [
            {id: "0", name: "Sergey"},
            {id: "1", name: "Victor"},
            {id: "2", name: "Olga"},
            {id: "3", name: "Ekaterina"},
            {id: "4", name: "Kirill"},
        ];

        let messagesData = [
            {id: "0", message: "Great job,thank you!"},
            {id: "1", message: "Hi,I'm still happy!!"},
            {id: "2", message: "Hello,how are you?!"}
        ];


    return (
        <div className={mod.dialogs}>

            <div className={mod.names}>

                <NameItem name={namesMod[0].name} id ={namesMod[0].id} />
                <NameItem name={namesMod[1].name} id ={namesMod[1].id} />
                <NameItem name={namesMod[2].name} id ={namesMod[2].id} />
                <NameItem name={namesMod[3].name} id ={namesMod[3].id} />
                <NameItem name={namesMod[4].name} id ={namesMod[4].id} />


            </div>

            <div className={mod.messages}>

                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>


            </div>

        </div>
    )
}

export default Dialogs;