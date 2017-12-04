/* @flow */

import React from 'react';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import AppMain from './components/main/main';
import './App.css';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    );
  }
}

export default App;
