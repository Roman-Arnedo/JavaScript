function saludo(nombre){
    alert("Bienvenido " + nombre + " selecciona una bebida")
}

for(let i=0; i<1; i++){
    let nombre= prompt("Ingresa tu nombre")

    saludo(nombre)
}

let bebidaSeleccionada;

do {
    ingreso = prompt("Ingresa una bebida de 500ml:\n1- Coca-Cola\n2- Coca-Cola Zero\n3- Sprite\n4- Sprite Zero\n5- Fanta Naranja\n6- Fanta Naranja Zero\n7- Aquarius Manzana\n8- Aquarius Pera.\nPara seleccionar una bebida, ingresa el número correspondiente.\nIngresa 0 para finalizar tu compra.");

    if (ingreso === "0") {
            alert("Gracias por visitarnos. ¡Hasta luego!");
        }  
    else if (ingreso !== "1" && ingreso !== "2" && ingreso !== "3" && ingreso !== "4" && ingreso !== "5" && ingreso !== "6" && ingreso !== "7" && ingreso !== "8") {
        alert("Ingresa un número válido.");
    } else {
        switch (ingreso) {
            case "1":
                bebidaSeleccionada = "Coca-Cola";
                break;
            case "2":
                bebidaSeleccionada = "Coca-Cola Zero";
                break;
            case "3":
                bebidaSeleccionada = "Sprite";
                break;
            case "4":
                bebidaSeleccionada = "Sprite Zero";
                break;
            case "5":
                bebidaSeleccionada = "Fanta Naranja";
                break;
            case "6":
                bebidaSeleccionada = "Fanta Naranja Zero";
                break;
            case "7":
                bebidaSeleccionada = "Aquarius Manzana";
                break;
            case "8":
                bebidaSeleccionada = "Aquarius Pera";
                break;
        }

        ingreso = prompt("Seleccionaste: " + bebidaSeleccionada + "\n1- Seleccionar una bebida diferente\n0- Finalizar tu compra");

        if (ingreso === "0") {
            alert("Compraste " + bebidaSeleccionada + ", gracias por tu compra.");
        }
    }
} while (ingreso !== "0");