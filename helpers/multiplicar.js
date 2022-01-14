const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    let salida = '';
    for(i=1; i<=hasta; i++) salida += `\n${colors.blue(base)} ${'x'.green} ${colors.cyan(i)} = ${colors.yellow(i*base)}`;

    if (listar) console.log('\n',salida);

    fs.writeFileSync(`./salida/Tabla${base}.txt`, salida);
    return `Tabla${base}.txt`.rainbow;
}

module.exports ={
    crearArchivo
}