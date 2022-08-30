import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";

type HeaderContainerComponentPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    isAuth: boolean,
    login: string
}
class HeaderContainerComponent extends React.Component<HeaderContainerComponentPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login}/>
            </>
        )
    }
}

type mapStateToPropsType = {
    isAuth: boolean,
    login: string
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerComponent)