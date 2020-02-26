import React from 'react'
import css from './usersContent.module.css'

const userList = [
    {
        "email": "bjcreslin@gmail.com",
        "gitHubId": "bjcreslin",
        "name": "Vladimir Jurievich Kreslin",
        "hours": 3,
        "createDate": 1581665192441,
        "updateDate": 1581665192441,
        "status": "BUSY"
    },
    {
        "email": "string@email.me",
        "gitHubId": "string",
        "name": "string",
        "hours": 2,
        "createDate": 1581669345594,
        "updateDate": 1581669345594,
        "status": "BUSY"
    },
    {
        "email": "bjcreslin@yandex.ru",
        "gitHubId": "bjcreslin",
        "name": "Vladimir Kreslin",
        "hours": 5,
        "createDate": 1581669423610,
        "updateDate": 1581669423610,
        "status": "BUSY"
    },
    {
        "email": "bjcreslin@gmail.com12",
        "gitHubId": "bjcreslin",
        "name": "Vladimir Jurievich Kreslin",
        "hours": 4,
        "createDate": 1581671286758,
        "updateDate": 1581671286758,
        "status": "BUSY"
    },
    {
        "email": "bjcreslin@gmail.com2",
        "gitHubId": "s",
        "name": "Vladimir Jurievich Kreslin",
        "hours": 3,
        "createDate": 1581671613403,
        "updateDate": 1581671613403,
        "status": "BUSY"
    },
    {
        "email": "bjcreslin@gmail.com123",
        "gitHubId": "bjcreslin",
        "name": "Vladimir Jurievich Kreslin",
        "hours": 3,
        "createDate": 1581698720814,
        "updateDate": 1581698720814,
        "status": "BUSY"
    },
    {
        "email": "bjcreslin@gmail.com112",
        "gitHubId": "bjcreslin",
        "name": "Vladimir Jurievich Kreslin",
        "hours": 2,
        "createDate": 1581922655462,
        "updateDate": 1581922655462,
        "status": "BUSY"
    }
];

const listUser = () => {
    return (
        userList.map((User) => {
            return (
                <li className="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" className="circle"/>
                    <span className="title"><span className="css.user-name">{User.name}</span>-  ({User.email})</span>
                    <p>{User.gitHubId}</p> <br/>
                    <p> Second Line </p>
                    <a href="#" className="secondary-content"><i
                        className="material-icons">{getIcon(User.status)}</i></a>
                </li>
            )
        })
    )
};


const getIcon = (status: string) => {
    switch (status.toUpperCase()) {
        case "BUSY":
            return "event_busy";
        default:
            return "contact_support";

    }
};
export const UsersContent: React.FunctionComponent = (userList: any) => {
    return (

        <ul className="collection">
            {listUser()}
        </ul>


    )

};
