const { registrar, archivos } = require("./operacion");


const argumentos = process.argv.slice(2);

const selectFunction = (operacion) => {
    if (operacion === "registrar") {
        registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5])
    }
    else if (operacion === "leer") {
        archivos()
    }
    else {
        console.log("necesitas registrar un paciente")
    }
}
selectFunction(argumentos[0]);