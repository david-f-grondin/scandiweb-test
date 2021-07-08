import React from 'react';
import './headerCurrency.css';
import { ReactComponent as DownArrow } from './downArrow.svg';

class HeaderCurrency extends React.Component {
    render() {
        return (
            <div className="header__action">
                <span className="currency">$</span>
                <DownArrow/>
            </div>
        );
      }
}

export default HeaderCurrency;