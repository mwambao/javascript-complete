let uri = "https://www.example.com/submit?name=duncan owino mwamba";

let encoded_uri = encodeURIComponent(uri);
console.log(encoded_uri);// https%3A%2F%2Fwww.example.com%2Fsubmit%3Fname%3Dduncan%20owino%20mwamba

let decoded_uri = decodeURIComponent(encoded_uri);
console.log(decoded_uri); // https://www.example.com/submit?name=duncan owino mwamba

