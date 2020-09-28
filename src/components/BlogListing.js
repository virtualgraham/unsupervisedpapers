import React from 'react'
import { Link } from 'gatsby'
import PostListing from '../components/PostListing'
import { Pane, Button, Heading } from 'evergreen-ui'
import util from "../util/util"

export default ({ posts, tags }) => (
    <Pane
        marginRight={15}
        marginLeft={15}
        display="flex"
        marginBottom={35}
    >
        <Pane flex={1} marginRight={25}>
            <PostListing posts={posts} />
        </Pane>

        <Pane 
            width={150} 
        >

            <Pane 
                width="100%"
                background="tint1"
                padding={15}
            >
                <Pane
                display="flex"
                flexDirection="column"
                >
                    <Heading marginBottom={15} size={500}>Tags</Heading>
                    <Pane 
                        marginLeft={-10}
                        display="flex"
                        flexWrap="wrap"
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        {tags.map((tag, index) => (
                        <Link to={`/blog/tag/${util.encodeKebobCase(tag)}`}><Button key={tag} marginBottom={10} marginLeft={10}>{tag}</Button></Link>
                        ))}
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    </Pane>
)