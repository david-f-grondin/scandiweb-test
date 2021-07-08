import React from 'react';
import './App.css';
import Header from './components/header/header';

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
