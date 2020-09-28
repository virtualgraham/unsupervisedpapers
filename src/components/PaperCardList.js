import React from 'react'
import { Pane } from 'evergreen-ui'
import PaperCard from "./PaperCard"

export default ({ papers }) => {

  return (
    <Pane>
      {papers.map(paper => (
        <Pane           
          marginRight={15}
          marginLeft={15}
          marginBottom={42}
        >
          <PaperCard paper={paper} />
        </Pane>
      ))}
    </Pane>
  )

}
