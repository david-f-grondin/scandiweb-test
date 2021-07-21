import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./containers/header/header";
import Main from "./containers/main";
import {
    initAPI,
    getAllCurrenciesAPI,
    getAllCategoriesAPI,
    getAllProductsAPI,
    getProductsByCategoryAPI,
} from "./util/api.js";
import { setAllCategories } from "./slices/categories";
import { setAllCurrencies } from "./slices/currencies";
import { setAllProducts } from "./slices/products";
import { productsSelector } from "./store/selectors";

class App extends React.Component {
    constructor(props) {
        super(props);
        initAPI();
    }

    async componentDidMount() {
        let response = await getAllCurrenciesAPI();
        this.props.setAllCurrencies(response);
        response = await getAllCategoriesAPI();
        this.props.setAllCategories(response);
        if (this.props.products?.length === 0) {
            response =
                response[0] === "all"
                    ? await getAllProductsAPI()
                    : await getProductsByCategoryAPI(response[0]);
            this.props.setAllProducts(response);
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: productsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    setAllCategories: (payload) => {
        dispatch(setAllCategories(payload));
    },
    setAllCurrencies: (payload) => {
        dispatch(setAllCurrencies(payload));
    },
    setAllProducts: (payload) => {
        dispatch(setAllProducts(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
