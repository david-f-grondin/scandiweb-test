import React from 'react';
import styles from './styles/headerCart.module.scss';
import convertToSymbol from '../../util/currencyConverter';
import { computeCartTotal } from '../../util/cartItemUtil';
import { ReactComponent as HeaderCartLogo } from '../../images/emptyCart.svg';

class HeaderCart extends React.Component {
    minicartClicked = e => {
        this.props.setMinicartState(!this.props.isMinicartOpen)
    };
    render() {
        let { cartItems: CartItems } = this.props;
        return (
            <div className={styles.cartContainer}>
                <button className={styles.cartButton}
                    onClick={this.minicartClicked}
                >
                    <HeaderCartLogo className={styles.cartLogo} />
                </button>
                {
                    (this.props.isMinicartOpen) ? (
                        <div className={styles.minicart}>
                            <div className={styles.itemsCounter}>
                                <span className={styles.itemsCounterBold}>My Bag,</span>
                                <span> {this.props.cart.length} items</span>
                            </div>
                            <CartItems />
                            <div className={styles.total}>
                                <span className={styles.totalText}>Total</span>
                                <span className={styles.totalValue}>{convertToSymbol(this.props.selectedCurrency) + computeCartTotal(this.props.cart, this.props.selectedCurrency).toFixed(2)}</span>
                            </div>
                            <div className={styles.buttonsContainer}>
                                <button className={styles.viewButton} >VIEW BAG</button>
                                <button className={styles.checkOutButton} >CHECK OUT</button>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default HeaderCart;