import React from 'react';
import styles from './styles/headerCart.module.scss';
import { ReactComponent as HeaderCartLogo } from '../../images/emptyCart.svg';

class HeaderCart extends React.Component {
    render() {
        return (
            <button className={styles.cartButton}>
                <HeaderCartLogo className={styles.cartLogo}/>
            </button>
        );
    }
}

export default HeaderCart;