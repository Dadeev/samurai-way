import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {getUserProfile} from "../redux/profile-reducer";
import {ProfileType} from "./PropfileInfo/PropfileInfo";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

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
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

function withRouter(Component: any) {
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

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))