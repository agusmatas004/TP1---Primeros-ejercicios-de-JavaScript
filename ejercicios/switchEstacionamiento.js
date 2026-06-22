/* Un estacionamiento público cobra una tarifa fija dependiendo del tipo de vehículo que ingrese. Sin embargo, tienen una regla especial: los domingos el estacionamiento es completamente gratis para todos. Crea un programa que solicite el día de la semana y el tipo de vehículo (1: Motocicleta, 2: Auto, 3: Autobús).
Si el día es "Domingo", el programa debe mostrar que el costo es $0.
Si es cualquier otro día, debe usar una estructura switch para calcular el costo según el vehículo: Motocicleta = $5, Auto = $10, Autobús = $20.
Si ingresan un tipo de vehículo no válido, debe mostrar un mensaje de error. */

const diaSemana = prompt("Ingrese el dia de la semana");
if (diaSemana.toLowerCase() === "domingo") {
  console.log("El dia de hoy el estacionamiento es gratis, el costo es $0");
} else {
  const vehiculo = parseInt(prompt("Elige el vehículo: 1. Motocicleta --- 2. Auto --- 3. Autobús"));
  switch (vehiculo) {
    case 1:
      console.log("El vehículo seleccionado es Motocicleta, su costo es de $5");
      break;
    case 2:
      console.log("El vehículo seleccionado es Auto, su costo es de $10");
      break;
    case 3:
      console.log("El vehículo seleccionado es Autobús, su costo es de $20");
      break;
    default:
      console.log("El tipo de vehículo no es válido");
  }
}

