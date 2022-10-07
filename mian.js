class Persona{
    constructor(nombre,apellido,documento){
        this,nombre=nombre
        this,apellido=apellido
        this,documento=documento

    }
}

class Interfaz{
    añadirPersona(persona){
    const lista=document.getElementById('personas-list')
    const elemento=document.createElement('div')
    elemento.innerHTML=
    `<div class="card text-center mb-4">
        <div class="card-body">
        <strong>nombre</strong>nombre:
        <strong>apéllido</strong>apellido:
        <strong>documento</strong>documento:
        <a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a>
    </div>`

    lista.appendChild(elemento)
    this.dejarblanco()
  }

 dejarblanco(){
    document.getElementById('personas-form').reset()
 }

 eliminarPersonas(elemento){
    if(elemento.name==='eliminar'){
     elemento.parentElement.parentElement.remove()
    }
 }
}

//EVENTO QUE INTERACTUAN DESDE EL HTML
document.getElementById('personas-form').addEventListener('submit',evento=>{
  evento.preventDefault()
  const nombre=document.getElementById('nombre').value
  const apellido=document.getElementById('apellido').value
  const documento=document.getElementById('documento').value
  

  if (nombre===''|| apellido==='' || documento===''){
    alert('campos vacios')
  }else{
    const persona=new Persona(nombre,apellido,documento)
    const interfaz=new Interfaz
    interfaz.añadirPersona(persona)
    alert('persona creada correctamente')

  }
})
