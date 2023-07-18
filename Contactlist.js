let Contactlist = ["Maria Lobo", "Nick Hill", "Fabiana Hernandez"];
function agregarContacto(contacto) {
  Contactlist.push(contacto);
  console.log("Contacto añadido:", contacto);
}
function borrarContacto(contacto) {
  let indice = Contactlist.indexOf(contacto);
  if (indice !== -1) {
    Contactlist.splice(indice, 1);
    console.log("Contacto borrado:", contacto);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of Contactlist) {
    console.log(contacto);
  }
}