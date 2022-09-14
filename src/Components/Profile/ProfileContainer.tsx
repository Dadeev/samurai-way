import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../redux/profile-reducer";
import {ProfileType} from "./PropfileInfo/PropfileInfo";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";

type RouterType = {
    location: {
        hash: string
        key: string
        pathname: string
        search: string
        state: null | boolean
    }
    navigate: {
        length: number
        name: string
    }
    params: { userId: string }
}

type ProfileContainerType = {
    profile: ProfileType
    router: RouterType
    getUserProfile: (userId: string) => void
    isAuth: boolean
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    status: string
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        const userId = this.props.router.params.userId;
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

function withRouter(Component: React.ComponentType) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

type mapStateToPropsType = {
    profile: ProfileType,
    status: string
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
