import React from 'react';

export default class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            users: [
                {
                    name: "Padsha"
                },
                {
                    name: "Sasha"
                },
                {
                    name: "Dasha"
                }
            ]
        };

        this.onUserClick = this.onUserClick.bind(this); //- old variant
    }

    componentDidMount() {
    }

    onUserClick() {
        this.setState(Object.assign(this.state, {
            count: 33
        }))
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map((user, index) => {
                        return (
                            <div key={index} onClick={this.onUserClick}>
                                {user.name}
                            </div>
                        );
                    })
                }
                <p>{this.state.count}</p>
        </div>)
    }
}