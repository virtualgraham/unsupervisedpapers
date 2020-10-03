import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../layout'
import BlogListing from '../components/BlogListing'
import SEO from '../components/SEO'
import config from '../../site-config'
import { Pane, Heading, Button } from 'evergreen-ui'
import util from "../util/util"

export default ({ data, location  }) => {
  
  const posts = data.allMarkdownRemark.edges.map(post => ({
    slug: post.node.fields.slug,
    excerpt: post.node.excerpt,
    timeToRead: post.node.timeToRead,
    title: post.node.frontmatter.title,
    tags: post.node.frontmatter.tags,
    date: post.node.frontmatter.date,
  }))

  const tags = data.allMarkdownRemark.distinct

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
          <Heading color="white" size={900}>Blog</Heading>
        </Pane>
      }
    >
      <Pane
        is="main"
        marginTop={45}
        marginBottom={45}
        maxWidth={1024}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <Helmet>
          <title>{`Blog | ${config.siteTitle}`}</title>
          <meta name="description" content="Read posts from the Unsupervised Papers blog"  />

          <meta name="og:title" content={`Blog | ${config.siteTitle}`} />
          <meta name="og:description" content="Read posts from the Unsupervised Papers blog" />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content="/blog.jpg" />

          <meta name="twitter:title" content={`Blog | ${config.siteTitle}`} />
          <meta name="twitter:description" content="Read posts from the Unsupervised Papers blog" />
          <meta name="twitter:image" content="/blog.jpg" />
        </Helmet>

        <BlogListing posts={posts} tags={tags} />
        
      </Pane>

    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 2000, filter: {fields: {type: {eq: "post"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
      distinct(field: frontmatter___tags)
    }
  }
`
