

const getArticulos = async () => {

    var data, token;
    var metodo = 'GET'
    var url = '../Mock/articulos.json'
    var res = await services(data, metodo, url, token)
    res = await res.data
    return (console.log(res), localStorage.setItem("articulos", JSON.stringify(res)))

}


getArticulos()

const vistaArticulos = () => {

    let articulos = localStorage.getItem("articulos")
    articulos = JSON.parse(articulos)

    articulos.forEach(art => {
        document.querySelector("#root").innerHTML += `
        <div class="tarjeta">

           <div class="item">
           <img src=${art.img} alt=""></img>
           <p>COD: ${art.codigo}</p>
           <p>Desc: ${art.descripcion}</p>
           <p>Antes: <strike>$${art.precioAnt}</strike></p>
           <p><b>Ahora: $${art.precio}</b></p>
           <p><b>${art.stock}</b></p>
            </div>
            <button onclick="modalVenta(id)" id=${art.codigo} class="btn-agregar">Agregar</button>
        </div>
        `
    });
}


vistaArticulos()




const modalVenta = (id) => {
    console.log(id)
    id = parseInt(id)
    let articulos = localStorage.getItem("articulos")
    articulos = JSON.parse(articulos)

    var art = articulos.find(ar => id === ar.codigo)
    console.log(art)

    Swal.fire({
        text: 'Agregar?',
        width: '500px',
        background: 'white',

        html: `
            
               <div style="text-align-center !important;background:whie;color:black;font-size:14px">
               <h4 style="color:black;font-size:16px">Agregar cantidad?</h4><br>
               <img src=${art.img} style="width:200px;heihgt:200px;border-radius:5px"></img>
               <b><p>${art.descripcion}<p>
               <p>Antes: <strike>${art.precioAnt}</strike></p>
               <p>Precio: ${art.precio}<p></b>
               <input type="number" min="1" id="cantidad" placeholder="cantidad"></input><br>
               
               </div>
            `,
           
        confirmButtonText: 'Agregar',
        denyButtonText: `Cancelar`,
        showConfirmButton: true,
        showCancelButton: true,
        //cancelButtonText:'<span id="salir" style="border:none !important;font-size:16px;color:white;font-weight:bold" value="false">X</span>',
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            id = art.codigo
            confirmCantidad(art)
        }else{
            Swal.fire({
                text: 'Cancelaste agregar',
                width: '200px',
                timer: 3000,
                showCancelButton: false,
                showConfirmButton: false
            })
        }
    })

}

//<button id=${id} onclick="confirmCantidad(id)">Añadir cantidad</button>

var ticket=[];
const confirmCantidad = (art) => {
    let cantidad = document.querySelector("#cantidad").value
    console.log(art)
      var compra={
        codigo:art.codigo,
        articulo:art.descripcion,
        cant:cantidad,
        precio:art.precio*cantidad,
      }

      ticket.push(compra)
      sessionStorage.setItem("ticket",JSON.stringify(ticket))
      ticket=sessionStorage.getItem("ticket")
      ticket=JSON.parse(ticket)
    console.log(`la cantidad es ${cantidad}`)
    setTimeout(() => {
        window.location.href="#arriba"
        console.log(ticket)
    }, 500);

    ticket.length>=1?(document.querySelector("#compras").classList.add("compras-on"),document.querySelector("#compras").innerHTML=`<span class="vista-cant">${ticket.length}</span><i class="fa-solid fa-cart-shopping">`):null

}

ticket=sessionStorage.getItem("ticket")
ticket=JSON.parse(ticket)
ticket.length>=1&&sessionStorage.getItem("ticket")!==null?(document.querySelector("#compras").classList.add("compras-on"),document.querySelector("#compras").innerHTML=`<span class="vista-cant">${ticket.length}</span><i class="fa-solid fa-cart-shopping">`):null