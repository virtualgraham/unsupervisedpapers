function decodeKebobCase(str) {
    if (!str) {
        return ''
    }
    return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

function encodeKebobCase(str) {
    return str.replace(/[^0-9a-zA-Z]+/g, ' ').trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\-\s]+/g, '-').toLowerCase()
}


function truncate( str, n ){
    if (!str) return ''
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return subString.substr(0, subString.lastIndexOf(" ")) + "...";
  };

function linkListToDict(links) {
    const d = links.reduce((a,l) => {
        if (!a.hasOwnProperty(l.icon)) {
            a[l.icon] = []
        }
        a[l.icon].push(l)
        return a
    }, {})
    return d
}

export default {
    encodeKebobCase,
    decodeKebobCase,
    truncate,
    linkListToDict
}