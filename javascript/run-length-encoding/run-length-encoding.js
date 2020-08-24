
const encode = str => {
    let encoded = '';
    subChunk(str);   

    function subChunk(s) {        
        
        if (s.length < 1) return
        
        let matched = s.match(/([A-Za-z\s])\1{1,}/)
        
        if (matched && matched.index === 0) {
            encoded += matched[0].length + matched[1]
            subChunk(s.substring(matched[0].length))
        } else {
            encoded += s.charAt(0);
            console.log(encoded)
            subChunk(s.substring(1))
        }        
    }
    return encoded;    
}

const decode = str => {
    let decoded = '';
    unChunk(str);

    function unChunk(s) {        
        
        if (s.length < 1) return
        
        let matched = s.match(/^()\d+[a-zA-z\s]/)
        
        if (matched && matched.index === 0) {
            let num = matched[0].slice(0,-1)
            let letter = matched[0].slice(-1)                   
            decoded += letter.repeat(num)
            unChunk(s.substring(matched[0].length))
        } else {
            decoded += s.charAt(0);            
            unChunk(s.substring(1))
        }        
    }
    return decoded;    
}


const RLE = {
    encode: str => str.replace(/([\w\s])\1+/g, (m, c) => `${m.length}${c}`),
    decode: str => str.replace(/(\d+)([\w\s])/g, (_, d, c) => c.repeat(d))
  }

  //console.log(encode('BBDDFFFFuhjshBB   djdj'))
  console.log(RLE.decode('2B2D4Fuhjsh2B3 djdj'))
 

  module.exports = RLE;