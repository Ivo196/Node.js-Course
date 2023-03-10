const EventEmitter = require("events");

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => {
    console.log('Hola')
})
customEmitter.emit('response','Imprimi el mensaje')