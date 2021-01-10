import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";





class ProfileContainer extends React.Component {
    componentDidMount() {
  this.props.profileThunk(this.props.match.params.userId)

    }


    render () {

            return  <Profile {...this.props}  profile={this.props.profile}  />

    }

}

let authRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile,

    }
}

let urlDataContainer = withRouter(authRedirectComponent)

export default connect (mapStateToProps,{profileThunk}) (urlDataContainer);