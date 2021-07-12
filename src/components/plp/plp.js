import React from "react";
import styles from "./styles/plp.module.scss";

class Plp extends React.Component {
    render() {
        let { plpProducts: PlpProducts, plpCategory: PlpCategory } = this.props;
        return (
            <div className={styles.plpContainer}>
                <PlpCategory />
                <PlpProducts />
            </div>
        );
    }
}

export default Plp;
