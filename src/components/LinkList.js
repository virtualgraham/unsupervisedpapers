import React from 'react'
import { Pane, Button, Heading, Text } from 'evergreen-ui'
import { Link } from 'gatsby'
import LinkIcon from './LinkIcon'

export default ({ links }) => {

  return (
    <Pane 
      display="flex"
      flexDirection="column"
      justifyContent="stretch"
    >
      {links.map((link, index) => (
        <Link to={link.url} style={{display: 'contents'}}>
          <Button 
            padding={12}
            marginLeft={-12}
            style={{height: 'auto'}}
            appearance="minimal"
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"

          >
            <Pane width="32px" height="32px" marginTop={3} marginRight={16} display="flex">
              <LinkIcon icon={link.icon} style={{width:"100%", height: "100%", objectFit: "contain"}} />
            </Pane>
            <Pane flex={1} display="flex" justifyContent="flexStart" flexDirection="column">
              <Heading textAlign="left" size={400}>{link.resource}{link.title ? ` - ${link.title}` : ''}</Heading>
              <Text textAlign="left" size={300}>{link.url}</Text>
              { link.description && link.description.trim().length > 0 && (<Text textAlign="left" size={400} marginTop={5}>{link.description}</Text>) }
            </Pane>
          </Button>
        </Link>
      ))}
    </Pane>
  )

}
