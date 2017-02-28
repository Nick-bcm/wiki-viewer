import React, { Component, PropTypes } from 'react'
import { OPEN_URL } from '../settings'
import moment from 'moment'

export default class WikiItem extends Component{
  render() {
    
    const { pageid, title, extract, original, length, touched } = this.props
    const FOOTER_TEXT = (length/8|0)+ "Кб " + moment(touched).format("HH:mm, DD.MM.YYYY")

    return (
      <a href={OPEN_URL + pageid} target="_blank" className="item" >
        <div className="itemInfo">
            {original && <img src={original.source}/>}
          <div>
            <h1 className="itemTitle">{title}</h1>
            <p className="itemText">{extract}</p>
          </div>
        </div>
        <div className="itemFooter">
        {FOOTER_TEXT}
        </div>
      </a>
    );
  }
}

WikiItem.propTypes = {
  title: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  pageid: PropTypes.number.isRequired
}