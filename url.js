const url = require("url");

const address = "https://www.mikatiihonen.com/blogi/";

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
