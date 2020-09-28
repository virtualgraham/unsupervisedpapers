import React from 'react'
import { Link } from 'gatsby'
import { Pane, Text, Paragraph, Heading, Badge } from 'evergreen-ui'


export default ({ posts }) => {

  return (
    <Pane>
      {(
        posts.map(post => (
          <Link style={{ display: "contents" }} to={post.slug} key={post.name}>
            <Pane 
              className="hover-bg-change pointer"
              elevation={2}
              paddingTop={20}
              paddingBottom={20}
              paddingRight={15}
              paddingLeft={15}
              marginRight={15}
              marginLeft={15}
              marginBottom={42}
              display="flex"
              flexDirection="column"
            >
              <Pane marginBottom={10}>
                <Heading size={600}>{post.title}</Heading>
              </Pane>
              <Pane marginBottom={10}>
                <Text>{post.date} &#8226; {post.timeToRead} Min Read</Text>
              </Pane>

              <Pane marginBottom={10}>
                <Paragraph>{post.excerpt}</Paragraph>
              </Pane>
              { post.tags &&
                (
                  <Pane marginBottom={10} display="flex" flexWrap="flex">
                    {post.tags.map((tag, index) => (
                      <Badge color="neutral" marginRight={8}>{tag}</Badge>
                    ))}
                  </Pane>
                )
              }
            </Pane>
          </Link>
        ))
      )}
    </Pane>
  )
}
