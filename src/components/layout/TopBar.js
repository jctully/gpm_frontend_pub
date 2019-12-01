import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import mainLogo from "../../Assets/westernlogo_white_sm.png";

const TopBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/">
          <i class="fa fa-home" aria-hidden="true" />{' '}
          <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className="fa fa-sign-out" aria-hidden="true" />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
        <i className="fa fa-code" aria-hidden="true"> GPM</i>

        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

TopBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {logout})(TopBar);



// export default class TopBar extends Component {
//   render() {
//     return (
//       <header className="TopBar">
//         <a href="/"><img src={mainLogo} alt="Western Logo" /></a>
//         <h4>Grad Program Manager!</h4>
//         <span class="name">{ "Hello, " + Student[0].first_name + " " + Student[0].last_name }</span>
//       </header>
//     );
//   }
// }
