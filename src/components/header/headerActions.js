import React from 'react';
import styles from './styles/headerActions.module.scss';

class HeaderActions extends React.Component {
  render() {
    let { headerCurrency: HeaderCurrency, headerCart: HeaderCart } = this.props;
    return (
      <div className={styles.actionsContainer}>
        <HeaderCurrency />
        <HeaderCart />
      </div>
    );
  }
}

export default HeaderActions;