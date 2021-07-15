import React from "react";

class Plp extends React.Component {
    render() {
        const { plpProducts: PlpProducts, plpCategory: PlpCategory } =
            this.props;
        return (
            <div>
                <PlpCategory />
                <PlpProducts />
            </div>
        );
    }
}

export default Plp;
