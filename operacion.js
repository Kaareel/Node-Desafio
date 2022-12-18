const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {

    const content = { nombre, edad, animal, color, enfermedad }
    const reading = archivos("citas.json")
    reading.push(content)
    console.log(reading)
    fs.writeFileSync("citas.json", JSON.stringify(reading))

}

const archivos = (archivo) => {
    const leer = fs.archivosSync(archivo)
    const objFile = JSON.parse(leer)
    return objFile
}

module.exports = { registrar, archivos }