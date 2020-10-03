import React from 'react'
import { Pane, Strong, Text } from 'evergreen-ui'
import queryString from 'query-string';
import Fuse from 'fuse.js'
import { Virtuoso } from 'react-virtuoso'
import PaperCard from './PaperCard';



function getHeader(query, resultCount) {
  return (
    <Pane 
      maxWidth={1024}
      marginLeft="auto"
      marginRight="auto"
    >
      <Pane
        marginTop={25}
        marginLeft={15}
        marginRight={15}
        marginBottom={35}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane display="flex">
          <Text marginRight={3}>Query</Text>
          <Strong marginRight={3}>{query} </Strong>
          <Text marginRight={3}>found</Text>
          <Strong marginRight={3}>{resultCount}</Strong>
          <Text>results</Text>
        </Pane>
      </Pane>
    </Pane>

  )
}

function getFooter() {
  return (
    <Pane 
      maxWidth={1024}
      marginLeft="auto"
      marginRight="auto"
      height={64}
    />
  )
}

function getPaper(paper, searchWords=[]) {
  return (
    <Pane 
      maxWidth={1024}
      marginLeft="auto"
      marginRight="auto"
    >
      <Pane
        marginLeft={15}
        marginRight={15}
        marginBottom={35}
      >
        <PaperCard paper={paper} searchWords={searchWords} />
      </Pane>
    </Pane>

  )
}


function getQuery() {
  if (typeof location !== `undefined`) {
    const parsed = queryString.parse(location.search);
    return parsed.q ? parsed.q : ''
  } else {
    return ''
  }
}

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: getQuery(),
    }
    const self = this
    this.popStateListener = ()=>{self.updateQuery()}
  }

  componentDidMount() {


    window.addEventListener('popstate', this.popStateListener)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.popStateListener)
  }

  updateQuery() {
    this.setState({ searchQuery: getQuery() })
  }

  render() {
    const searchQuery = this.state.searchQuery.trim()
    
    if(!this.fuse) {
      this.fuse = new Fuse(this.props.papers, {
        threshold: 0.60,
        keys: [    
          {
            name: 'title',
            weight: 2
          }, 
          {
            name: 'authors',
            weight: 2
          }, 
          'abstract'
        ]
      })
    }

    let filteredPapers;
    let words;

    if (searchQuery.length > 0) {

      filteredPapers = this.fuse.search(searchQuery).map(f => f.item)
      words = searchQuery.split(' ')

    } else {
      words = []
      filteredPapers = this.props.papers
    }

    return (
      <Virtuoso
        footer={getFooter}
        style={{ flex: "1" }}
        totalCount={filteredPapers.length + 1}
        item={index => index === 0 ? getHeader(this.state.searchQuery, filteredPapers.length) : getPaper(filteredPapers[index-1], words)}
      />
    )
  }
}


export default Search;