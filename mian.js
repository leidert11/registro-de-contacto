class Persona {
    constructor(nombre, apellido, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
    }
}

class Interfaz {
    añadirPersona(persona) {
        const lista = document.getElementById('personas-list')
        const elemento = document.createElement('div')
        console.log(persona)
        elemento.innerHTML =
            `<div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>:${persona.nombre}<br>
            <strong>apellido</strong>:${persona.apellido}<br>
            <strong>Documento</strong>:${persona.documento}<br>
            <a href="#" class="btn btn-danger" id="eliminar" name="eliminar">ELIMINAR</a>
            </div>
        </div>`

        lista.appendChild(elemento)
        this.dejarblanco()
    }

    dejarblanco() {
        document.getElementById('personas-form').reset()
    }

    eliminarPersona(elemento) {
        if (elemento.name === 'eliminar') {
            elemento.parentElement.parentElement.parentElement.remove()
        }
    }

    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
        const contenedor= document.getElementsByClassName('container')
        const app=document.getElementById('app')
        contenedor[0].insertBefore(div,app)
        setTimeout(function(){
            div.remove()
        },(2000))
    }
}

//EVENTOS QUE INTERACTUAL CON EL HTML

document.getElementById('personas-form').addEventListener('submit', e => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const documento = document.getElementById('documento').value

    if(nombre==='' || apellido==='' || documento===''){
        alert(`Campos vacios`)
    }else{
        const persona=new Persona(nombre,apellido,documento)
        const interfaz=new Interfaz
        interfaz.añadirPersona(persona)
        // alert(`Persona creada correctamente`)
        interfaz.mostrarmensaje('Contacto añadido correctamente','success')
    }
})

document.getElementById('personas-list').addEventListener('click',evento=>{
    const interfaz=new Interfaz
    console.log(evento.target)
    interfaz.eliminarPersona(evento.target)
    interfaz.mostrarmensaje('Elemento eliminado','danger')
})
