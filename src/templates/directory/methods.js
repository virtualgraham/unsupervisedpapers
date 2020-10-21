import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout'
import SEO from '../../components/SEO'
import config from '../../../site-config'
import { Pane, Heading } from 'evergreen-ui'
import utils from '../../util/util'
import CardList from '../../components/CardList'

export default  ({ data, pageContext, location }) => {
  
  const area_categories = {}
  const area_category_counts = {}

  Object.keys(pageContext.area_categories).forEach(area => {
    const ctx_area_categories = pageContext.area_categories[area]
    area_category_counts[area] = ctx_area_categories.length
    ctx_area_categories.sort((a, b) => (a.paper_count < b.paper_count) ? 1 : -1)
    area_categories[area] = ctx_area_categories.slice(0, 10)
    
  })

  return (
    <Layout 
      location={location} 
      header_bg="/header_bg_methods.svg"
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
          <Heading color="white" size={900}>Unsupervised Methods</Heading>
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
        <Helmet>
          <title>{`Unsupervised Methods | ${config.siteTitle}`}</title>
          <meta name="description" content="Browse Unsupervised Learning Methods" />

          <meta name="og:title" content={`Methods | ${config.siteTitle}`} />
          <meta name="og:description" content="Browse Unsupervised Learning Methods" />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content={`${config.siteUrl}/methods.jpg`} />

          <meta name="twitter:title" content={`Unsupervised Methods | ${config.siteTitle}`} />
          <meta name="twitter:description" content="Browse Unsupervised Learning Methods" />
          <meta name="twitter:image" content={`${config.siteUrl}/methods.jpg`} />
        </Helmet>

        <Pane 
          marginRight={15}
          marginLeft={15}
          display="flex" 
          flexDirection="column"
        >
          { Object.keys(area_categories).map((area, i) => (

            <Pane 
              key={i}
              display="flex" 
              flexDirection="column"
              marginBottom={45}
            >
              <Heading size={700} marginBottom={25}>{utils.decodeKebobCase(area)}</Heading>
              <CardList tasks={area_categories[area]} max={5} more_msg={`See all ${area_categories[area].length} categories ...`} more_url={`/methods/area/${area}`} url_callback={category=>`/methods/category/${category.name}`}/>
            </Pane>

          ))}
        </Pane>
          
      </Pane>
    </Layout>
  )
}