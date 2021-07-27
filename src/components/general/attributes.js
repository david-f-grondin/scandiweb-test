import React from "react";
import Attribute from "./attribute";
import style1 from "./styles/attributes/attributes1.module.scss";
import style2 from "./styles/attributes/attributes2.module.scss";

class Attributes extends React.Component {
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

    renderAttribute(isSwatch, isText, attribute) {
        const { styleMod, attributeClicked } = this.props;

        return (
            <Attribute
                key={attribute.id}
                styleMod={styleMod}
                isSwatch={isSwatch}
                isText={isText}
                attribute={attribute}
                attributeClicked={attributeClicked}
            />
        );
    }

    renderAttributes() {
        const { attributes, type } = this.props;
        const isSwatch = type === "swatch";
        const isText = type === "text";

        return attributes.map((attribute) => {
            return this.renderAttribute(isSwatch, isText, attribute);
        });
    }

    render() {
        const style = this.getStyleMod();

        return (
            <div className={style.attributeSetItems}>
                {this.renderAttributes()}
            </div>
        );
    }
}

export default Attributes;
