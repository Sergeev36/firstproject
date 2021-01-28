import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";




class ProfileContainer extends React.Component {


 updateProfile = () => {
     let userId = this.props.match.params.userId
     if (!userId) {userId = this.props.authUserId;
         if (!userId) this.props.history.push("/login")
     }
     this.props.profileThunk(userId)
     this.props.getStatusThunk(userId)
 }

    componentDidMount() {
    this.updateProfile()
    }

   componentDidUpdate(prevProps, prevState, snapshot) {
     if(this.props.match.params.userId != prevProps.match.params.userId)
         this.updateProfile()
   }

    render () {

            return  <Profile {...this.props}  profile={this.props.profile}
                             status={this.props.status} updateStatus={this.props.updateStatusThunk} />

    }

}



let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile,
     status:state.profilePage.status,
     authUserId:state.auth.id,
     isAuth:state.auth.isAuth
    }
}

export default compose (
    connect (mapStateToProps,{profileThunk,getStatusThunk,updateStatusThunk}),
    withRouter,
) (ProfileContainer)