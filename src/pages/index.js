import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../site-config'
import PaperCardList from '../components/PaperCardList'
import { Pane, Heading, Text, Button, GitPullIcon, majorScale } from 'evergreen-ui'
import util from "../util/util"

export default ({ data, location  }) => {

    const paperCount = data.paperCount.totalCount

    let tasks = data.tasks.group.map(g => ({name: g.fieldValue, title: util.decodeKebobCase(g.fieldValue), count: g.totalCount}))
    tasks.sort((a, b) => (a.count < b.count) ? 1 : -1)
    tasks = tasks.slice(0, 5)

    let methods = data.methods.group.map(g => ({name: g.fieldValue, title: util.decodeKebobCase(g.fieldValue), count: g.totalCount}))
    methods.sort((a, b) => (a.count < b.count) ? 1 : -1)
    methods = methods.slice(0, 5)

    const papers = data.papers.nodes.map(paper_node => ({
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
          marginTop={32}
          marginBottom={96}
          maxWidth={1024}
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          marginLeft="auto"
          marginRight="auto"
        >
          <Pane
            flex={1}
            marginLeft={15}
            marginRight={15}
            marginBottom={56}
            display="flex"
            alignItems="stretch"
          >
            <Link 
              style={{display: "flex", marginRight:"32px", flex: "1"}}
              to="tasks/"
            >
              <Pane
                padding={15}
                elevation={1}
                className="hover-bg-change"
                display="flex"
                flexDirection="column"
              >
                <Pane
                  marginBottom={5}
                >
                  <Heading size={700}>Browse Tasks</Heading>
                </Pane>
                <Pane
                  marginLeft={-5}
                >
                  {tasks.map(task => (
                    <Button 
                      height={24}
                      padding={5}
                      appearance="minimal"
                    >
                      {task.title}
                    </Button>
                  ))}
                  <Text>...</Text>
                </Pane>
              </Pane>
            </Link>

            <Link 
              style={{display: "flex", flex: "1"}}
              to="methods/"
            >
              <Pane
                elevation={1}
                padding={15}
                className="hover-bg-change"
                display="flex"
                flexDirection="column"
              >
                <Pane
                  marginBottom={5}
                >
                  <Heading size={700}>Browse Methods</Heading>
                </Pane>
                <Pane
                  marginLeft={-5}
                >
                  {methods.map(method => (
                    <Button 
                      height={24}
                      padding={5}
                      appearance="minimal"
                    >
                      {method.title}
                    </Button>
                  ))}
                  <Text>...</Text>
                </Pane>
              </Pane>
            </Link>

          </Pane>


          <PaperCardList papers={papers} />
          <Pane
            display="flex"
            justifyContent="center"
          >
            <Link to='search/'><Button>{`Browse all ${paperCount} papers`}</Button></Link>
          </Pane>
        </Pane>
      </Layout>
    )
}

export const query = graphql`
  query IndexQuery {
    papers: allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}, frontmatter: {date: {ne: null}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 30) {
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
    },
    paperCount: allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
      totalCount
    },
    tasks: allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
      group(field: frontmatter___tasks) {
        fieldValue
        totalCount
      }
    },
    methods: allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
      group(field: frontmatter___methods) {
        fieldValue
        totalCount
      }
    }
  }
`