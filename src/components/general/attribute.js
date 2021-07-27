import React from "react";
import style1 from "./styles/attribute/attribute1.module.scss";
import style2 from "./styles/attribute/attribute2.module.scss";

class Attribute extends React.Component {
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

    getAttributeButtonClassName(style) {
        const { isSwatch, isText, attribute } = this.props;
        const { selected } = attribute;

        return `
            ${style.attributesButton}
            ${selected ? style.selectedButton : ""} 
            ${isSwatch ? style.swatchAttribute : ""} 
            ${isText ? style.textAttribute : ""}
        `;
    }

    getAttributeButtonStyle() {
        const { isSwatch, attribute } = this.props;
        const { value } = attribute;

        return {
            background: `${isSwatch ? value : "inherit"} content-box`,
        };
    }

    renderValueIfNotSwatch() {
        const { isSwatch, attribute } = this.props;

        return !isSwatch && <span>{attribute.value}</span>;
    }

    render() {
        const { attributeClicked, attribute } = this.props;
        const style = this.getStyleMod();
        const attributeButtonClassName =
            this.getAttributeButtonClassName(style);
        const attributeButtonStyle = this.getAttributeButtonStyle();

        return (
            <button
                key={attribute.id}
                className={attributeButtonClassName}
                style={attributeButtonStyle}
                onClick={() => attributeClicked(attribute.id)}
            >
                {this.renderValueIfNotSwatch()}
            </button>
        );
    }
}

export default Attribute;
