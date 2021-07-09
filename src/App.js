import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './containers/header/header';
import Plp from './components/plp/plp';
import { initAPI, getAllCurrenciesAPI, getAllProductsAPI } from './util/api.js';
import { setAllCurrencies } from './slices/currencies';
import { setAllProducts } from './slices/products';


class App extends React.Component {
  async componentDidMount() {
    initAPI();
    var response = await getAllCurrenciesAPI();
    this.props.setAllCurrencies(response);
    response = await getAllProductsAPI();
    this.props.setAllProducts(response);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Plp />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setAllCurrencies: (payload) => {
    dispatch(setAllCurrencies(payload));
  },
  setAllProducts: (payload) => {
    dispatch(setAllProducts(payload));
  }
});

export default connect(null, mapDispatchToProps)(App);
