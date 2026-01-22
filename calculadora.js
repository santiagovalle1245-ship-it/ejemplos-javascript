//alert("Hola mundo");

function Mostrar(e){

    let numero1 = parseInt (document.getElementById("numero1").value);
    let numero2 = parseInt (document.getElementById("numero2").value);
    let resultado = 0;
    let operacion = e.target.id;

    if(operacion == "suma"){
        resultado = numero1 + numero2;
    }
    else if (operacion == "resta"){
        resultado = numero1 - numero2;
    }
    else if (operacion == "multiplica"){
        resultado = numero1 * numero2;
    }
    else if (operacion == "divide"){
        resultado = numero1 / numero2;
    }
    else{
        alert("Funcion en proceso :)")
    }


    let objResultado = document.getElementById("resultado");
    objResultado.innerHTML = resultado;

    //alert(resultado);

}

let botones = document.getElementById("btns");
botones.addEventListener("click", Mostrar);


