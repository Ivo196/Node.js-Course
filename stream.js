// const { writeFile } = require("fs/promises");

// const createBigFile = async () => {
//   await writeFile("./data/bigFile.txt", "Hello World".repeat(100000));
// };
// createBigFile();
// Es solo para crear el archivo lo anterior 
 const {createReadStream}= require ('fs')

const stream = createReadStream('./data/bigFile.txt','utf8')

stream.on('data', (chunk) => {
    console.log(chunk)
})