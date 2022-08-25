import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/profile-reducer";
import {ProfileUsersType} from "../redux/users-reducer";
import {ProfileInfo, ProfileType} from "./PropfileInfo/PropfileInfo";


type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
                {/*<Profile {...this.props} profile={this.props.profile}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)