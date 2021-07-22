import React from "react";
import baseStyle from "./styles/attributesPicker.module.scss";
import style1 from "./styles/attributesPicker1.module.scss";
import style2 from "./styles/attributesPicker2.module.scss";

class AttributesPicker extends React.Component {
    attributeClicked = (attributeSetId, attributeId) => {
        this.props.selectAttribute({
            product: this.props.product,
            attributeSetId: attributeSetId,
            attributeId: attributeId,
        });
    };

    getStyleMod = (styleMod) => {
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            default:
                return style1;
        }
    };

    render() {
        const {
            product,
            filterAttributes,
            filterAttributesByType,
            filterAttributesHeader,
            styleMod,
        } = this.props;

        const style = this.getStyleMod(styleMod);

        return (
            <div
                className={`${baseStyle.attributeSets} ${style.attributeSets}`}
            >
                {product.attributes.map((attributeSet) => {
                    const isSwatch = attributeSet.type === "swatch";
                    const isText = attributeSet.type === "text";
                    if (
                        !filterAttributes.includes(attributeSet.name) &&
                        !filterAttributesByType.includes(attributeSet.type)
                    ) {
                        return (
                            <div
                                key={attributeSet.id}
                                className={style.attributeSet}
                            >
                                {!filterAttributesHeader.includes(
                                    attributeSet.name
                                ) && (
                                    <div className={style.attributeSetName}>
                                        {styleMod === "1"
                                            ? attributeSet.name
                                            : attributeSet.name.toUpperCase()}
                                        :
                                    </div>
                                )}
                                <div className={style.attributeSetItems}>
                                    {attributeSet.items.map((item) => {
                                        return (
                                            <button
                                                key={item.id}
                                                className={`${
                                                    style.attributesButton
                                                } ${
                                                    item.selected &&
                                                    style.selectedButton
                                                } ${
                                                    isSwatch &&
                                                    style.swatchAttribute
                                                }
                                                ${
                                                    isText &&
                                                    style.textAttribute
                                                }`}
                                                style={{
                                                    background: `${
                                                        isSwatch
                                                            ? item.value
                                                            : "inherit"
                                                    } content-box`,
                                                }}
                                                onClick={() =>
                                                    this.attributeClicked(
                                                        attributeSet.id,
                                                        item.id
                                                    )
                                                }
                                            >
                                                {!isSwatch && (
                                                    <span>{item.value}</span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
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
