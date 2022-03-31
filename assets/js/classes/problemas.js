const milan ={
    nombre: 'milan',
    edad: 23,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


const persona ={
    nombre: 'name',
    edad: 43,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

//milan.imprimir();

function Persona(nombre, edad){
    console.log('se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('maria', 19)
const melisa = new Persona('melisa', 42)

console.log(maria);
maria.imprimir();
melisa.imprimir();

