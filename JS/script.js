const carritoOn=()=>{
    document.querySelector("#carrito").classList.add("carrito-on")
}


setInterval(() => {

    document.querySelector("#carrito").classList.remove("carrito-on")

    setTimeout(() => {
        carritoOn()
    }, 5000);
   
}, 10000);


if(sessionStorage.getItem("ticket")!==null){
    ticket=sessionStorage.getItem("ticket")
    ticket=JSON.parse(ticket)
       document.querySelector("#compras").classList.add("compras-on"),document.querySelector("#compras").innerHTML=`<span class="vista-cant">${ticket.length}</span><i class="fa-solid fa-cart-shopping">`
  }


