'use strict'

const fsP = require('fs/promises');
const axios = require('axios');
const isUrl = require("is-valid-http-url");



//** Take one argument (path),and read the file with that path, and print the contents of that file */
async function cat(path) {
  let contents;
  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.log("Something went wrong reading this file", err);
    process.exit(1);
  }
  console.log("file contents", contents);
}


//**Take a URL and, using axios,read the content of that URL and print it to the console */
async function webCat(url) {
  let resp
  try {
    resp = await axios.get(url)   // TODO 
  } catch (err) {
    console.log("Something went wrong reading this file", err);
    process.exit(1);
  }
  console.log(resp.data);
}


let filePathOrURL = process.argv[2]
//** Check if passed argument is a url and returns boolean; If valid url pass it to webcat, otherwise pass it to cat */ 
if (isUrl(filePathOrURL)) {
  webCat(filePathOrURL);
} else {
  cat(filePathOrURL);
};
