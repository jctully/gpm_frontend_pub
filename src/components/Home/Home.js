import React, { Component } from "react";
import '../../App.css';

export default class Home extends Component {
    state = {
    }

    render () {
        return (
            
            <div id="container">
            <div className='background'></div>
            <div className='panel-left'></div>
            <div className='panel-right'></div>

            
                <h1 className='page-title'> Welcome to the Graduate Program Manager Application!</h1>
                <a href="/info">
                    <button className="button">Info</button>
                </a>
                <a href="/login">
                    <button className="button">Login</button>
                </a>
            </div>
        )
    }
}