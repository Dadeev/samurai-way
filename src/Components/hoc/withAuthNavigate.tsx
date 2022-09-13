import React from 'react';
import {Navigate} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForNavigate = {
    isAuth: boolean
}

const mapStateToPropsForNavigate = (state: RootStateType): mapStateToPropsForNavigate => ({
    isAuth: state.auth.isAuth
})

export function withAuthNavigate<T>(Component: React.ComponentType<T>) {
    class NavigateComponent extends React.Component<mapStateToPropsForNavigate> {
        render() {
            let {isAuth, ...restProps} = this.props;
            if (!isAuth) return <Navigate to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    return connect(mapStateToPropsForNavigate)(NavigateComponent)
};
