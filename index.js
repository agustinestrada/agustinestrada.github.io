let cantidadComensales = prompt('Cuantos van a ser?')
let comensales = []
let comensalesCompletos = []
let suma = 0
let totalPorPersona = 0


let total = document.getElementById('total')
let empezar = document.getElementById('empezar')
let cargar = document.getElementById('cargar')
let finalizar = document.getElementById('finalizar')
let tabla = document.getElementById('tabla')
let cuerpoTabla = document.createElement('tbody')

class Comensal {
    constructor(nombre){
        this.nombre = nombre
        this.aporte = 0
        this.saldo = 0

    }
}

while (isNaN(cantidadComensales)) {
    cantidadComensales = prompt('Cuantos van a ser?')
}

for (let i = 0; i < cantidadComensales; i++) {
    comensales.push(prompt(`Ingrese el nombre del comensal ${i+1}`))
}

comensales.forEach(function(c) {
        let comensal = new Comensal(c)
        comensalesCompletos.push(comensal) 
    });

empezar.addEventListener('click', ()=>{
    window.location.reload()
})

var select = document.getElementById("opciones");

// Agrega las opciones al select
comensales.forEach(function(opcion) {
    let option = document.createElement("option");
    option.text = opcion;
    select.add(option);
});

cargar.addEventListener('click',(e)=>{
    e.preventDefault()

    let personaQueGasta = document.querySelector('select').value
    let montoQueGasta = document.getElementById('gasto').valueAsNumber

    for (let i = 0; i < comensalesCompletos.length; i++) {
        if (personaQueGasta == comensalesCompletos[i].nombre) {
            comensalesCompletos[i].aporte += montoQueGasta
        }
        
    }

    console.log(comensalesCompletos)
})

finalizar.addEventListener('click', ()=>{

    for (let i = 0; i < comensalesCompletos.length; i++) {
        suma += comensalesCompletos[i].aporte
        
    }
    
    totalPorPersona = suma/comensales.length

    comensalesCompletos.forEach( x => {
        x.saldo = totalPorPersona - x.aporte
    })

    total.innerText = `El total por persona es de ${totalPorPersona}`


    comensalesCompletos.forEach(p => {
        console.log(p.nombre);

        let fila = document.createElement('tr')
        
        let td = document.createElement('td')
        td.innerText = p.nombre
        fila.appendChild(td)

        td = document.createElement('td')
        td.innerText = p.aporte
        fila.appendChild(td)

        td = document.createElement('td')
        td.innerText = p.saldo
        fila.appendChild(td)
        
        cuerpoTabla.appendChild(fila)
    })

    tabla.appendChild(cuerpoTabla)
})
