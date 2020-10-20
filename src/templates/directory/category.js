import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Button, CaretRightIcon } from 'evergreen-ui'
import CardList from '../../components/CardList'
import utils from '../../util/util'
import LinkList from '../../components/LinkList'

export default ({ data, pageContext, location }) => {
  
  const category = {
    area: data.markdownRemark.frontmatter.area,
    title: data.markdownRemark.frontmatter.title,
    links: data.markdownRemark.frontmatter.links,
    thumbnail: data.markdownRemark.frontmatter.thumbnail ? data.markdownRemark.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    methods: pageContext.methods,
    content: data.markdownRemark.html,
    excerpt: data.markdownRemark.excerpt
  }

  category.methods.sort((a, b) => (a.name > b.name) ? 1 : -1)

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
          <Heading color="white" size={900}>Category</Heading>
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
        <Helmet>
          <title>{`${category.title} | ${config.siteTitle}`}</title>
          <meta name="description" content={category.excerpt}  />

          <meta name="og:title" content={`${category.title} | ${config.siteTitle}`} />
          <meta name="og:description" content={category.excerpt} />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content={`${config.siteUrl}${category.thumbnail}`}  />

          <meta name="twitter:title" content={`${category.title} | ${config.siteTitle}`} />
          <meta name="twitter:description" content={category.excerpt} />
          <meta name="twitter:image" content={`${config.siteUrl}${category.thumbnail}`} />
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
            <Link to="/methods/"><Button appearance="minimal" paddingLeft={7} paddingRight={7}>Methods</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Link to={`/methods/area/${category.area}`}><Button appearance="minimal" paddingLeft={7} paddingRight={7}>{utils.decodeKebobCase(category.area)}</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Heading paddingLeft={7} paddingRight={7} size={200}>{category.title}</Heading>
          </Pane>

          <Heading size={800}>{category.title}</Heading>
          <Pane marginBottom={50} dangerouslySetInnerHTML={{ __html: category.content }} />

          { category.links && category.links.length && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Links</Heading>
              <LinkList links={category.links} />
            </Pane>
          )}

          <Heading size={700} marginBottom={30}>Methods</Heading>
          <CardList tasks={category.methods} url_callback={method=>`/method/${method.name}`} />

        </Pane>
      </Pane>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($name: String!) {
    markdownRemark(fields: {type: {eq: "category"}, name: {eq: $name}}) {
      excerpt
      frontmatter {
        area
        title
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