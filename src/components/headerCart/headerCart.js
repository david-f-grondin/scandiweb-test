import React from 'react';
import { ReactComponent as HeaderCartLogo } from './emptyCart.svg';

class HeaderCart extends React.Component {
    render() {
        return (
            <HeaderCartLogo className="header__action"/>
        );
      }
}

export default HeaderCart;