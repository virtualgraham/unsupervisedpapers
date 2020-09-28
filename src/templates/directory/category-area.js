import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout'
import config from '../../../site-config'
import { Pane, Heading, Button, Text, CaretRightIcon } from 'evergreen-ui'
import CardList from '../../components/CardList'
import utils from '../../util/util'

export default ({ data, pageContext, location }) => {
  
  const area = pageContext.area
  const categories = pageContext.categories
  const method_count = pageContext.method_count
  const paper_count = pageContext.paper_count
  const category_methods = {}
  const category_method_counts = {}

  console.log('categories', categories)

  categories.forEach(category => {
    category_method_counts[category.name] = category.methods.length
    category.methods.sort((a, b) => (a.paper_count < b.paper_count) ? 1 : -1)
    category_methods[category.name] = category.methods.slice(0, 10)
    
  })

  return (
    <Layout location={location} 
      header_bg="/header_bg_methods.svg"
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
          <Heading color="white" size={900}>Category Area</Heading>
        </Pane>
      }
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
        <Helmet
          title={`${config.siteTitle}`}
        />
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
            <Heading paddingLeft={7} paddingRight={7} size={200}>{area}</Heading>
          </Pane>

          <Heading size={800} marginBottom={10}>{utils.decodeKebobCase(area)}</Heading>

          <Pane marginBottom={25}>
            <Text>{method_count} Methods</Text> &#8226; <Text>{paper_count} Papers</Text>
          </Pane>

          { categories.map(category => (

            <Pane 
              key={category.name}
              display="flex" 
              flexDirection="column"
              marginBottom={45}
            >
              <Heading size={700} marginBottom={25}>{category.title}</Heading>
              <CardList tasks={category_methods[category.name]} max={5} more_msg={`See all ${category_methods[category.name].length} methods`} more_url={`/methods/category/${category.name}`} url_callback={method=>`/method/${method.name}`}/>
            </Pane>

          ))}
        </Pane>


      </Pane>
    </Layout>
  )
}