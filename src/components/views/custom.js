//  @flow

import React from 'react';
import './custom.css';

type Props = {};

export default class Custom extends React.Component<Props> {
  render(){
    return (
      <section className="customView">
        <h1>This is some random custom page</h1>
      </section>
    )
  }
}
