import React from 'react';
import {UsersContent} from "./Users/UsersContent";
import {Route} from 'react-router-dom';


export const MainComponent: React.FunctionComponent = () => {
    return (
        <main className='main'>
            <Route exact path='/users' component={UsersContent}/>
            Main
        </main>
    )
}
