// CODIGO DE SIMULADOR
//Este calculo se realiza presionando los botones del deporte elegido.

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
  
    //Se podrian agregar mas registros
    const ingresa = () => {
    let tiros = parseInt(prompt("Ingrese el numero de tiros convertidos"))
    let pases = parseInt(prompt("Ingrese el numero de pases correctos"))
    let habilidad = parseInt(prompt("Ingrese el numero de veces que se completo el circuito"))

    let promedio = tiros + pases + habilidad / 3

    const Basket = new Actividades(tiros, pases, habilidad)
    
    Basket.getTiros()
    Basket.getPases()
    Basket.getHabilidad()

    alert(promedio)
   // te calcula si estas aprobado o desaprobado
    if (promedio >= 100){
        alert("Aprobado")
    }else{
        alert("Desaprobado")
    }
   

   }
    
   ingresa()