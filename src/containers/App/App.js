import Helmet from 'react-helmet';
import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {isAuthLoaded, loadAuth, logout} from 'redux/modules/auth';
import config from '../../config';

const styles = require('./App.scss');

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {

    const promises = [];

    if (! isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }
}])
@connect(state => ({user: state.auth.user}),
{logout, push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {

    if (! this.props.user && nextProps.user) {
      // login
      this.props.push('/loginSuccess');
    }
    else if (this.props.user && !nextProps.user) {
      // logout
      this.props.push('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const {user} = this.props;

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>

              {! user &&
              <LinkContainer to="/login">
                <NavItem eventKey={5}>Login</NavItem>
              </LinkContainer>}

              {user &&
              <LinkContainer to="/logout">
                <NavItem eventKey={6} className="logout-link" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer>}

            </Nav>

            {user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}

            <Nav navbar pullRight>
              <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/karmapa/karmapa-react-redux-universal">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>{this.props.children}</div>
      </div>
    );
  }
}
