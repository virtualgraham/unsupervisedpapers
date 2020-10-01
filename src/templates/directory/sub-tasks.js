import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link  } from 'gatsby'
import Layout from '../../layout'
import SEO from '../../components/SEO'
import config from '../../../site-config'
import { Pane, Heading, Button, CaretRightIcon } from 'evergreen-ui'
import CardList from '../../components/CardList'
import utils from '../../util/util'

export default ({ data, pageContext, location  }) => {
  
  const task = {
    area: data.markdownRemark.frontmatter.area,
    title: data.markdownRemark.frontmatter.title,
    thumbnail: data.markdownRemark.frontmatter.thumbnail ? data.markdownRemark.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    name: data.markdownRemark.fields.name,
    sub_tasks: pageContext.sub_tasks,
  }

  console.log('sub_tasks', task.sub_tasks)

  return (
    <Layout location={location} 
      header_bg="/header_bg_tasks.svg"
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
          <Heading color="white" size={900}>Sub-Tasks</Heading>
        </Pane>
      }
    >
      <Pane
        is="main"
        marginTop={15}
        marginBottom={90}
        maxWidth={1024}
        display="flex"
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
      >
        <Helmet title={`${task.title} | ${config.siteTitle}`} />
        <SEO />
        <Pane 
          marginRight={15}
          marginLeft={15}
          display="flex"
          flexDirection="column"
        >
          <Pane 
            marginLeft={-7}
            marginBottom={25} 
            display="flex"
            alignItems="center"
          >
            <Link to="/tasks/"><Button appearance="minimal" paddingLeft={7} paddingRight={7}>Tasks</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Link to={`/tasks/area/${task.area}`}><Button appearance="minimal" paddingLeft={7} paddingRight={7}>{utils.decodeKebobCase(task.area)}</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Link to={`/task/${task.name}`}><Button appearance="minimal" paddingLeft={7} paddingRight={7}>{utils.decodeKebobCase(task.title)}</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Heading paddingLeft={7} paddingRight={7} size={200}>Sub-tasks</Heading>
          </Pane>

          <Heading size={700} marginBottom={25}>{task.title}</Heading>
          <CardList tasks={task.sub_tasks} url_callback={task=>`/task/${task.name}`}/>
        </Pane>
      </Pane>
    </Layout>
  )
}

export const query = graphql`
  query TaskSummaryQuery($name: String!) {
    markdownRemark(fields: {type: {eq: "task"}, name: {eq: $name}}) {
      frontmatter {
        area
        title
        parent_task
        thumbnail {
          publicURL
        }
      }
      fields {
        name
      }
    }
  }
`