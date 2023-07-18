let Contactlist = [
    {
        id: 1,
        nombres: "Maria",
        apellidos: "Lobo",
        telefono: "50487322133",
        ubicaciones: {
            ciudad: "Villanueva, Cortes",
            direccion: "3 calle 2 avenida"
        }
    },
    {
        id: 2,
        nombres: "Nick",
        apellidos: "Hill",
        telefono: "50498016097",
        ubicaciones: {
            ciudad: "Saba,Colon",
            direccion: "Calle Principal"
        }
    },
    {
        id: 3,
        nombres: "Fabiana",
        apellidos: "Hernandez",
        telefono: "50583896720",
        ubicaciones: {
            ciudad: "Managua,Nicaragua",
            direccion: "Calle Principal"
        }
    }
];

function agregarContacto(contacto) {
    Contactlist.push(contacto);
    console.log("Contacto añadido:", contacto);
}

function borrarContacto(contacto) {
    let indice = Contactlist.findIndex(c => c.id === contacto.id);
    if (indice !== -1) {
        let nombreContacto = Contactlist[indice].nombres + " " + Contactlist[indice].apellidos;
        Contactlist.splice(indice, 1);
        console.log("Contacto borrado:", nombreContacto);
    } else {
        console.log("El contacto no existe en la lista.");
    }
}

function actualizarContacto(contactoActualizado) {
    let indice = Contactlist.findIndex(c => c.id === contactoActualizado.id);
    if (indice !== -1) {
        Contactlist[indice] = contactoActualizado;
        console.log("Contacto actualizado:", contactoActualizado);
    } else {
        console.log("El contacto no existe en la lista.");
    }
}

function imprimirContactos() {
    console.log("Lista de contactos:");
    for (let contacto of Contactlist) {
        console.log(contacto.nombres + " " + contacto.apellidos);
    }
}