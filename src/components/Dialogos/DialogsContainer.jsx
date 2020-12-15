import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}



const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;