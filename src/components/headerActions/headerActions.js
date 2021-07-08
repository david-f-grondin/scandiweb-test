import React from 'react';
import './headerActions.css';
import HeaderCart from '../headerCart/headerCart';
import HeaderCurrency from '../headerCurrency/headerCurrency';

class HeaderActions extends React.Component {
    render() {
        return (
          <div className="header__actions-container">
            <HeaderCurrency/>
            <HeaderCart/>
          </div>
        );
      }
}

export default HeaderActions;