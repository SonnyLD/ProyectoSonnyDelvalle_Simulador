
// Se simplifico codigo con DOM 
function CalcularPromedio(){
    let p1 = document.getElementById("n1").value
    let p2 = document.getElementById("n2").value
    let p3 = document.getElementById("n3").value
    let pro = (parseFloat(p1) + parseFloat(p2) + parseFloat(p3))/3
    document.getElementById("promedio").innerHTML = Math.ceil(pro)

    if (pro >= 100){
    swal("Aprobado!", "Por favor click en el boton!", "success")
    }else{
    swal("Desaprobado!", "Por favor click en el boton!", "error")
    }
    //ARRAY Y SWITCH se debe ingresar con mayuscula los dias de la semana.
    // se agrega evento
    let dia = document.getElementById("e1").value
    const diaSemana =["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"]
    
        switch (dia) {
 
            case diaSemana[0]:
    swal("El entrenamiento del Lunes" + "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[1]: 
    swal("El entrenamiento del Martes"+ "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[2]:
    swal("El entrenamiento del Miercoles"+ "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[3]: 
    swal("El entrenamiento del Jueves"+ "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[4]: 
    swal("El entrenamiento del Viernes"+ "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[5]: 
    swal("El entrenamiento del Sabado"+ "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break;
    case diaSemana[6]: 
    swal("El entrenamiento del Domingo" + "\n " + "Tiros: " + p1  + "\n " + "Pases: " + p2 + "\n " + "Habilidad: " + p3 + "\n " + "Promedio de entrenamiento: " + Math.ceil(pro));
    break
    
} 
   }