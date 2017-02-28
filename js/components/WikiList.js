import React, { Component, PropTypes } from 'react'

import WikiItem from './WikiItem'

export default class WikiList extends Component{
  render() {

    return(
      <div className="list">
        {this.props.wikiList.length > 0 && this.props.wikiList.map(wikiItem =>
          <WikiItem
            key={wikiItem.pageid}
            {...wikiItem}
          />
        )}
      </div>
    );
  }
};

WikiList.propTypes = {
  wikiList: PropTypes.arrayOf(PropTypes.shape({
    pageid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    extract: PropTypes.string.isRequired
  }).isRequired).isRequired
}