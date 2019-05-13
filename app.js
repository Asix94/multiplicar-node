const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo, listarTablas } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTablas(argv.base, argv.limite)
            .then(lista => lista)
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido')
}
//let parametro = argv[2];
//let base = parametro.split('=')[1];