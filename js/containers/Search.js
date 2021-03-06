import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSearch } from '../actions'

class Search extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e, input) {
    e.preventDefault();
    if (input.value.trim()) {
      this.props.onSubmit(input.value.trim())
    }
  }

  render() {
    let input;
    return (
      <div className="searchForm">
        <form className="form-inline" onSubmit={e => this.onFormSubmit(e, input)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              ref={node => {input = node}}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Найти</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(fetchSearch(text))
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)