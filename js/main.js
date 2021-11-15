const priceHoddie = 1500;
const priceTshirt = 800;
const priceCap = 600;
let hoddieQty = 0;
let tshirtQty = 0;
let capQty = 0;
let prod1 = [];
let finalPrice = 0;
class Product {
    constructor(type, price, quantity) {
        this.name = type;
        this.precio = parseInt(price);
        this.qty = quantity;
    }
}
function options() {
    let menu
    do {
        menu = prompt("Bieveni@ a IBASHO, ingresa una opcion del menu:" + "\n 1-Agregar productos al carrito");
        if (menu == 1) {
            addProducts();
        }
    } while (menu != 1);
}
//agrega la cantidad deseada y con un for el color de los items
function add() {
    qty = parseInt(prompt("Ingrese la cantidad deseada del producto"));
    return qty;
}
function addProducts() {
    let flag = 0;
    let option;
    let menu = 0;
    do {
        do {

            let option = prompt("Ingresa una item a agregar:"
                + "\n 1-Buzo"
                + "\n 2-Remera"
                + "\n 3-Gorra"
            );
            switch (option) {
                case '1':
                    prod1.push(new Product("Buzo", priceHoddie, add()));
                    break;
                case '2':
                    prod1.push(new Product("Remera", priceTshirt, add()));
                    break;
                case '3':
                    prod1.push(new Product("Gorra", priceCap, add()));
                    break;
                default:
                    alert("la opcion no es correcta")

            }
        } while (option == 1 || option == 2 || option == 3);

        do {
            menu = prompt("Ingrese una opcion"
                + "\n 1-Agregar un producto"
                + "\n 2-Ver los productos agregados y el precio final"
            );
            switch (menu) {
                case '1':
                    flag = 1;
                    break;
                case '2':
                    flag=2;
                    all();
                    break;
                default:
                    alert("la opcion no es correcta")
            }
        }while(menu!=1&&menu!=2)

    } while (flag == 1&&flag!=2);
}
// busca en todo el array los productos con el mismo nombre y suma las cantidades para tener una cantidad final
function find(nameProduct) {
    let finalQty = 0;
    const filtered = prod1.filter(producto => producto.name == nameProduct);
    for (const prod of filtered) {
        finalQty += prod.qty
    }
    if (finalQty != 0) {
        return finalQty;
    }
}
// muestra todos los productos agregados y el precio final
function all() {
    if (prod1) {
        console.log(prod1);
        hoddieQty = find("Buzo");
        if (hoddieQty > 0) {
            console.log("Cantidad de Buzos: " + hoddieQty + "\nPrecio de unidad: " + priceHoddie);
            finalPrice += hoddieQty * priceHoddie;
        }
        tshirtQty = find("Remera");
        if (tshirtQty > 0) {
            console.log("Cantidad de Remeras: " + tshirtQty + "\nPrecio de unidad: " + priceTshirt);
            finalPrice += tshirtQty * priceTshirt;
        }
        capQty = find("Gorra");
        if (capQty > 0) {
            console.log("Cantidad de Gorras: " + capQty + "\nPrecio de unidad: " + priceCap);
            finalPrice += capQty * priceCap;
        }

        console.log("Total: " + finalPrice);

    }
}
options();




