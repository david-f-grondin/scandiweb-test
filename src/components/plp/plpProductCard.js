import React from 'react';
import styles from './styles/plpProductCard.module.scss';
import cartLogo from '../images/emptyCart.svg';

class PlpProductCard extends React.Component {
  render() {
    return (
      <div className={styles.productsCard}>
        <img src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg" alt=""/>
        <div className={styles.circle}>
          <img src={cartLogo} alt=""/>
        </div>
        <div className={styles.productTitle}>Apollo Running Short</div>
        <div className={styles.price}>$50.00</div>
      </div>
    );
  }
}

export default PlpProductCard;