import React from 'react'
import { Link, navigate } from 'gatsby'
import { Pane, Text, Heading, Button } from 'evergreen-ui'


export default ({ tasks, type }) => {
  return (
    <Pane
      className="browse_tasks_card hover-bg-change pointer"
      elevation={1}
      onClick={() => navigate(`${type}s/`)}
    >
      <Pane
        marginBottom={5}
      >
        <Link to={`${type}s/`} onClick={e=>e.stopPropagation()}>
          <Heading size={700}>{`Browse ${type}s`}</Heading>
        </Link>
      </Pane>
      <Pane
        marginLeft={-10}
      >
        {tasks.map(task => (
          <Link to={`${type}/${task.name}/`} onClick={e=>e.stopPropagation()}>
            <Button
              height={24}
              paddingLeft={10}
              paddingRight={10}
              appearance="minimal"
            >
              {task.title}
            </Button>
          </Link>
        ))}
        <Text> ...</Text>
      </Pane>
    </Pane>
  )
}