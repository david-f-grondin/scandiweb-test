import React from 'react';
import styles from './styles/plp.module.scss';
import PlpCategory from './plpCategory';
import PlpProducts from './plpProducts';

class Plp extends React.Component {
  render() {
    return (
      <div className={styles.plpContainer}>
        <PlpCategory />
        <PlpProducts />
      </div>
    );
  }
}

export default Plp;