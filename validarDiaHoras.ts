import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirDia() {
    rl.question('Ingrese el día (1-31): ', (diaStr) => {
        const dia = parseInt(diaStr, 10);
        if (isNaN(dia) || dia < 1 || dia > 31) {
            console.log('Día inválido. Debe estar entre 1 y 31.');
            rl.close();
        } else {
            pedirHoras();
        }
    });
}

function pedirHoras() {
    rl.question('Ingrese las horas: ', (horasStr) => {
        const horas = parseInt(horasStr, 10);
        if (isNaN(horas) || horas < 0) {
            console.log('Horas inválidas.');
        } else {
            console.log(`Día y horas ingresados correctamente: Día ${horasStr}`);
        }
        rl.close();
    });
}

pedirDia();
