import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component {
    componentDidMount() {
  this.props.profileThunk(this.props.match.params.userId)

    }


    render () {

            return  <Profile {...this.props}  profile={this.props.profile}  />

    }

}



let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile,

    }
}

export default compose (
    connect (mapStateToProps,{profileThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)