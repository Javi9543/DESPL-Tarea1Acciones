const fs = require('node:fs');

if(fs.existsSync('README.MD')){
    console.log("Existe el archivo: README.MD");
} else {
    console.log("No existe el fichero README.MD en el repo, Añadelo!");
    process.exitCode = 1;
}

if (fs.existsSync('LICENSE.md')) {
    console.log("Existe el archivo: LICENSE.md");
} else {
    console.log("No existe el fichero LICENSE.md en el repo, Añadelo!");
    process.exitCode = 1;
}

if (fs.existsSync('CONTRIBUTING.md')) {
    console.log("Existe el archivo: CONTRIBUTING.md");
} else {
    console.log("No existe el fichero CONTRIBUTING.md en el repo, Añadelo!");
    process.exitCode = 1;
}