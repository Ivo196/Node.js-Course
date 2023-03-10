const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((rep, res) => {
  const FileStream = createReadStream("./data/bigFile.txt", "utf8");

  FileStream.on("data", (chunk) => {
    FileStream.pipe(res);
  });
  FileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log(`server on port ${3000}`);
