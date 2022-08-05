// CODIGO DE SIMULADOR
//Este calculo se realiza presionando los botones del deporte elegido.
// se agrego ARRAY y SWITCH 

class Actividades{
    constructor(tiros, pases, habilidad) {  
      this.tiros = tiros
      this.pases = pases
      this.habilidad = habilidad
     }
   
      getTiros() {
      console.log(this.tiros);
      }
      getPases() {
      console.log(this.pases);
      }
      getHabilidad() {
      console.log(this.habilidad);
      }
    }
  
    const ingresa = () => { 
    let tiros = parseInt(prompt("Ingrese el numero de tiros convertidos"))
    let pases = parseInt(prompt("Ingrese el numero de pases correctos"))
    let habilidad = parseInt(prompt("Ingrese el numero de veces que se completo el circuito"))
   
    // ARRAY agregado 
    
    let promedio = [tiros + pases + habilidad] / 3

    const Basket = new Actividades(tiros, pases, habilidad)
    
    
    Basket.getTiros()
    Basket.getPases()
    Basket.getHabilidad()

    //REDONDEO devuelve el entero mayor o igual más próximo
    alert("Tu promedio es de : " + Math.ceil(promedio))

    if (promedio >= 100){
        alert("Aprobado")
    }else{
        alert("Desaprobado")
    }
    
    //ARRAY Y SWITCH se debe ingresar con mayuscula los dias de la semana.
    const diaSemana =["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"]
    let dia = prompt ("Ingresar el dia de entrenamiento") 

while (dia != "CERRAR"){
switch (dia) {

    case diaSemana[0]:
    alert("El entrenamiento del Lunes" + "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[1]: 
    alert("El entrenamiento del Martes"+ "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[2]:
    alert("El entrenamiento del Miercoles"+ "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[3]: 
    alert("El entrenamiento del Jueves"+ "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[4]: 
    alert("El entrenamiento del Viernes"+ "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[5]: 
    alert("El entrenamiento del Sabado"+ "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case diaSemana[6]: 
    alert("El entrenamiento del Domingo" + "\n " + "Tiros: " + tiros  + "\n " + "Pases: " + pases + "\n " + "Habilidad: " + habilidad + "\n " + "Promedio de entrenamiento: " + Math.ceil(promedio));
    break;
    case 'CERRAR':
    default:
    alert('Debes escribir "CERRAR" para ingresar otro dia');
}

dia = prompt ("Ingresa CERRAR para salir")
}
  
   }
       
   ingresa()