import React, { Component, PropTypes } from 'react'
import { openUrl } from '../settings'
import moment from 'moment'

export default class WikiItem extends Component{
  render() {
    const { pageid, title, extract, original, length, touched } = this.props
    return (
      <a href={openUrl + pageid} target="_blank" className="item" >
        <div className="itemInfo">
            {original && <img src={original.source}/>}
          <div>
            <h1 className="itemTitle">{title}</h1>
            <p className="itemText">{extract}</p>
          </div>
        </div>
        <div className="itemFooter">
        {(length/8|0)+ "Кб " + moment(touched).format("HH:mm, DD.MM.YYYY")}
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