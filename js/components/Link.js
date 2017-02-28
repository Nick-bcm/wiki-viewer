import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
      <a className="white-text" href="https://wikipedia.org/wiki/Special:Random" target="_blank">
        Открыть случайную статью
      </a>
    );
  }
}