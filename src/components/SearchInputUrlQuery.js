
import React from 'react'
import { SearchInput } from 'evergreen-ui'
import queryString from 'query-string';

function getQuery() {
  if (typeof location !== `undefined`) {
    const parsed = queryString.parse(location.search);
    return parsed.q ? parsed.q : ''
  } else {
    return ''
  }
}

function runSearchQuery(query) {
  const state = {query}
  history.pushState(state, "Search", `?q=${encodeURIComponent(query)}`)
  dispatchEvent(new PopStateEvent('popstate', { state }));
}

class SearchInputUrlQuery extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: getQuery(),
    }
    const self = this
    this.popStateListener = () => { self.updateQuery() }
  }

  componentDidMount() {
    window.addEventListener('popstate', this.popStateListener)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.popStateListener)
  }

  updateQuery() {
    console.log("SearchInputUrlQuery updateQuery")
    this.setState({ searchQuery: getQuery() })
  }

  render() {
    return (
      <SearchInput
        placeholder="Search papers..."
        className="search-input"
        onKeyDown={e => { 
          if (e.which === 13 || e.keyCode === 13) {
            runSearchQuery(e.target.value)
          }
        }}
        onChange={e => {
          this.setState({ searchQuery: e.target.value })
        }}
        value={this.state.searchQuery}
      />
    )
  }
}

export default SearchInputUrlQuery;