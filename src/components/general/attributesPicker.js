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
    render() {
        const styleMod = (() => {
            switch (this.props.styleMod) {
                case "1":
                    return style1;
                case "2":
                    return style2;
                default:
                    return style1;
            }
        })();
        return (
            <div
                className={`${baseStyle.attributeSets} ${styleMod.attributeSets}`}
            >
                {this.props.product.attributes.map((attributeSet) => {
                    const isSwatch = attributeSet.type === "swatch";
                    const isText = attributeSet.type === "text";
                    if (
                        !this.props.filterAttributes.includes(attributeSet.name)
                    ) {
                        return (
                            <div
                                key={attributeSet.id}
                                className={`${baseStyle.attributeSet} ${styleMod.attributeSet}`}
                            >
                                {!this.props.filterAttributesHeader.includes(
                                    attributeSet.name
                                ) ? (
                                    <div
                                        className={`${baseStyle.attributeSetName} ${styleMod.attributeSetName}`}
                                    >
                                        {this.props.styleMod === "1"
                                            ? attributeSet.name
                                            : attributeSet.name.toUpperCase()}
                                        :
                                    </div>
                                ) : null}
                                <div
                                    className={`${baseStyle.attributeSetItems} ${styleMod.attributeSetItems}`}
                                >
                                    {attributeSet.items.map((item) => {
                                        return (
                                            <button
                                                key={item.id}
                                                className={`${
                                                    baseStyle.attributesButton
                                                } ${
                                                    styleMod.attributesButton
                                                } ${
                                                    item.selected
                                                        ? `${baseStyle.selectedButton} ${styleMod.selectedButton}`
                                                        : ""
                                                } ${
                                                    isSwatch
                                                        ? `${baseStyle.swatchAttribute} ${styleMod.swatchAttribute}`
                                                        : ""
                                                }
                                                ${
                                                    isText
                                                        ? `${baseStyle.textAttribute} ${styleMod.textAttribute}`
                                                        : ""
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
                                                <span>
                                                    {!isSwatch
                                                        ? item.value
                                                        : " "}
                                                </span>
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
};

export default AttributesPicker;
