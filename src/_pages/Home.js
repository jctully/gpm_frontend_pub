import React, {Component} from "react";
import '../App.css';

export default class Home extends Component {

  render() {
    return (<div className='MainContainer'>
      <div className='banner'></div>
      <div className='ContentContainer'>
        <h1 className='page-title'>
          Welcome to the Graduate Program Manager Application!</h1>
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
          <button id='bypass-admin' className="button">Admin</button>
        </a>
        <a href="/student">
          <button id='bypass-student' className="button">Student</button>
        </a>
      </div>
    </div>)
  }
}
