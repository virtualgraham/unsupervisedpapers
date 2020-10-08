import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../site-config'
import PaperCardList from '../components/PaperCardList'
import TasksHeaderCard from '../components/TasksHeaderCard'
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

    const papers = data.papers.nodes.map(paperNode => ({
      name: paperNode.fields.name,
      slug: paperNode.fields.slug,
      title: paperNode.frontmatter.title,
      date: paperNode.frontmatter.date,
      authors: paperNode.frontmatter.authors,
      abstract: paperNode.frontmatter.abstract,
      thumbnail: paperNode.frontmatter.thumbnail ? paperNode.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
      supervision: paperNode.frontmatter.supervision,
      links: paperNode.frontmatter.links,
      tasks: paperNode.frontmatter.tasks,
      methods: paperNode.frontmatter.methods,
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
            <div color="white" className="explore_header">Explore Unsupervised Learning</div>
          </Pane>
        )}
      >
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          is="main"
        >

          <Pane
            background="tint1"
            flexDirection="column"
            display="flex"
            alignItems="stretch"
          >

            <Pane className="browse_tasks_outer_header">
              <Pane className="browse_tasks_inner_header">
                <TasksHeaderCard tasks={tasks} type="task" />
                <TasksHeaderCard tasks={methods} type="method" />
              </Pane>
            </Pane>
          </Pane>
          


          <Pane 
            marginLeft="auto"
            marginRight="auto"
            marginBottom={96}
            marginTop={35}
            maxWidth={1024}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
          >

            <Pane
              paddingBottom={25}
              maxWidth={1024}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginLeft="auto"
              marginRight="auto"
            >
              <Heading size={700}>Latest Papers</Heading>
            </Pane>

            <PaperCardList papers={papers} />
            <Pane
              display="flex"
              justifyContent="center"
            >
              <Link to='search/'><Button>{`Browse all ${paperCount} papers`}</Button></Link>
            </Pane>
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