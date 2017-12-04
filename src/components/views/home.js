//  @flow

import React from 'react';
import './home.css';

type Props = {};

export default class Home extends React.Component<Props> {
  render(){
    return (
      <section className="homeView">
        <h1>This is the homepage</h1>
      </section>
    )
  }
}
