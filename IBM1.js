let valid_auth_tokens = ['a2sTe7e', 'a121212as', 'hs4tscb'];
let requests = [["GET", "http://example.com/?token=a2sTe7e&id=2e3r&name=pedro"], ["POST", "http://example.com/?token=1113as&id=2e3r&name=jose"], ["POST", "http://example.com/?token=hs4tscb&id=2e3r&name=alex"], ["GET", "http://example.com/?token=hs11j4tscb&id=2e3r&name=peter"], ["GET", "http://example.com/?token=a121212as&id=2e3r&age=34"]];


function getTokenFromUrl(url) {
    const startChar = "token=";
    const endChar = "&";
    let token = '';

    let parts = url[1].split(startChar);

    if (parts.length > 1) {
        token = parts[1].split(endChar)[0];
        return token;
    } else {
        return "Token not found.";
    }
}

function getParamsFromUrl(url) {
    const separator = "&";
    
    let index = url[1].indexOf(separator);
    if (index !== -1) {
      let result = url[1].slice(index + 1);
      return result // Output: "World"
    } else {
      return "not found";
    }
}

function getResponses(valid_auth_tokens, requests) {
    // Write your code here
    let result = [];
    const regex = /^[a-zA-Z0-9]+$/;

    requests.forEach(row => {

        

        if(row[0] == "GET"){
            if(valid_auth_tokens.includes(getTokenFromUrl(row))){
                result.push(['VALID', getParamsFromUrl(row)]);
            } else {
                result.push('INVALID');
            }
        }

        if(row[0] == "POST"){
            if(getTokenFromUrl(row).length == 7 && regex.test(getTokenFromUrl(row)) && valid_auth_tokens.includes(getTokenFromUrl(row))){
                result.push(['VALID', getParamsFromUrl(row)]);
            } else {
                result.push('INVALID');
            }
        }
        
    });
    return result;

}

console.log(getResponses(valid_auth_tokens, requests));