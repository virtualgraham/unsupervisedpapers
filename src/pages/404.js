import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/index'
import config from '../../site-config'
import { Pane, Heading } from 'evergreen-ui'

const NotFoundPage = ({location}) => (
  <Layout location={location} 
    header_bg="/header_bg_papers.svg"
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
        <Heading color="white" size={900}>404 Not Found</Heading>
      </Pane>
    }
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
      <Helmet>
        <title>{`404: Not Found | ${config.siteTitle}`}</title>
        <meta name="og:title" content={`404: Not Found | ${config.siteTitle}`} />
        <meta name="og:url" content={`${config.siteUrl}/404/`} />
        <meta name="twitter:title" content={`404: Not Found | ${config.siteTitle}`} />
      </Helmet>

      <Pane 
        display="flex" 
        flexDirection="column"
        alignItems="center"
      >
        <h1>404 Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Pane>


    </Pane>
  </Layout>
)

export default NotFoundPage
