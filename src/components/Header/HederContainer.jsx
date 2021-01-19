import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, loginOutThunk} from "../../redux/auth-reducer";




class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk()
    }


    render () {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}

export default connect (mapStateToProps,{authThunk,loginOutThunk}) (HeaderContainer);