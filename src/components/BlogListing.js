import React from 'react'
import { Link } from 'gatsby'
import PostListing from '../components/PostListing'
import { Pane, Button, Heading } from 'evergreen-ui'
import util from "../util/util"

export default ({ posts, tags }) => (
    <Pane
        className="blog-columns"
        display="flex"
        marginBottom={35}
    >
        <Pane 
            className="post-column"
            flex={1}>
            <PostListing posts={posts} />
        </Pane>

        <Pane 
            className="tags-column"
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