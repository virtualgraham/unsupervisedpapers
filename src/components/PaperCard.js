import React from 'react'
import { Link, navigate } from 'gatsby'
import { Pane, Text, Strong, Heading, Button } from 'evergreen-ui'
import Highlighter from "react-highlight-words"
import moment from 'moment';
import util from "../util/util"
import LinkIcon from "./LinkIcon"


export default ({ paper, compact=false, searchWords=[] }) => {
  return (
    <Pane
      className={compact?"hover-bg-change pointer paper-card-compact":"hover-bg-change pointer paper-card-full"}
      elevation={2}
      onClick={() => navigate(paper.slug)}
    >
      <Link onClick={e=>e.stopPropagation()} style={{ display: "contents" }} to={paper.slug} key={paper.name}>
        <Pane 
          className={compact?"paper-card-img-pane-compact":"paper-card-img-pane-full"}
        >
          <img style={{ width:"100%", height:"100%", objectFit:"contain" }} src={paper.thumbnail} alt="thumbnail" />
        </Pane>
      </Link>
      <Pane
        paddingLeft={15}
        paddingRight={15}
        display="flex"
        flexDirection="column"
        flex={1}
      >
        <Link onClick={e=>e.stopPropagation()} style={{ display: "contents" }} to={paper.slug} key={paper.name}>
          <Pane marginBottom={3} marginTop={-4}>
            <Heading size={600}>
              { searchWords.length > 0 ?
                (
                  <Highlighter
                    highlightClassName="search-highlight"
                    searchWords={searchWords}
                    textToHighlight={paper.title}
                  />
                ) : paper.title
              }
            </Heading>
          </Pane>
        </Link>
        <Pane marginBottom={7}>
          <Text fontSize="13px">{moment(paper.date).format('D MMM YYYY')}</Text>
          {paper.authors.map((author, idx) => (
            <Text key={idx}>
              <Text> &bull; </Text>
              <Text fontSize="13px">
                { searchWords.length > 0 ?
                  (
                    <Highlighter
                      highlightClassName="search-highlight"
                      searchWords={searchWords}
                      textToHighlight={author}
                    />
                  ) : author
                }
              </Text>
            </Text>
          ))}
        </Pane>
        { !compact && (
          <Pane marginBottom={5} marginLeft={-3}>
            {/* {paper.supervision.map((supervision, index) => (
              <Button height={24} marginTop={-5} marginLeft={-8} appearance="minimal" wordSpacing={0.125} key={index}>{util.decodeKebobCase(supervision)}</Button>
            ))} */}
            {paper.tasks.map((task, idx) => (
              <Link key={idx} to={`/task/${task}`} onClick={e => e.stopPropagation()}><Button height={24} marginTop={-5} marginLeft={-8} appearance="minimal" wordSpacing={0.125}>{util.decodeKebobCase(task)}</Button></Link>
            ))}
          </Pane>
        )}
        { !compact && (
          <Pane
            lineHeight="1.0em"
            marginBottom={7}
          >
            <Text fontSize="13px">
              { searchWords.length > 0 ?
                (
                  <Highlighter
                    highlightClassName="search-highlight"
                    searchWords={searchWords}
                    textToHighlight={util.truncate(paper.abstract, 350)}
                  />
                ) : util.truncate(paper.abstract, 350)
              }
            </Text>
          </Pane>
        )}
        <Pane display="flex" flexWrap="wrap">
          {paper.links.slice(0, 5).map((link, index) => {            
            return (
              <a key={index} onClick={e=>e.stopPropagation()} href={link.url} style={{marginLeft: "-10px", marginTop: "5px", marginRight: "10px"}}>
                <Button 
                  padding={10}
                  appearance="minimal"
                  height={24}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Pane width="16px" height="16px" marginRight={8} display="flex">
                    <LinkIcon icon={link.icon} style={{width:"100%", height: "100%", objectFit: "contain"}} />
                  </Pane>
                  <Pane flex={1} display="flex" justifyContent="flexStart" flexDirection="column">
                    <Strong textAlign="left" size={300}>{link.resource}</Strong>
                  </Pane>
                </Button>
              </a>
            )
          })}
        </Pane>
      </Pane>
    </Pane>
  )
}