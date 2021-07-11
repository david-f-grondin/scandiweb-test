import React from 'react';
import styles from './styles/cartItems.module.scss';

class CartItems extends React.Component {
    render() {
        return (
            <div className={styles.cartItems}>
                <div className={styles.item}>
                    <div className={styles.namePrice}>
                        <div className={styles.brand}>Apollo</div>
                        <div className={styles.name}>Running Short</div>
                        <div className={styles.price}>$50.00</div>
                    </div>
                    <div className={styles.attributes}>
                        <button className={styles.attributesButton}>S</button>
                        <button className={styles.attributesButton}>M</button>
                    </div>
                    <button className={`${styles.addItem} ${styles.button}`}></button>
                    <div className={styles.countItems}>2</div>
                    <button className={`${styles.removeItem} ${styles.button}`}></button>
                    <div className={styles.image}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItems;