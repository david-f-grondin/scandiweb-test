import React from 'react';
import './header.css';
import HeaderNavigation from '../headerNavigation/headerNavigation';
import { ReactComponent as HeaderLogo } from './a-logo.svg';
import HeaderActions from '../headerActions/headerActions';

class Header extends React.Component {
    render() {
        return (
          <div className="header">
              <HeaderNavigation/>
              <HeaderLogo className="header__logo"/>
              <HeaderActions/>
          </div>
        );
      }
}

export default Header;