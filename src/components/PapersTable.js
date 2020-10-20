import React from 'react'
import { navigate } from 'gatsby'
import { Table, Pane, Heading, Text,  } from 'evergreen-ui'
import moment from 'moment';

class PapersTable extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: '',
    }
  }

  handleFilterChange = value => {
    this.setState({ searchQuery: value })
  }

  render() {
    const { papers } = this.props;
    let filtered_papers;
    if (this.state.searchQuery && this.state.searchQuery.trim() !== '') {
      filtered_papers = papers.filter(paper => paper.title.toLowerCase().includes(this.state.searchQuery.trim().toLowerCase()))
    } else {
      filtered_papers = papers
    }

    return (
      <Table>
        <Table.Head height={48}>
          <Table.SearchHeaderCell  
            flexBasis="80%"
            onChange={this.handleFilterChange}
          />
          <Table.TextHeaderCell>
            Date
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.VirtualBody height={filtered_papers.length < 5 ? (filtered_papers.length * 72) : 360}>
          {filtered_papers.map(paper => (
            <Table.Row key={paper.name} height={72} isSelectable onSelect={()=>navigate(`/paper/${paper.name}`)}> 
              <Table.Cell alignItems="flexStart" justifyContent="center" display="flex" flexDirection="column" flexBasis="80%">
                <Pane>
                  <Heading>{paper.title}</Heading>
                </Pane>
                <Pane>
                  {paper.authors.map((author, i) => (
                    <>
                      {i > 0 && <Text> &bull; </Text>}
                      <Text>{author}</Text>
                    </>
                  ))}
                </Pane>

              </Table.Cell>
              <Table.TextCell>{moment(paper.date).format('D MMM YYYY')}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.VirtualBody>
      </Table>
    )
  }
}

export default PapersTable;