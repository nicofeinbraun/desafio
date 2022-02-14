let producto1 = "zapatilla";
let precio1 = 2500;

let producto2 = "remera";
let precio2 = 800;

let producto3 = "jean";
let precio3 = 1500;

let producto4 = "campera";
let precio4 = 5000;

let producto5 = "camisa";
let precio5 = 2000;


let comprado;
let preciototal = 0;
let descuento = 0.3;
let precio;
let nombre;
let descuentos;

function menu(){
    let opcion = prompt("Menu: \n1 - Articulos\n2 - Completar compra")

    switch(opcion){
        case "1":
            Productos();
            comprarProductos();
            break;
        case "2":
            total();
            break;
        default:
            alert("Seleccione una opcion valida")
            menu()
            break;

    }
}

function Productos(){
    
    alert("Los productos en stock son: \n"+producto1+"\n"+producto2+"\n"+producto3+"\n"+producto4+"\n"+producto5)
}

function calcularprecio(precio,descuentos,comprado){
    preciototal += comprado * precio - descuentos;
}

function Compra(precio,nombre){
    comprado = parseInt(prompt("Ingrese la cantidad que va a comprar:"));
    if (comprado > 10){
        descuentos = comprado * precio * descuento;
        console.log (descuentos)
        calcularprecio (precio,descuentos,comprado)
        console.log(nombre+" cantidad "+ comprado + " = $"+(precio*comprado-descuentos))
    }else{
        calcularprecio(precio,1,comprado)
        console.log(nombre+" cantidad "+ comprado + " = $"+precio*comprado*1)
    }
           
}

function comprarProductos(){
    do {
        nombre = prompt("Ingrese nombre del producto:").toLowerCase()
        if(nombre == producto1 || nombre == producto2 || nombre == producto3 || nombre == producto4 || nombre == producto5 || nombre == ""){
            switch(nombre){
                case producto1:
                    Compra (precio1,nombre);
                    break;
                case producto2:
                    Compra (precio2,nombre);
                    break;
                case producto3:
                    Compra (precio3,nombre);
                    break;
                case producto4:
                    Compra (precio4,nombre);
                    break;
                case producto5:
                    Compra (precio5,nombre);
                    break;
            }
            
        }else{alert("Articulo inexistente por favor elija otro producto ");
            
        }
        
        
    } while (nombre != "");
    menu()

    
}

function total(){
    alert("El total de su compra es de $"+preciototal);
    alert("Gracias por su compra");
}


menu()