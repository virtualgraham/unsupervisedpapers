const config = {
  siteTitle: 'Unsupervised Papers', // Site title.
  siteTitleShort: 'Unsupervised Papers', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Unsupervised Papers', // Alternative site title for SEO.
  siteLogo: '/unsupervisedpapers.svg', // Logo used for SEO and manifest.
  siteUrl: 'http://unsupervisedpapers.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'UnsupervisedPapers.com is an open-source directory of papers on unsupervised machine learning and related topics with links to resources such as code, websites and videos. ', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: '', // Username to display in the author segment.
  userEmail: '', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: '', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: '', // User location to display in the author segment.
  userAvatar: '', // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  // themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  // backgroundColor: 'red' // Used for setting manifest background color.
  defaultThumbnail: "/thumbnail.png",
  defaultFeatureImage: "/featureImage.png",
  useDummyData: false,
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
