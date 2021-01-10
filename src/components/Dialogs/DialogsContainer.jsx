import Dialogs from './Dialogs'
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
};

let authRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect (mapStateToProps,{addMessage,updateNewMessage}) (authRedirectComponent)

export default DialogsContainer;