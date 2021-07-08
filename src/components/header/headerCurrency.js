import React from 'react';
import styles from './styles/headerCurrency.module.scss';
import { action as actionStyle } from './styles/headerActions.module.scss';
import { ReactComponent as DownArrow } from './downArrow.svg';

class HeaderCurrency extends React.Component {
    render() {
        return (
            <div className={actionStyle}>
                <span className={styles.currency}>{this.props.selectedCurrency}</span>
                <DownArrow />
            </div>
        );
    }
}

export default HeaderCurrency;