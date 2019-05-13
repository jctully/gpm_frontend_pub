import React, { Component } from "react";
import '../App.css';
import { userService } from '../_services/user.service'
import { authenticationService } from '../_services/authentication.service'


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render () {
                const { currentUser, userFromApi } = this.state;
        return (

            <div className='MainContainer'>
            <div className='banner'></div>
                <div className='ContentContainer'>
                    <h1 className='page-title'> Welcome to the Graduate Program Manager Application!</h1>
                    <a href="/info">
                        <button className="button">Info</button>
                    </a>
                    <a href="/login">
                        <button className="button">Login</button>
                    </a>
                    <a href="/todo">
                      <button className="button">Todos</button>
                    </a>
                    <a href="/admin">
                        <button id='bypass' className="button">BYPASS</button>
                    </a>
                </div>
            </div>
        )
    }
}
