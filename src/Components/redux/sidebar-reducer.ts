import {ActionsTypes, siteBarPageType} from "./redux-store";


let initialState: siteBarPageType = {
    newFriendsAvatars: [
        {id: 1, avatar: 'https://android-obzor.com/wp-content/uploads/2022/03/1-20.jpg'},
        {id: 2, avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/for_vk.jpg'},
        {
            id: 3,
            avatar: 'https://papik.pro/uploads/posts/2021-09/1631887239_8-papik-pro-p-risunki-malenkie-anime-8.jpg'
        }
    ],
    newFriendsNames: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andrey'}
    ]
}


const sidebarReducer = (state = initialState, action: ActionsTypes) => {
    return state;
}

export default sidebarReducer;