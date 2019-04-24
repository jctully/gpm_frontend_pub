import React, { Component } from "react";

export default class Home extends Component {


    render () {
        return (
            <div id="container">
                <h1> Welcome to the Graduate Program Manager Application!</h1>
                <a href="/info"><button>Info</button></a>
                <a href="/login"><button>Login</button></a>
                <a href="/portal"><button>Portal</button></a>
            </div>
        )
    }
}
