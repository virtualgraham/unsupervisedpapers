import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link  } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Text, Button } from 'evergreen-ui'
import CardList from '../../components/CardList'
import moment from 'moment';
import LinkList from '../../components/LinkList'
import utils from '../../util/util'

export default ({ data, pageContext, location }) => {
  
  const paper = {
    title: data.markdownRemark.frontmatter.title,
    abstract: data.markdownRemark.frontmatter.abstract,
    date: data.markdownRemark.frontmatter.date,
    authors: data.markdownRemark.frontmatter.authors,
    links: data.markdownRemark.frontmatter.links,
    linksDict: utils.linkListToDict(data.markdownRemark.frontmatter.links),
    thumbnail: data.markdownRemark.frontmatter.thumbnail ? data.markdownRemark.frontmatter.thumbnail.publicURL : config.defaultThumbnail,
    card: data.markdownRemark.frontmatter.card ? data.markdownRemark.frontmatter.card.publicURL : config.defaultThumbnail,
    supervision: data.markdownRemark.frontmatter.supervision,
    tasks: pageContext.tasks,
    methods: pageContext.methods,
    content: data.markdownRemark.html,
    excerpt: data.markdownRemark.excerpt
  }

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
          <Heading color="white" size={900}>Paper</Heading>
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
          <title>{`${paper.title} | ${config.siteTitle}`}</title>
          <meta name="description" content={utils.truncate(paper.abstract, 350)} />

          <meta name="og:title" content={`${paper.title} | ${config.siteTitle}`} />
          <meta name="og:description" content={utils.truncate(paper.abstract, 350)}  />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
          <meta name="og:image" content={`${config.siteUrl}${paper.card}`} />

          <meta name="twitter:title" content={`${paper.title} | ${config.siteTitle}`} />
          <meta name="twitter:description" content={utils.truncate(paper.abstract, 350)} />
          <meta name="twitter:image" content={`${config.siteUrl}${paper.card}`} />
        </Helmet>
          
        <Pane 
          marginRight={15}
          marginLeft={15}
          display="flex" 
          flexDirection="column"
        >
          <Pane
            display="flex" 
            flexDirection="column"
            marginBottom={25}
          >
            <Heading size={800}>{paper.title}</Heading>
            <Pane>
              <Text>{moment(paper.date).format('D MMM YYYY')}</Text>
              {paper.authors.map(author => (
                <>
                  <Text> &bull; </Text>
                  <Text>{author}</Text>
                </>
              ))}
            </Pane>

          </Pane>
          
          <Pane
            display="flex"
          >
            <Pane
              flex={1}
              marginRight={25}
            >
              <Link to={paper.linksDict.pdf ? paper.linksDict.pdf[0].url : '#'}>
                <Pane 
                  className="paper-thumbnail" 
                >
                  <img 
                    src={paper.thumbnail} 
                    alt="thumbnail" 
                  />
                </Pane>
              </Link>

              <Heading>Abstract</Heading>
              <Pane>
                <p>{paper.abstract}</p>
              </Pane>

              { paper.supervision.length > 0 && (
                <>
                  <Heading>Supervision</Heading>
                  <Pane 
                    display="flex"
                    marginLeft={-15}
                    marginBottom={25}
                  >
                    {paper.supervision.map((supervision, index) => (
                      <Button appearance="minimal" key={index}>{utils.decodeKebobCase(supervision)}</Button>
                    ))}
                  </Pane>
                </>
              )}

              { paper.content.trim().length > 0 && (
                <>
                  <Heading marginTop={15}>Discussion</Heading>
                  <Pane dangerouslySetInnerHTML={{ __html: paper.content }} />
                </>
              )}

            </Pane>
          </Pane>

          <Pane
            display="flex"
            flexDirection="column"
            marginBottom={35}
          >
            <Heading size={700} marginBottom={15}>Links</Heading>
            <LinkList links={paper.links} />
          </Pane>

          { paper.tasks.length > 0 && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Tasks</Heading>
              <CardList tasks={paper.tasks} url_callback={task=>`/task/${task.name}`} />
            </Pane>
          )}

          { paper.methods.length > 0 && (
            <Pane
              display="flex"
              flexDirection="column"
              marginBottom={35}
            >
              <Heading size={700} marginBottom={30}>Methods</Heading>
              <CardList tasks={paper.methods} url_callback={method=>`/method/${method.name}`} />
            </Pane>
          )}

        </Pane>



      </Pane>
    </Layout>
  )
}

export const query = graphql`
  query PaperQuery($name: String!) {
    markdownRemark(fields: {type: {eq: "paper"}, name: {eq: $name }}) {
      excerpt
      frontmatter {
        title
        abstract
        date
        authors
        links {
          url
          icon
          resource
          title
          description
        }
        thumbnail {
          publicURL
        }
        card {
          publicURL
        }
        supervision
        tasks
        methods
      }
      html
    }
  }
`