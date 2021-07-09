import React from 'react';
import styles from './styles/header.module.scss';
import { ReactComponent as HeaderLogo } from '../../images/a-logo.svg';

class Header extends React.Component {
  render() {
    let { headerNavigation: HeaderNavigation, headerActions: HeaderActions} = this.props;
    return (
      <div className={styles.header}>
        <HeaderNavigation />
        <HeaderLogo className={styles.headerLogo} />
        <HeaderActions />
      </div>
    );
  }
}

export default Header;