import React from "react";
import AttributesSet from "./attributesSet";
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

    shouldRenderAttributeSet(attributeSet) {
        const { filterAttributes, filterAttributesByType } = this.props;

        return (
            !filterAttributes.includes(attributeSet.name) &&
            !filterAttributesByType.includes(attributeSet.type)
        );
    }

    renderAttributeSet(attributeSet) {
        const { styleMod, filterAttributesHeader } = this.props;
        const { id } = attributeSet;

        return (
            <AttributesSet
                key={id}
                styleMod={styleMod}
                attributeSet={attributeSet}
                filterAttributesHeader={filterAttributesHeader}
                attributeClicked={this.attributeClicked}
            />
        );
    }

    renderAttributeSets() {
        const { product } = this.props;

        return product.attributes.reduce((result, attributeSet) => {
            if (this.shouldRenderAttributeSet(attributeSet)) {
                result.push(this.renderAttributeSet(attributeSet));
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
                {this.renderAttributeSets()}
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
