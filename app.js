const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

const { b, l, h } = argv;
crearArchivo(b, l, h)
    .then(fileName => console.log(`${fileName} Created `))
    .catch(err => console.log(err));