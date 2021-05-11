'use strict'

const fsP = require('fs/promises');

//** Take one argument (path),and read the file with that path, and print the contents of that file */
async function cat(path) {
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log("file contents", contents);
    } catch (err) {
        console.log("Something went wrong reading this file", err);
        process.exit(1);
    }
}
cat(process.argv[2]);



