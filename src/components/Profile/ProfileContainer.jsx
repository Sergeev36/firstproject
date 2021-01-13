import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component {
    componentDidMount() {
   let userId = this.props.match.params.userId
        if (!userId) {userId = 13659}
  this.props.profileThunk(userId)
  this.props.getStatusThunk(userId)
    }


    render () {

            return  <Profile {...this.props}  profile={this.props.profile}
                             status={this.props.status} updateStatus={this.props.updateStatusThunk} />

    }

}



let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile,
     status:state.profilePage.status
    }
}

export default compose (
    connect (mapStateToProps,{profileThunk,getStatusThunk,updateStatusThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)