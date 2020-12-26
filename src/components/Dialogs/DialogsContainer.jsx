import Dialogs from './Dialogs'
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import React from "react";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};




const DialogsContainer = connect (mapStateToProps,{addMessage,updateNewMessage}) (Dialogs)

export default DialogsContainer;