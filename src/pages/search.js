import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Pane, Heading } from 'evergreen-ui'
import Layout from '../layout'
import Search from '../components/Search'
import SearchInputUrlQuery from '../components/SearchInputUrlQuery'
import config from '../../site-config'

export default ({ data, location  }) => {

  const papers = data.allMarkdownRemark.nodes.map(paper_node => ({
    name: paper_node.fields.name,
    slug: paper_node.fields.slug,
    title: paper_node.frontmatter.title,
    date: paper_node.frontmatter.date,
    authors: paper_node.frontmatter.authors,
    abstract: paper_node.frontmatter.abstract,
    thumbnail: paper_node.frontmatter.thumbnail ? paper_node.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    supervision: paper_node.frontmatter.supervision,
    links: paper_node.frontmatter.links,
    tasks: paper_node.frontmatter.tasks,
    methods: paper_node.frontmatter.methods,
  }))

  return (
    <Layout 
      location={location} 
      header_bg="/header_bg_papers.svg"
      header={(
        <Pane
          className="sub-header"
          maxWidth={1024}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="auto"
          marginRight="auto"
        >
          <Heading color="white" size={900}>Search</Heading>
        </Pane>
      )}
      search_input={(    
        <SearchInputUrlQuery />
      )}
    >

      <Helmet>
        <title>{`Search | ${config.siteTitle}`}</title>
        <meta name="description" content="Search Unsupervised Machine Learning Papers"  />

        <meta name="og:title" content={`Search | ${config.siteTitle}`} />
        <meta name="og:description" content="Search Unsupervised Machine Learning Papers" />
        <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
        <meta name="og:image" content="/search.jpg" />

        <meta name="twitter:title" content={`Search | ${config.siteTitle}`} />
        <meta name="twitter:description" content="Search Unsupervised Machine Learning Papers" />
        <meta name="twitter:image" content="/search.jpg" />

        <html className="search" lang="en" />
      </Helmet>

      <Pane 
        height="calc(100vh - 65px - 65px)"
        diplay="flex"
        flexDirection="column"
      >
        <Search 
          papers={papers} 
        />
      </Pane>
    </Layout>
  )
}

export const query = graphql`
  query SearchQuery {
    allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
          authors
          abstract
          thumbnail {
            publicURL
          }
          links {
            url
            type
            title
          }
          supervision
          tasks
          methods
        }
        fields {
          name
          slug
        }
      }
    }
  }
`