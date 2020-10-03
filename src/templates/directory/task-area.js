import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Button, CaretRightIcon, Text } from 'evergreen-ui'
import utils from '../../util/util'
import CardList from '../../components/CardList'


export default ({ data, pageContext, location }) => {
  
  const area = pageContext.area
  const tasks = pageContext.tasks
  const task_count = pageContext.task_count
  const paper_count = pageContext.paper_count

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
          <Heading color="white" size={900}>Task Area</Heading>
        </Pane>
      )}
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
        <Helmet>
          <title>{`${utils.decodeKebobCase(area)} | ${config.siteTitle}`}</title>
          <meta name="description" content={`Browse Unsupervised Learning Tasks in ${utils.decodeKebobCase(area)}`} />

          <meta name="og:title" content={`${utils.decodeKebobCase(area)} | ${config.siteTitle}`} />
          <meta name="og:description" content={`Browse Unsupervised Learning Tasks in ${utils.decodeKebobCase(area)}`} />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content={`${config.siteUrl}/tasks.jpg`} />

          <meta name="twitter:title" content={`${utils.decodeKebobCase(area)} | ${config.siteTitle}`} />
          <meta name="twitter:description" content={`Browse Unsupervised Learning Tasks in ${utils.decodeKebobCase(area)}`} />
          <meta name="twitter:image" content={`${config.siteUrl}/tasks.jpg`} />
        </Helmet>

        
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
            <Heading paddingLeft={7} paddingRight={7} size={200}>{utils.decodeKebobCase(area)}</Heading>
          </Pane>

          <Heading size={800} marginBottom={10}>{utils.decodeKebobCase(area)}</Heading>
          
          <Pane marginBottom={25}>
            <Text>{task_count} Tasks</Text> &#8226; <Text>{paper_count} Papers</Text>
          </Pane>

          {tasks.map(task => {
            
            const subTasks = [{
              name: task.name,
              title: task.title,
              thumbnail: task.thumbnail,
              paper_count: task.paper_count,
            }].concat(task.sub_tasks)

            return (
              <Pane
                display="flex"
                flexDirection="column"
              >
                <Heading size={700} marginBottom={25}>{task.title}</Heading>
                <CardList 
                  tasks={subTasks} 
                  url_callback={subTask=>`/task/${subTask.name}`} 
                  max={5} 
                  more_msg={`See all ${task.sub_tasks.length} sub-tasks...`} 
                  more_url={`/tasks/area/${task.area}/${task.name}`}  
                />
              </Pane>
            )
          
          })}

          
        </Pane>
      </Pane>
    </Layout>
  )
}
