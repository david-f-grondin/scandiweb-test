import React from "react";
import style from "./styles/plpCategory.module.scss";

class Plp extends React.Component {
    render() {
        const { category } = this.props;
        const categoryUpperCase = category.toUpperCase();

        return <div className={style.categoryTitle}>{categoryUpperCase}</div>;
    }
}

export default Plp;
