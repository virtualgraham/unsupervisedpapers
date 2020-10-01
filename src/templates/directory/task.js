import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Text, Strong, Button, CaretRightIcon } from 'evergreen-ui'
import CardList from '../../components/CardList'
import PapersTable from '../../components/PapersTable'
import utils from '../../util/util'
import LinkList from '../../components/LinkList'

export default ({ data, pageContext, location }) => {
  
  const task = {
    area: data.markdownRemark.frontmatter.area,
    title: data.markdownRemark.frontmatter.title,
    links: data.markdownRemark.frontmatter.links,
    thumbnail: data.markdownRemark.frontmatter.thumbnail ? data.markdownRemark.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    papers: pageContext.papers,
    filtered_papers: pageContext.papers,
    sub_tasks: pageContext.sub_tasks,
    content: data.markdownRemark.html,
  }

  return (
    <Layout location={location} 
      header_bg="/header_bg_tasks.svg"
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
          <Heading color="white" size={900}>Task</Heading>
        </Pane>
      )}
    >
      <Pane
        is="main"
        marginTop={15}
        marginBottom={45}
        maxWidth={1024}
        display="flex"
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
      >
        <Helmet
          title={`${config.siteTitle}`}
        />


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
            <Heading paddingLeft={7} paddingRight={7} size={200}>{task.title}</Heading>
          </Pane>
          

          <Heading size={800} marginBottom={10}>{task.title}</Heading>
          <Pane marginBottom={25}>
            <Text>{utils.decodeKebobCase(task.area)}</Text> &#8226; <Text>{task.papers.length} Papers</Text>
          </Pane>
          <Pane
            className="entry-columns"
            display="flex"
            marginBottom={35}
          >
            <Pane className="entry-left-column" flex={1} dangerouslySetInnerHTML={{ __html: task.content }} />
            <Pane className="entry-right-column">
              <img src={task.thumbnail} alt="thumbnail" />
            </Pane>
          </Pane>

          { task.links && task.links.length && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Links</Heading>
              <LinkList links={task.links} />
            </Pane>
          )}

          { task.sub_tasks.length > 0 && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Sub-Tasks</Heading>
              <CardList 
                tasks={task.sub_tasks} 
                url_callback={subTask =>`/task/${subTask.name}`} 
                max={5} 
                more_msg={`See all ${task.sub_tasks.length} sub-tasks...`} 
                more_url={`/tasks/area/${task.area}/${task.name}`} 
              />
            </Pane>
          )}

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={30}>Papers</Heading>
            <PapersTable papers={task.papers} style={{height: "350px"}} />
          </Pane>          
        </Pane>
      </Pane>
    </Layout>
  )
}


export const query = graphql`
  query TaskQuery($name: String!) {
    markdownRemark(fields: {type: {eq: "task"}, name: {eq: $name}}) {
      frontmatter {
        area
        title
        parent_task
        links {
          title
          type
          url
        }
        thumbnail {
          publicURL
        }
      }
      html
    }
  }
`