import React from 'react';
import styles from './styles/plpProducts.module.scss';
import PlpProductCard from './plpProductCard';

class PlpProducts extends React.Component {
  render() {
    return (
      <div className={styles.productsContainer}>
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
        <PlpProductCard />
      </div>
    );
  }
}

export default PlpProducts;