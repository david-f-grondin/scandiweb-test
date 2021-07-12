import React from "react";
import styles from "./styles/plpCategory.module.scss";

class Plp extends React.Component {
    render() {
        return (
            <div className={styles.categoryTitle}>
                {this.props.category.toUpperCase()}
            </div>
        );
    }
}

export default Plp;
