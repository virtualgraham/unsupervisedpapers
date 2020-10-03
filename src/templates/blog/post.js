import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Pane, Heading, Button, ArrowLeftIcon, ArrowRightIcon, Badge, Text } from 'evergreen-ui'
import Layout from '../../layout'
import config from '../../../site-config'
import util from "../../util/util"
import moment from 'moment';

export default ({ data, pageContext, location }) => {
 
 
  const { nexttitle, nextslug, prevtitle, prevslug } = pageContext
  
  const post = {
    html: data.markdownRemark.html,
    timeToRead: data.markdownRemark.timeToRead,
    excerpt: data.markdownRemark.excerpt,
    title: data.markdownRemark.frontmatter.title,
    date: data.markdownRemark.frontmatter.date,
    tags: data.markdownRemark.frontmatter.tags,
    slug: data.markdownRemark.frontmatter.slug,
    featureImage: data.markdownRemark.frontmatter.featureImage ? data.markdownRemark.frontmatter.featureImage.publicURL : config.defaultFeatureImage,
  }

  return (
    <Layout 
      location={location} 
      header_bg="/header_bg_blog.svg"
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
          <Heading color="white" size={900}>Post</Heading>
        </Pane>
      )}
    >
      <Pane
        is="main"
        marginTop={45}
        marginBottom={45}
        maxWidth={1024}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >

        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <meta name="description" content={post.excerpt} />

          <meta name="og:title" content={`${post.title} | ${config.siteTitle}`} />
          <meta name="og:description" content={post.excerpt} />
          <meta name="og:image" content={`${config.siteUrl}${post.featureImage}`} />
          <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />

          <meta name="twitter:title" content={`${post.title} | ${config.siteTitle}`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={`${config.siteUrl}${post.featureImage}`} />
        </Helmet>


        <Pane 
          marginRight={15}
          marginLeft={15}
          display="flex" 
          flexDirection="column"
        >
          <Heading size={800} marginBottom={25}>{post.title}</Heading>

          <Pane>
            <Text>{moment(post.date).format('D MMM YYYY')} &mdash; {post.timeToRead} Min Read{' '}</Text>
          </Pane>

          <Pane>
            { post.tags &&
              (
              <Pane marginBottom={10} display="flex" flexWrap="flex">
                {post.tags.map((tag, index) => (
                  <Link to={`/tags/${util.encodeKebobCase(tag)}`} key={index}><Badge color="neutral" marginRight={8}>{tag}</Badge></Link>
                ))}
              </Pane>
              )
            }
          </Pane>

          <Pane>
            <div className="raw-html" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Pane>

          <Pane display="flex">

            <Link to={prevslug} rel="prev">
              <Button iconBefore={ArrowLeftIcon}>{prevtitle}</Button>
            </Link>
            <div style={{flex:"1"}} />
            <Link to={nextslug} rel="next">
              <Button iconAfter={ArrowRightIcon}>{nexttitle}</Button>
            </Link>

          </Pane>

        </Pane>
      </Pane>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        tags
        featureImage {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`
