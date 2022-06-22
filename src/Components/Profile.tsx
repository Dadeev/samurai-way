import React from "react";
import s from'./Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}