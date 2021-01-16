import Dialogs from './Dialogs'
import {addMessage} from "../../redux/dialogs-reducer";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
};


export default compose (
    connect (mapStateToProps,{addMessage}),
    withAuthRedirect
)(Dialogs)



