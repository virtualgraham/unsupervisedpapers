import React from 'react'
import { Link, navigate } from 'gatsby'
import { Pane, Text, Heading } from 'evergreen-ui'

export default ({ more_url, more_msg, url_callback, tasks, max }) => {

  const count = max ? Math.min(max, tasks.length) : tasks.length

  return (
    <Pane
      flex={1}
      display="flex"
      flexWrap="wrap"
      marginLeft={-25}
    >

      { tasks.slice(0, max).map((task) => (
        <Pane
          key={task.name}
          flexBasis="229px"
          elevation={2}
          display="flex"
          flexDirection="column"
          flex={1}
          height={220}
          marginLeft={25}
          marginBottom={25}
          className="hover-bg-change pointer"
        >
          <Link style={{ display: "contents" }} to={url_callback(task)} key={task.name}>
            <Pane
              height={120}
              background="rgb(240,240,240)"
            >
              <img src={task.thumbnail} style={{ objectFit: "contain", height: "100%", width: "100%" }} />
            </Pane>
            <Pane
              flex={1}
              display="flex"
              padding={10}
              flexDirection="column"
            >
              <Pane flex={1}>
                <Heading size={400}>{task.title}</Heading>
              </Pane>
              <Text>
                {task.paper_count} papers
                          </Text>
            </Pane>
          </Link>
        </Pane>
      ))}

      { tasks.length > max && (
        <Pane
          flexBasis="229px"
          display="flex"
          flex={1}
          flexDirection="column"
          height={220}
          marginLeft={25}
          marginBottom={25}
          className="hover-bg-change pointer"
        >
          <Link style={{ display: "contents", width: "100%", height: "100%" }} to={more_url}>
            <Pane 
              display="flex"
              flex={1}
              alignItems="center"
              justifyContent="center"
            >
              <Heading textAlign="center">{more_msg}</Heading>
            </Pane>
          </Link>
        </Pane>
      )}

      { Array(3).fill().map((_, i) => (
        <Pane
          key={i}
          marginLeft={25}
          height={0}
          flexBasis="229px"
          flex={1}
        />
      ))}

    </Pane>
  )
}