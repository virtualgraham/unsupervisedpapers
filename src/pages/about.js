import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../site-config'
import { Pane, Paragraph, Heading } from 'evergreen-ui'

export default ({location}) => (
  <Layout location={location} 
    header_bg="/header_bg_about.svg"
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
        <Heading color="white" size={900}>About</Heading>
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
      <Helmet title={`About | ${config.siteTitle}`} />
      <SEO />

      <Pane 
        marginRight={15}
        marginLeft={15}
        display="flex" 
        flexDirection="column"
      >
          <Heading size={900}>What is UnsupervisedPapers.com</Heading>
          <Paragraph size={500} marginTop="1em">UnsupervisedPapers.com is an open-source directory of papers on unsupervised machine learning and related topics with links to resources such as code, websites and videos.</Paragraph>
      </Pane>
    </Pane>
  </Layout>
)
