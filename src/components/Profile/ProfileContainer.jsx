import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";




class ProfileContainer extends React.Component {
    componentDidMount() {
  this.props.profileThunk(this.props.match.params.userId)

    }


    render () {
        if (!this.props.isAuth) return <Redirect to={"login"}/>
            return <Profile {...this.props}  profile={this.props.profile}  />
    }

}

let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile,
     isAuth:state.auth.isAuth
    }
}

let urlDataContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps,{profileThunk}) (urlDataContainer);