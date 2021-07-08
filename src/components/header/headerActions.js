import React from 'react';
import styles from './styles/headerActions.module.scss';
import HeaderCart from './headerCart';

class HeaderActions extends React.Component {
  render() {
    let { headerCurrency: HeaderCurrency } = this.props;
    return (
      <div className={styles.actionsContainer}>
        <HeaderCurrency />
        <HeaderCart />
      </div>
    );
  }
}

export default HeaderActions;