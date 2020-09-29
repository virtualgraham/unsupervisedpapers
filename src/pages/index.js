import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../site-config'
import PaperCardList from '../components/PaperCardList'
import { Pane, Heading, Text, Button, GitPullIcon, majorScale } from 'evergreen-ui'
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
            maxWidth={1024}
            className="sub-header"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginLeft="auto"
            marginRight="auto"
          >
            <Heading color="white" size={900}>Latest Papers</Heading>
          </Pane>
        )}
      >
        <Pane
          is="main"
          marginTop={42}
          marginBottom={96}
          maxWidth={1024}
          display="flex"
          marginLeft="auto"
          marginRight="auto"
        >
          <Helmet title={config.siteTitle} />
          <SEO />
          <PaperCardList papers={papers} />
        </Pane>
      </Layout>
    )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 30) {
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