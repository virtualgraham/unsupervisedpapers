import React from 'react'
import { Pane, Button, Heading, Text } from 'evergreen-ui'
import { Link } from 'gatsby'
import LinkIcon from './LinkIcon'

export default ({ links }) => {

  return (
    <Pane 
      display="flex"
      flexDirection="column"
    >
      {links.map((link, index) => (
        <Link to={link.url}>
          <Button 
            padding={10}
            marginLeft={-10}
            height={56}
            appearance="minimal"
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Pane width="32px" height="32px" marginRight={16} display="flex">
              <LinkIcon icon={link.type} style={{width:"100%", height: "100%", objectFit: "contain"}} />
            </Pane>
            <Pane flex={1} display="flex" justifyContent="flexStart" flexDirection="column">
              <Heading textAlign="left" size={400}>{link.title}</Heading>
              <Text textAlign="left" size={300}>{link.url}</Text>
            </Pane>
          </Button>
        </Link>
      ))}
    </Pane>
  )

}
