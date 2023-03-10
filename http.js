const http = require("http");

http.createServer(function (request, response) {

    console.log(request.url)
    response.write("Hola como estas?")
    response.end()
}).listen(3000);
console.log('servidor escuchando en el puerto 3000')
