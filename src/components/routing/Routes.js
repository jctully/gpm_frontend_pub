import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Login from '../auth/Login';
import Register from '../auth/Register';
// import Portal from '../Portal/Portal';
import Forms from '../Portal/Forms';
import Student from '../Portal/Student';
import Todo from '../Todo/todo.component';
import Admin from '../Portal/Admin';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/todo' component={Todo} />
        <Route exact={true} path='/forms' component={Forms} />
        <Route exact={true} path='/student' component={Student} />
        <Route exact={true} path='/admin-register' component={Register} />
        
        <PrivateRoute exact={true} path='/admin' component={Admin} />
      </Switch>
    </section>
  );
};

export default Routes;