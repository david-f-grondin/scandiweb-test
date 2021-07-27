import React from "react";
import Attributes from "./attributes";
import style1 from "./styles/attributesSet/attributesSet1.module.scss";
import style2 from "./styles/attributesSet/attributesSet2.module.scss";

class AttributesSet extends React.Component {
    attributeClicked = (attributeId) => {
        const { attributeSet, attributeClicked } = this.props;

        attributeClicked(attributeSet.id, attributeId);
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

    renderAttributes() {
        const { attributeSet, styleMod } = this.props;
        const { items, type } = attributeSet;

        return (
            <Attributes
                type={type}
                attributes={items}
                styleMod={styleMod}
                attributeClicked={this.attributeClicked}
            />
        );
    }

    renderAttributeSetName(style) {
        const { styleMod, attributeSet } = this.props;
        const { name } = attributeSet;
        const nameUpperCase = name.toUpperCase();

        return (
            <div className={style.attributeSetName}>
                {styleMod === "1" ? name : nameUpperCase}
            </div>
        );
    }

    renderIfNotFiltered(content) {
        const { attributeSet, filterAttributesHeader } = this.props;

        return !filterAttributesHeader.includes(attributeSet.name) && content;
    }

    render() {
        const { attributeSet } = this.props;
        const style = this.getStyleMod();

        return (
            <div key={attributeSet.id} className={style.attributeSet}>
                {this.renderIfNotFiltered(this.renderAttributeSetName(style))}

                {this.renderAttributes()}
            </div>
        );
    }
}

AttributesSet.defaultProps = {
    filterAttributesHeader: [],
};

export default AttributesSet;
