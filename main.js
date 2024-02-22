alert('Bienvenidos a Clínica Upgrade');

let nombre = prompt("Por favor ingresa tu nombre").toLowerCase();
let apellido = prompt("Por favor ingresa tu apellido").toLowerCase();
let edad = Number(prompt("Por favor ingresa tu edad"));

if (edad < 18) {
    console.log("Lo sentimos, no puedes realizar ningún tratamiento en nuestra clínica");
    alert('Lo sentimos, no puedes realizar ningún tratamiento en nuestra clínica');
} else {
    console.log("Puedes realizar tratamientos en nuestra clínica");

    let procedimiento = null;
    let precio_procedimiento = null;

    while (procedimiento === null) {
        procedimiento = parseInt(prompt('Selecciona un número del producto que deseas realizar: \n1. Ácido Hialurónico Valor $250.000 \n2. Bioestimulación Valor: $350.000 \n3. Botox Valor: $150.000'));

        if (!isNaN(procedimiento) && procedimiento >= 1 && procedimiento <= 3) {
            switch (procedimiento) {
                case 1:
                    precio_procedimiento = 250000;
                    break;
                case 2:
                    precio_procedimiento = 350000;
                    break;
                case 3:
                    precio_procedimiento = 150000;
                    break;
            }

            console.log(`El precio del procedimiento seleccionado es: ${precio_procedimiento}`);
        } else {
            alert('Por favor ingrese un número válido de 1 a 3');
            procedimiento = null;
        }
    }

    let credito = prompt("¿Desea pagar con crédito? Responda (si/no)").toLowerCase();
    let cuotas = 1;
    let precio_total = precio_procedimiento;

    if (credito === 'si') {
        cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? 3, 6 o 12 cuotas?"));

        while (![3, 6, 12].includes(cuotas)) {
            alert('Por favor seleccione 3, 6 o 12 cuotas');
            cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar?, en 3, 6 o 12 cuotas?"));
        }

        precio_total = precio_procedimiento / cuotas;
    }

    console.log(`Estimado/a ${nombre} ${apellido}, el precio total a pagar por el procedimiento seleccionado es: $${precio_total} en ${cuotas} cuotas, con un valor de $${(precio_total).toFixed(2)} por cuota`);
    alert(`Estimado/a ${nombre} ${apellido}, el precio total a pagar por el procedimiento seleccionado es: $${precio_total} en ${cuotas} cuotas, con un valor de $${(precio_total).toFixed(2)} por cuota`);
}
