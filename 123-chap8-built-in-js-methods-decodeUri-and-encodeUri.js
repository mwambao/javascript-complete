/*
- A URI (uniform resource identifier) is an identifier of a certain resource. 
Example of URI:
https://example.com/page?query=123
mailto:user@example.com

- URL (uniform resource locator) is a subcategory of URI that is not only an identifier, but also holds the information on how to access it (location).
- Example of URL:
https://www.example.com/index.html
ftp://ftp.example.com/file.txt

- In other words, all URLs are URIs, but not all URIs are URLs.

- Let's talk about encoding and decoding these URIs (and also URLs, since they are a
subset). An example of when you'd need this is when you are sending variables over
the URL using the get method in a form. These variables that you are sending via the
URL are called query parameters.
- If something contains a space, this will be decoded, because you cannot use spaces in
your URL. They will be converted to %20. The URL might look something like:
www.example.com/submit?name=maaike%20van%20putten&love=coding

- All characters can be converted to some %-starting format. However, this is not
necessary in most cases. URIs can contain a certain number of alphanumeric
characters. The special characters need to be encoded. An example, before encoding, is:
https://www.example.com/submit?name=maaike van putten
The same URL after encoding is:
https://www.example.com/submit?name=maaike%20van%20putten

- There are two pairs of encode and decode methods. We will discuss them and their
use cases here. You cannot have a URI with spaces, so working with these methods
is crucial in order to work with variables containing spaces.
*/

let uri = "https://www.example.com/submit?name=duncan owino mwamba";

let encoded_uri = encodeURI(uri);
console.log("Encoded :", encoded_uri); // Encoded : https://www.example.com/submit?name=duncan%20owino%20mwamba
//spaces have been replaced in the encoded version with %20.


let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded: ", decoded_uri); // Decoded:  https://www.example.com/submit?name=duncan owino mwamba
//spaced have been re-instated in the decoded version.


/*
this encode and decode do not take special characters into account, and therefore leave them in the
URI. Colons, question marks, equal signs, slashes, and ampersands can be expected.
This is great for fixing broken URIs, but it's actually a bit useless whenever you need
to encode strings that contain any of these characters: / , ? : @ & = + $ #. These can
be used in URIs as part of the URI and are therefore skipped. This is where the next
two built-in methods come in handy (decodeUriComponent() and encodeUriComponent().
*/