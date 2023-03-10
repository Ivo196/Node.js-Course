const { readFile } = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(readFile);

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(erro);
      }
      resolve(data);
    });
  });
};

async function read() {
  try {
    // const result = await getText("./data/first.txt");
    const result = await readFilePromise("./data/first.txt",'utf-8');


    console.log(result);
  } catch (erro) {
    console.log(error);
  }
}
read();
