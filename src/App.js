import React from 'react';
import './App.scss';
import Header from './containers/header/header';
import Plp from './components/plp/plp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Plp />
      </div>
    );
  }
}

export default App;
