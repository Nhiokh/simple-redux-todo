//  @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Custom from '../views/custom';

type Props = {};

export default class AppMain extends React.Component<Props> {
  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/custom' component={Custom}/>
        </Switch>
      </main>
    )
  }
}
