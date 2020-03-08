function calc(){
    let cantidad;
    let precio = 19.99;
        event.preventDefault();
    let input = document.getElementById("cantidad");
        cantidad= input.value;
    let costo = precio*cantidad;
        console.log(costo);
        document.getElementById("result").innerText=costo;
}