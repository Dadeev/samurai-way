import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {setProfileOfUser, setUserProfile} from "../redux/profile-reducer";
import {ProfileType} from "./PropfileInfo/PropfileInfo";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {commonAPI} from "../../api/api";

type mapStateToPropsType = {
    profile: ProfileType
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
    setProfileOfUser: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        this.props.setProfileOfUser(this.props.router.params.userId)
    }

    render() {
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
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfileOfUser})(withRouter(ProfileContainer))