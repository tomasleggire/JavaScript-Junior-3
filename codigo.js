//Pogramacion orientada a objetos (POO):
//Clase: fabrica de objetos
//Constructor: construye las propiedades del objeto
//Atributo: caracteristicas del objeto
//Metodo: las cosas que puede hacer el objeto (es una funcion dentro de la clase)
//Cuando se termina se dice q la clase esta instanciada
                                                                  /*
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

const perro = new animal("perro",5,"marron");
const gato = new animal("gato",1,"negro");
const pajaro = new animal("pajaro",2,"verde");

//document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");
//document.write(pajaro.info + "<br>");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
                                                                    
//Abstaccion, Modularidad, Encapsulamiento y Polimorfismo:
//Abstaccion: resumir la complejidad del objeto
//Modularidad: resolver un problema grande, separando por partes, para que sea mas facil
//Encapsulamiento: que todos los datos sean mas privadados
//Polimorfismo: ver como un objeto se comporta de manera distinta al mismo metodo

//Herencia, metodos estaticos y metodos accesores
                                   
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar() {
        alert("WAW");
    }
}

const perro = new Perro("perro",5,"marron");
const gato = new Animal("gato",1,"negro");
const pajaro = new Animal("pajaro",2,"verde");

perro.ladrar();
                                                                     
//Metodos estaticos y metodos accesores:
//Metodo estatico: es un metodo que no necesita que la clase este definida para ser creado
//Metodo accesores: Getters para obtener un valor y Setters para modificarlo o definirlo

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"marron");
const gato = new Animal("gato",1,"negro");
const pajaro = new Animal("pajaro",2,"verde");

perro.setRaza = "Pedro";
document.write(perro.getRaza);
                                                            
//Problema 1 y 2:

class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando en una resolucion de ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.resolucionDePantalla}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        Memorio Ram: <b>${this.memoriaRam}</b></br>
        `
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}



celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
celular3 = new Celular("blanco","350g","5.9'","full hd","2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

//document.write(`
//   ${celular1.mobileInfo()} <br>
//   ${celular2.mobileInfo()} <br>
//   ${celular3.mobileInfo()} <br>
//`);

celular4 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
celular5 = new CelularAltaGama("nergo","142g","6","4K","4GB","hd");

document.write(`
   ${celular4.infoAltaGama()} <br><br>
   ${celular5.infoAltaGama()} <br>
`);
                                                                                     */

//Problema 3:

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("11.000","1 estrellas","400mb");
app3 = new App("9.000","0.8 estrellas","600mb");
app4 = new App("5.000","5.5 estrellas","900mb");
app5 = new App("1.000","7 estrellas","700mb");
app6 = new App("6.000","7.3 estrellas","950mb");
app7 = new App("22.000","3 estrellas","230mb");

document.write(`
   ${app.appInfo()} <br>
   ${app2.appInfo()} <br>
   ${app3.appInfo()} <br>
   ${app4.appInfo()} <br>
   ${app5.appInfo()} <br>
   ${app6.appInfo()} <br>
   ${app7.appInfo()} <br>
`)