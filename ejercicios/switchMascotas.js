/*
Una tienda de mascotas ofrece descuentos especiales según el tipo de animal para el que se compren productos. Pero hay una condición: el descuento solo se aplica si
el cliente es miembro del club de fidelidad de la tienda.  Crea un programa que tenga las variables: esMiembro (verdadero/falso) y tipoMascota ("perro", "gato", "ave")
Si el cliente no es miembro, el programa debe avisar que no tiene descuento (0%).
Si el cliente sí es miembro, se usa un switch para asignar el descuento: Perros = 15%, Gatos = 10%, Aves = 5%. Cualquier otra mascota no tiene descuento.
Al final, el programa debe mostrar el porcentaje de descuento obtenido.
*/

const esMiembro = prompt("¿Es miembro de la tienda?");
const jabonMascota = 1000;

if (esMiembro.toLowerCase() === "si") {
  const tipoMascota = prompt("Ingrese el tipo de mascota");
  switch (tipoMascota.toLowerCase()) {
    case "perro": {
      console.log("¡Para perros tiene descuento del 15%!");
      const precioDescuento = jabonMascota * 0.85;
      console.log("Descuento aplicado: 15%");
      console.log(
        "El jabón está a $" +
          jabonMascota +
          ", pero con el descuento queda a: $" +
          precioDescuento,
      );
      break;
    }
    case "gato": {
      console.log("¡Para gatos tiene descuento del 10%!");
      const precioDescuento = jabonMascota * 0.9;
      console.log("Descuento aplicado: 10%");
      console.log(
        "El jabón está a $" +
          jabonMascota +
          ", pero con el descuento queda a: $" +
          precioDescuento,
      );
      break;
    }
    case "ave": {
      console.log("¡Para aves tiene descuento del 5%!");
      const precioDescuento = jabonMascota * 0.95;
      console.log("Descuento aplicado: 5%");
      console.log(
        "El jabón está a $" +
          jabonMascota +
          ", pero con el descuento queda a: $" +
          precioDescuento,
      );
      break;
    }
    default:
      console.log(
        "¡Lo sentimos, solo tenemos descuento para perro, gato y ave! El jabón queda a: $" +
          jabonMascota,
      );
      console.log("Descuento aplicado: 0%");
  }
} else if (esMiembro.toLowerCase() === "no") {
  console.log("Solo los miembros tienen acceso a descuentos para mascotas");
} else {
  console.log("Respuesta no válida. Escribe 'si' o 'no'.");
}