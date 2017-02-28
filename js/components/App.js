import React, { Component } from 'react'

import Link from './Link'
import Search from '../containers/Search'
import VisibleSearchList from '../containers/VisibleSearchList'

export default class App extends Component{
  render() {
    return(
      <div>
        <div className="main">
          <Link />
          <Search />
          <VisibleSearchList />
        </div>
      </div>
    );
  }
}