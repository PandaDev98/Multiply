const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'base number of the multiply table'
    }).check((argv, options) => {
        if (isNaN(argv.b)) { throw 'base must be a number' }
        return true;
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'list the given multiply table'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'maximum value of the multiply process'
    })
    .argv;

module.exports = argv;