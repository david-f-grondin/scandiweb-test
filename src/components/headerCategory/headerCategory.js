import React from 'react';
import './headerCategory.css';

class HeaderCategory extends React.Component {
    render() {
        const classes = `header__category ${this.props.selected ? 'header__category--selected' : ''}`
        return (
          <div className={classes}>
              <span>Category</span>
          </div>
        );
      }
}

export default HeaderCategory;