const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM5',
    baudRate: 9600
},
    function (err) {
        if (err) {
            return console.log('Error: ', err.message)
        }
    })

const parser = port.pipe(new ReadlineParser());

parser.on('data', function (data) {
    console.log('Data:', data)
})



