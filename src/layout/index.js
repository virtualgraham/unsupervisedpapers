import React from 'react'
import Helmet from 'react-helmet'
import { Link, navigate } from 'gatsby'
import { SearchInput, Pane, Heading, Strong, Button,Popover, Menu, MenuIcon, Position, IconButton, majorScale } from 'evergreen-ui'
import config from '../../site-config'
import '../scss/app.scss'

export default ({ header, search_input, header_bg: headerBG, children, location  }) => {

  return (
    <Pane>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Pane
        is="header"
        backgroundImage={headerBG?`url('${headerBG}')`:undefined}
        backgroundRepeat="repeat"
      >
        <Pane
          background="rgba(255,255,255,0.8)"
          elevation={3}
          paddingLeft={majorScale(2)}
          paddingRight={majorScale(2)}
          height={56}
          display="flex"
          alignItems="center"
        >
          
          <Pane
            width={1024}
            display="flex"
            alignItems="center"
            marginLeft="auto"
            marginRight="auto"
          >
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/"><img src="/unsupervisedpapers.svg" alt="Unsupervised Papers" className="header-logo" /></Link>
            </Pane>

            <div className="wide-screen">
              <Pane>
                
                <Link to="/tasks/">
                  <Button className="header-button" appearance="minimal" height={40} isActive={location.pathname.startsWith('/tasks/') || location.pathname.startsWith('/task/')} intent="none">
                    <div>Tasks</div>
                  </Button>
                </Link>
                <Link to="/methods/">
                  <Button className="header-button" appearance="minimal" height={40} isActive={location.pathname.startsWith('/methods/') || location.pathname.startsWith('/method/')}>
                    <div>Methods</div>
                  </Button>
                </Link>
                <Link to="/blog/">
                  <Button className="header-button" appearance="minimal" height={40} isActive={location.pathname.startsWith('/blog/')}>
                    <div>Blog</div>
                  </Button>
                </Link>
                <Link to="/about/">
                  <Button className="header-button" appearance="minimal" height={40} isActive={location.pathname.startsWith('/about/')}>
                    <div>About</div>
                  </Button>
                </Link>
                <a href="https://github.com/virtualgraham/unsupervisedpapers" target="_blank" rel="noreferrer" style={{marginRight: "20px"}}>
                  <Button className="header-button" appearance="minimal" height={40}>
                    <Pane display="flex" alignItems="center">
                      <img src="/link_icons/github.svg" style={{height: "16px", marginRight: "5px"}} />
                      <div>Contribute</div>
                    </Pane>
                  </Button>
                </a>
                { search_input ? search_input :
                  (
                    <SearchInput 
                      placeholder="Search papers..." 
                      className="search-input"
                      onKeyDown={e => { 
                        if (e.which === 13 || e.keyCode === 13) {
                          navigate(`/search?q=${encodeURIComponent(e.target.value)}`)
                        }
                      }}
                    />
                  )
                }
              </Pane>
            </div>

            <div className="narrow-screen">
              <Pane>
                <Popover
                  position={Position.BOTTOM_RIGHT}
                  content={(
                    <Menu>
                      <Link to="/tasks/" className="no-underline"><Menu.Item height={35}><Heading>Tasks</Heading></Menu.Item></Link>
                      <Link to="/methods/" className="no-underline"><Menu.Item height={35}><Heading>Methods</Heading></Menu.Item></Link>
                      <Link to="/blog/" className="no-underline"><Menu.Item height={35}><Heading>Blog</Heading></Menu.Item></Link>
                      <Link to="/about/" className="no-underline"><Menu.Item height={35}><Heading>About</Heading></Menu.Item></Link>
                      <a href="https://github.com/virtualgraham/unsupervisedpapers" className="no-underline" target="_blank" rel="noreferrer">
                        <Menu.Item height={35}>
                          <Pane display="flex" alignItems="center">
                            <img src="/link_icons/github.svg" style={{height: "16px", marginRight: "5px"}} />
                            <Heading>Contribute</Heading>
                          </Pane>
                        </Menu.Item>
                      </a>
                      <Menu.Item height={55}>
                        { search_input ? search_input :
                          (
                            <SearchInput 
                              className="search-input"
                              onKeyDown={e => { 
                                if (e.which === 13 || e.keyCode === 13) {
                                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`)
                                }
                              }}
                            />
                          )
                        }
                      </Menu.Item>
                    </Menu>
                  )}
                >
                  <IconButton icon={MenuIcon} height={40} />
                </Popover>
              </Pane>
            </div>

          </Pane>
        </Pane>
        
        {header && (
          <>
            {header}
          </>
        )}
      </Pane>
      {children}
    </Pane>
  )
}