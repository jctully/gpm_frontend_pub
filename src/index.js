import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// setup fake backend
import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();


ReactDOM.render(<App />, document.getElementById('root'));
