import React from "react";
import styles from "./styles/itemAttributes.module.scss";

class CartItems extends React.Component {
    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };
    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };
    render() {
        return (
            <div className={styles.attributes}>
                {this.props.cartItem.attributes.map((attributeSet) => {
                    return (
                        <div
                            key={attributeSet.id}
                            className={styles.attributeSet}
                        >
                            {attributeSet.items.map((item) => {
                                const isSwatch = attributeSet.type === "swatch";
                                return (
                                    <button
                                        key={item.id}
                                        className={`${
                                            styles.attributesButton
                                        } ${
                                            item.selected
                                                ? styles.selectedButton
                                                : ""
                                        } ${
                                            isSwatch
                                                ? styles.swatchAttribute
                                                : ""
                                        }`}
                                        style={{
                                            background: `${item.value} content-box`,
                                        }}
                                    >
                                        {!isSwatch ? item.value : " "}
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CartItems;
