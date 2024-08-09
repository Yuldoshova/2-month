import EventEmitter from "events"

const myEvent = new EventEmitter()

myEvent.on('logname', (name) => {
    console.log(`Mening ismim ${name}`)
})

myEvent.once('logsurname', (surname) => {
    console.log(`Mening familiyam ${surname}`)
})

myEvent.emit('logname', 'Tom')
myEvent.emit('logname', 'Alex')
myEvent.emit('logname', 'John')

myEvent.emit('logsurname', 'Doe')
myEvent.emit('logsurname', 'Doe')
myEvent.emit('logsurname', 'Doe')