import React from 'react';
import './headerNavigation.css';
import HeaderCategory from '../headerCategory/headerCategory';

class HeaderNavigation extends React.Component {
    render() {
        return (
          <div className="header__navigation">
              <HeaderCategory selected={true}/>
              <HeaderCategory/>
          </div>
        );
      }
}

export default HeaderNavigation;