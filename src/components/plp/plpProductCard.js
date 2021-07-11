import React from 'react';
import styles from './styles/plpProductCard.module.scss';
import cartLogo from '../../images/emptyCart.svg';
import convertToSymbol from '../../util/currencyConverter';
import { productPriceSelector } from '../../store/selectors';
import { productToItem } from '../../util/cartItemUtil';

class PlpProductCard extends React.Component {
  addToCartClicked = (product) => {
    const item = productToItem(product);
    this.props.selectCartItem(item);
    this.props.addItem(item);
  };

  render() {
    let price = productPriceSelector(this.props.product, this.props.selectedCurrency);
    return (
      <div className={styles.productsCard}>
        <div className={styles.productImageContainer}>
          <img className={styles.productImage} src={this.props.product.gallery[0]} alt=""/>
        </div>
        <button className={styles.circle} onClick={() => this.addToCartClicked(this.props.product)}>
          <img src={cartLogo} alt=""/>
        </button>
        <div className={styles.productTitle}>{this.props.product.name}</div>
        <div className={styles.price}>{convertToSymbol(price.currency) + price.amount}</div>
      </div>
    );
  }
}

export default PlpProductCard;