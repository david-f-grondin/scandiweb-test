import React from "react";
import style from "./styles/plpCategory.module.scss";

class Plp extends React.Component {
    render() {
        const { category } = this.props;

        return (
            <div className={style.categoryTitle}>{category.toUpperCase()}</div>
        );
    }
}

export default Plp;
