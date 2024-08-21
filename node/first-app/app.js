const EventEmitter = require('events');
// const emitter = new EventEmitter();

//register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called.',arg);
// });

// emitter.emit('messageLogged',{id:1,url:'http://myurl.edu'});

// Raise an event logging (data: message)

// class LoggerMessage {
//     constructor(id,msg){
//         this.id = id,
//         this.msg = msg
//     }
// }

// initilze msg count
// msgCount=0

// function newMessageLogged(msg) {
//     message = new LoggerMessage(msgCount,msg)
//     emitter.emit('messageLogged',message)
//     msgCount++
// }

// newMessageLogged('first message')
// newMessageLogged('second message')

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg) => {
     console.log('Listener called.',arg);
     });

logger.log('this message');