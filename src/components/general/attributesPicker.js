import React from "react";
import baseStyle from "./styles/attributesPicker/attributesPicker.module.scss";
import style1 from "./styles/attributesPicker/attributesPicker1.module.scss";
import style2 from "./styles/attributesPicker/attributesPicker2.module.scss";

class AttributesPicker extends React.Component {
    attributeClicked = (attributeSetId, attributeId) => {
        this.props.selectAttribute({
            product: this.props.product,
            attributeSetId: attributeSetId,
            attributeId: attributeId,
        });
    };

    getStyleMod() {
        const { styleMod } = this.props;
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            default:
                return style1;
        }
    }

    renderAttribute(style, attributeSetId, isSwatch, isText, item) {
        const { id, selected, value } = item;
        const attributeButtonStyle = {
            background: `${isSwatch ? value : "inherit"} content-box`,
        };
        const attributeButtonClassName = `
            ${style.attributesButton}
            ${selected ? style.selectedButton : ""} 
            ${isSwatch ? style.swatchAttribute : ""} 
            ${isText ? style.textAttribute : ""}
        `;

        return (
            <button
                key={id}
                className={attributeButtonClassName}
                style={attributeButtonStyle}
                onClick={() => this.attributeClicked(attributeSetId, id)}
            >
                {!isSwatch && <span>{value}</span>}
            </button>
        );
    }

    renderAttributeSetName(style, attributeSetName) {
        const { styleMod } = this.props;
        const attributeSetNameUpperCase = attributeSetName.toUpperCase();

        return (
            <div className={style.attributeSetName}>
                {styleMod === "1"
                    ? attributeSetName
                    : attributeSetNameUpperCase}
            </div>
        );
    }

    renderAttributes(style, attributeSet) {
        const { id, items, type } = attributeSet;
        const isSwatch = type === "swatch";
        const isText = type === "text";

        return (
            <div className={style.attributeSetItems}>
                {items.map((attribute) => {
                    return this.renderAttribute(
                        style,
                        id,
                        isSwatch,
                        isText,
                        attribute
                    );
                })}
            </div>
        );
    }

    renderAttributeSet(style, attributeSet) {
        const { filterAttributesHeader } = this.props;
        const { id, name } = attributeSet;

        return (
            <div key={id} className={style.attributeSet}>
                {!filterAttributesHeader.includes(name) &&
                    this.renderAttributeSetName(style, name)}

                {this.renderAttributes(style, attributeSet)}
            </div>
        );
    }

    shouldRenderAttributeSet(attributeSet) {
        const { filterAttributes, filterAttributesByType } = this.props;

        return (
            !filterAttributes.includes(attributeSet.name) &&
            !filterAttributesByType.includes(attributeSet.type)
        );
    }

    renderAttributeSets(style) {
        const { product } = this.props;

        return product.attributes.reduce((result, attributeSet) => {
            if (this.shouldRenderAttributeSet(attributeSet)) {
                result.push(this.renderAttributeSet(style, attributeSet));
            }
            return result;
        }, []);
    }

    render() {
        const style = this.getStyleMod();
        const attributeSetsClassName = `
            ${baseStyle.attributeSets}
            ${style.attributeSets}
        `;

        return (
            <div className={attributeSetsClassName}>
                {this.renderAttributeSets(style)}
            </div>
        );
    }
}

AttributesPicker.defaultProps = {
    filterAttributes: [],
    filterAttributesHeader: [],
    filterAttributesByType: [],
};

export default AttributesPicker;
