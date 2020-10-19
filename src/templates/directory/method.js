import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Text, Button, CaretRightIcon, LinkIcon } from 'evergreen-ui'
import PapersTable from '../../components/PapersTable'
import CardList from '../../components/CardList'
import PaperCard from '../../components/PaperCard'
import utils from '../../util/util'
import LinkList from '../../components/LinkList'

export default ({ data, pageContext, location }) => {

  const method = {
    area: data.markdownRemark.frontmatter.area,
    title: data.markdownRemark.frontmatter.title,
    year: data.markdownRemark.frontmatter.title,
    links: data.markdownRemark.frontmatter.links,
    thumbnail: data.markdownRemark.frontmatter.thumbnail ? data.markdownRemark.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    papers: pageContext.papers,
    tasks: pageContext.tasks,
    introduced_by: pageContext.introduced_by,
    components: pageContext.components,
    categories: pageContext.categories,
    content: data.markdownRemark.html,
    excerpt: data.markdownRemark.excerpt
  }

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
          <Heading color="white" size={900}>Method</Heading>
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
          <title>{`${method.title} | ${config.siteTitle}`}</title>
          <meta name="description" content={method.excerpt} />

          <meta name="og:title" content={`${method.title} | ${config.siteTitle}`} />
          <meta name="og:description" content={method.excerpt} />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content={`${config.siteUrl}${method.thumbnail}`} />

          <meta name="twitter:title" content={`${method.title} | ${config.siteTitle}`} />
          <meta name="twitter:description" content={method.excerpt} />
          <meta name="twitter:image" content={`${config.siteUrl}${method.thumbnail}`} />
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
            <Link to={`/methods/area/${method.area}`}><Button appearance="minimal" paddingLeft={7} paddingRight={7}>{utils.decodeKebobCase(method.area)}</Button></Link>
            <CaretRightIcon color="muted" marginLeft={-3} marginRight={-3} />
            <Heading paddingLeft={7} paddingRight={7} size={200}>{method.title}</Heading>
          </Pane>
          

          <Heading size={800} marginBottom={25}>{method.title}</Heading>

          <Pane
            className="entry-columns"
            display="flex"
            marginBottom={35}
          >
          
            <Pane className="entry-left-column" flex={1} dangerouslySetInnerHTML={{ __html: method.content }} />

            <Pane className="entry-right-column">
              <img src={method.thumbnail} alt="thumbnail" />
            </Pane>

          </Pane>

          { method.introduced_by &&
            (
              <Pane
                display="flex"
                flexDirection="column"
                marginBottom={35}
              >
                <Heading size={700} marginBottom={30}>Introduced By</Heading>
                <PaperCard paper={method.introduced_by} compact />
              </Pane>  
            ) 
          }

          { method.links && method.links.length > 0 && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Links</Heading>
              <LinkList links={method.links} />
            </Pane>
          )}

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={30}>Papers</Heading>
            <PapersTable papers={method.papers} />
          </Pane>     

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={30}>Tasks</Heading>
            <CardList tasks={method.tasks} url_callback={task=>`/task/${task.name}`}/>
          </Pane>

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={30}>Components</Heading>
            <CardList tasks={method.components} url_callback={component=>`/method/${component.name}`}/>
          </Pane>

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={30}>Categories</Heading>

            <Pane 
              display="flex"
              flexDirection="column"
            >
              {method.categories.map((category, index) => (
                <Pane 
                  key={index}
                  display="flex"
                  flexDirection="column"
                >
                  <Link to={`/methods/category/${category.name}`}><Button>{category.title}</Button></Link>
                </Pane>
              ))}
            </Pane>
          </Pane>

        </Pane>

      </Pane>
    </Layout>
  )
}

export const query = graphql`
  query MethodQuery($name: String!) {
    markdownRemark(fields: {type: {eq: "method"}, name: {eq: $name}}) {
      excerpt
      frontmatter {
        area
        title
        year
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