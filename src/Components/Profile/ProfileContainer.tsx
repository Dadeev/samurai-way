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
        pathname: any
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
    authorizedUserId: number

}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (userId === undefined) {
            userId = String(this.props.authorizedUserId)
            if (!userId) {
                return this.props.router.location.pathname.push('/login')
            }
        }
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

export function withRouter(Component: React.ComponentType) {
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
    authorizedUserId: number
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
