import React from "react";
import styles from "./styles/plp.module.scss";

class Plp extends React.Component {
    render() {
        let { plpProducts: PlpProducts, plpCategory: PlpCategory } = this.props;
        return (
            <div className={styles.plpContainer}>
                <PlpCategory />
                <PlpProducts />
                {this.props.isMinicartOpen ? (
                    <div className={styles.overlay}></div>
                ) : null}
            </div>
        );
    }
}

export default Plp;
