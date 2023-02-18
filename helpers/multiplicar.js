const fs = require('fs')

const crearArchivo = async (baseNumber = 5, list, limit) => {
    let salida = '';
    for (let index = 1; index <= limit; index++) {
        salida += `${baseNumber} x ${index} = ${baseNumber * index} \n`;
    }

    if (list) {
        console.log("===================");
        console.log(`Tabla del : ${baseNumber}`);
        console.log("===================");
        console.log(salida);
    }
    try {
        fs.writeFileSync(`tabla-${baseNumber}.txt`, salida);
    } catch (error) {
        throw error
    }
    return `tabla-${baseNumber}.txt`
}

module.exports = {
    crearArchivo
}