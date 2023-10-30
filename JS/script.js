const carritoOn=()=>{
    document.querySelector("#carrito").classList.add("carrito-on")
}


setInterval(() => {

    document.querySelector("#carrito").classList.remove("carrito-on")

    setTimeout(() => {
        carritoOn()
    }, 5000);
   
}, 10000);