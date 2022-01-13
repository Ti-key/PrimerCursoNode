const argv = require('yargs')
                .option({
                    'b':{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'El numero de la tabla'.yellow
                    },
                    'l':{
                        alias :'listar',
                        type: 'boolean',
                        default: false,
                        describe:'Lista la tabla en consola'.yellow
                    },
                    'h':{
                        alias :'hasta',
                        type: 'number',
                        default: 10,
                        describe:'Multiplicar hasta este numero'.yellow
                    }
                })
                .check((argv, options) => {
                if (isNaN(argv.b)) throw "La base no es numerico";
                return true;
                })
                .argv;


module.exports = argv;