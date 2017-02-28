import { connect } from 'react-redux'
import { toggleToDo, removeToDo } from '../actions'
import WikiList from '../components/WikiList'

const mapStateToProps = (state) => {
  const { isFetching, lastUpdated, wikiList } = state

  return {
    isFetching,
    wikiList,
    lastUpdated
  }
}

export default connect(mapStateToProps)(WikiList)
