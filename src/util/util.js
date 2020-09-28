function decodeKebobCase(str) {
    if (!str) {
        return ''
    }
    return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

function encodeKebobCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}


function truncate( str, n ){
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return subString.substr(0, subString.lastIndexOf(" ")) + "...";
  };

export default {
    encodeKebobCase,
    decodeKebobCase,
    truncate
}