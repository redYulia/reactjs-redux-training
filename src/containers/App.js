import React from 'react';
import Users from '../components/Users';

export default class App extends React.Component {
    render() {
        return <div>
            <span>Привет из App</span>
            <Users/>
        </div>
    }
}