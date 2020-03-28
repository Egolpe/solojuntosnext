export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  // validar descripción.
  if (!valores.descripcion) {
    errores.descripcion = "Agrega una carta";
  }

  return errores;
}
