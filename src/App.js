import React from 'react';
import './App.scss';
import Header from './containers/header/header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
