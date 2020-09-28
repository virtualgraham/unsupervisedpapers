import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../layout'
import BlogListing from '../../components/BlogListing'
import config from '../../../site-config'
import { Pane, Heading } from 'evergreen-ui'

const TagTemplate = ({ data, pageContext, location }) => {
  
  const posts = data.allMarkdownRemark.edges.map(post => ({
    slug: post.node.fields.slug,
    excerpt: post.node.excerpt,
    timeToRead: post.node.timeToRead,
    title: post.node.frontmatter.title,
    tags: post.node.frontmatter.tags,
    date: post.node.frontmatter.date,
  }))

  const tags = pageContext.tags

  return (
    <Layout location={location} 
      header_bg="/header_bg_blog.svg"
      header={
        <Pane
          maxWidth={1024}
          className="sub-header"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="auto"
          marginRight="auto"
        >
          <Heading color="white" size={900}>Tag</Heading>
        </Pane>
      }
    >
      <Pane
        is="main"
        marginTop={42}
        marginRight={30}
        marginLeft={30}
        maxWidth={1024}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >

        <Helmet
          title={`Posts tagged as "${pageContext.tag}" | ${config.siteTitle}`}
        />
        
        <BlogListing posts={posts} tags={tags} />

      </Pane>
    </Layout>
  )
}
export default TagTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`
