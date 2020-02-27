import React from "react";

let store: React.PropsWithRef<any> = {
    _state: {
        users: {}
    },
    rerenderEntireTree() {
        console.log("state changed")
    },
    setUsers() {
        this._state.users = [
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
        ]
    }
};

// window.store = store;
export default store;

