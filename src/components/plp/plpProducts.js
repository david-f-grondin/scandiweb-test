import React from 'react';
import styles from './styles/plpProducts.module.scss';

class PlpProducts extends React.Component {
  render() {
    let { plpProductCard: PlpProductCard } = this.props;
    return (
      <div className={styles.productsContainer}>
        {
          this.props.products.map( (product) => {
            return (
              <PlpProductCard
                key={product.id}
                product={product}
              />
            )
          })
        }
      </div>
    );
  }
}

export default PlpProducts;