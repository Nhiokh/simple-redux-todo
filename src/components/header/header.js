//  @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

type Props = {};

export default class AppHeader extends React.Component<Props> {
  render(){
    return (
      <header>
        <ul>
          <li><Link className='headerLink' to='/'>Home</Link></li>
          <li><Link className='headerLink' to='/custom'>Custom</Link></li>
        </ul>
      </header>
    )
  }
}
