const urljoin = require("url-join");
const config = require("./site-config");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs",
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/${config.useDummyData ? 'dummy_data' : 'data'}/`
      }
    },

   
    // {
    //   resolve: `gatsby-plugin-json-output`,
    //   options: {
    //     siteUrl: config.siteUrl,
    //     graphQLQuery: `
    //       {
    //         allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
    //           nodes {
    //             frontmatter {
    //               title
    //               date
    //               authors
    //               abstract
    //               thumbnail {
    //                 publicURL
    //               }
    //               links {
    //                 url
    //                 type
    //                 title
    //               }
    //               tasks
    //               methods
    //             }
    //             fields {
    //               name
    //               slug
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serializeFeed: results => results.data.allMarkdownRemark.nodes.map(paper_node => ({
    //       name: paper_node.fields.name,
    //       slug: paper_node.fields.slug,
    //       title: paper_node.frontmatter.title,
    //       date: paper_node.frontmatter.date,
    //       authors: paper_node.frontmatter.authors,
    //       abstract: paper_node.frontmatter.abstract,
    //       thumbnail: paper_node.frontmatter.thumbnail.publicURL,
    //       links: paper_node.frontmatter.links,
    //       tasks: paper_node.frontmatter.tasks,
    //       methods: paper_node.frontmatter.methods,
    //     })),
    //     nodesPerFeedFile: 1000000,
    //   }
    // }
  ]
};

