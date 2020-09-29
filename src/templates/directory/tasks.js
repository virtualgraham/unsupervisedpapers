import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../layout'
import SEO from '../../components/SEO'
import CardList from '../../components/CardList'
import config from '../../../site-config'
import { Pane, Text, Heading } from 'evergreen-ui'
import utils from '../../util/util'

export default ({ data, pageContext, location }) => {


  const area_tasks = {}
  const area_task_counts = {}

  Object.keys(pageContext.area_tasks).forEach(area => {
    const ctx_area_tasks = pageContext.area_tasks[area]
    area_task_counts[area] = ctx_area_tasks.length
    ctx_area_tasks.sort((a, b) => (a.paper_count < b.paper_count) ? 1 : -1)
    area_tasks[area] = ctx_area_tasks.slice(0, 10)

  })

  return (
    <Layout 
      location={location}
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
          <Heading color="white" size={900}>Tasks</Heading>
        </Pane>
      )}
    >

      <Pane
        is="main"
        marginTop={45}
        marginBottom={45}
        maxWidth={1024}
        display="flex"
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
      >

        <Helmet title={config.siteTitle} />
        <SEO />

        <Pane
          marginRight={15}
          marginLeft={15}
          display="flex"
          flexDirection="column"
        >
          {Object.keys(area_tasks).map((area, i) => (

            <Pane
              key={i}
              display="flex"
              flexDirection="column"
              marginBottom={45}
            >
              <Heading size={700} marginBottom={25}>{utils.decodeKebobCase(area)}</Heading>
              <CardList tasks={area_tasks[area]} max={5} more_msg={`See all ${area_task_counts[area]} tasks...`} more_url={`/tasks/area/${area}`} url_callback={task => `/task/${task.name}`} />
            </Pane>

          ))}
        </Pane>

      </Pane>
    </Layout>
  )
}
