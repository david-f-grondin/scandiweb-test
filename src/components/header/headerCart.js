import React from 'react';
import styles from './styles/headerActions.module.scss';
import { ReactComponent as HeaderCartLogo } from './emptyCart.svg';

class HeaderCart extends React.Component {
    render() {
        return (
            <HeaderCartLogo className={styles.action} />
        );
    }
}

export default HeaderCart;