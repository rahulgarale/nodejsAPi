const EventEmitter =require('events');
var url= 'http://logger.com/log';


class Logger extends EventEmitter{
 log(message){
    //send http request
    console.log(message);

}
}

module.exports = Logger;