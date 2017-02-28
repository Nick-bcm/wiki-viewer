import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import WikiItem from '../components/WikiItem'

class WikiList extends Component{
  render() {
    console.log(this.props);
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

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(WikiList)
