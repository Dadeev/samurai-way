import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {siteBarPageType} from "../redux/redux-store";


type NavbarType = {
    state: siteBarPageType
}

export const Navbar = (props: NavbarType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div>
                <Friends siteBarPage={props.state}/>
            </div>
        </nav>
    )
}