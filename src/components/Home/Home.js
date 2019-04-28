import React, { Component } from "react";
import '../../App.css';

export default class Home extends Component {


    render () {
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
                    <a href="/portal">
                        <button id='bypass' className="button">BYPASS</button>
                    </a>
                </div>
            </div>
        )
    }
}
