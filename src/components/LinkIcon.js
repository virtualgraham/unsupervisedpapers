import React from 'react'


export default ({ icon, style }) => {

    if (icon) icon = icon.toLowerCase()
    
    let src
    let alt

    if (icon === "arxiv") {
        src = '/link_icons/arxiv.svg'
        alt = "arXiv.org"
    } else if (icon === "github") {
        src = '/link_icons/github.svg'
        alt = "Github"
    } else if (icon === "googlescholar") {
        src = '/link_icons/googlescholar.svg'
        alt = "Google Scholar"
    } else if (icon === "paperswithcode") {
        src = '/link_icons/paperswithcode.svg'
        alt = "Papers With Code"
    } else if (icon === "pdf") {
        src = '/link_icons/pdf.svg'
        alt = "PDF"
    } else if (icon === "wikipedia") {
        src = '/link_icons/wikipedia.svg'
        alt = "Wikipedia"
    } else if (icon === "youtube") {
        src = '/link_icons/youtube.svg'
        alt = "YouTube"
    } else {
        src = '/link_icons/www.svg'
        alt = "www"
    }

    return <img src={src} alt={alt} style={style} />

}