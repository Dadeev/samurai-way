import React from 'react'
import s from './MessageAvatars.module.css'

export const MessageAvatars = () => {
    const avatars = [
        {id: 1, avatar: 'https://animeslayers.ru/wp-content/uploads/kartinki/vk/naavatarkuvk1.jpg'},
        {
            id: 2,
            avatar: 'https://papik.pro/uploads/posts/2021-09/1631887239_8-papik-pro-p-risunki-malenkie-anime-8.jpg'
        },
        {id: 3, avatar: 'https://img.freepik.com/free-vector/little-kid-avatar-profile_18591-50412.jpg'},
        {id: 4, avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/for_vk.jpg'},
        {id: 5, avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_28.jpg'},
        {id: 6, avatar: 'https://android-obzor.com/wp-content/uploads/2022/03/1-20.jpg'}
    ]

    const styleForAvatars = {width: '45px', height: '45px', borderRadius: '50%', padding: '10px', marginLeft: '5px'}

    const avatarsForPeople = avatars.map(a => <img key={a.id} src={a.avatar} alt="" style={styleForAvatars}/>)

    return (
        <div>
            {avatarsForPeople}
        </div>
    )
}