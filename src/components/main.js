import React from "react";
import { Switch, Route } from "react-router-dom";

class Main extends React.Component {
    render() {
        const {
            plp: Plp,
            pdp: Pdp,
            cart: Cart,
            isMinicartOpen,
            setMinicartState,
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                <Switch>
                    <Route exact path="/" component={Plp}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/product/:productId" component={Pdp}></Route>
                </Switch>
                {isMinicartOpen && (
                    <div
                        style={overlayStyle}
                        onClick={() => {
                            setMinicartState(false);
                        }}
                    />
                )}
            </div>
        );
    }
}

const overlayStyle = {
    position: "absolute",
    backgroundColor: "var(--c-gray-overlay)",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
};
const mainContainerStyle = {
    position: "relative",
    flexGrow: 1,
};

export default Main;
