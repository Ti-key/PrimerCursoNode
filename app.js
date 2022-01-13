const { crearArchivo } = require("./helpers/multiplicar");
const { number } = require("yargs");
const argv = require("./config/yargs");

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then( f => console.log(`${f} creado con exito!`))
    .catch( err => console.log(err));