// let ropa=[];

// class ropero{
//     constructor(nombre[], argumento, precio ){
//         this.nombre[]=nombre[];
//         this.argumento=argumento;
//         this.precio=precio;
//     }


function calc(){
    let cantidad;
    let precio = 19.99;
        event.preventDefault();
    let input = document.getElementById("cantidad");
        cantidad= input.value;
    let costo = Math.round(precio*cantidad);
        // console.log(costo);
        document.getElementById("result").innerText=costo;
}
// for (let i = 0;  i< arr.length; i++) {
//     for (let j = 0; j < ropa.length; j++)
//         if (this.nombre[j]=arr[i])

//      document.getElementById("result").innerText={Una $cantidad de $this.nombre tiene un importe de $costo };
            
       
//   }
// }

// // base de datos
// En esta seccion el usuario podra insertar sus productos con una breve descripcion
// de como seria su producto a vender y se le hara una tarifa a los clientes habituales   