

const getArticulos = async () => {

    var data, token;
    var metodo = 'GET'
    var url = '../Mock/articulos.json'
    var res = await services(data, metodo, url, token)
        res=await res.data   
    return (console.log(res),localStorage.setItem("articulos",JSON.stringify(res)))

}


getArticulos()

const vistaArticulos=()=>{

   let articulos=localStorage.getItem("articulos")
    articulos=JSON.parse(articulos)

    articulos.forEach(art => {
        document.querySelector("#root").innerHTML+=`
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




const modalVenta=(id)=>{
   console.log(id)
   let articulos=localStorage.getItem("articulos")
         articulos=JSON.parse(articulos)

          Swal.fire({
           
            html:`
            
               <div style="text-align-center !important;width:200px;background:white;color:black">
               <h4>Agregar cantidad</h4>
               <input id="cantidad" placeholder="cantidad"></input><br>
               <button id=${id} onclick="confirmCantidad(id)">Añadir cantidad</button>
               </div>
            `,
            showConfirmButton:false,
            showCancelButton:true,
            cancelButtonText:'<span id="salir" style="border:none !important;font-size:16px;color:white;font-weight:bold" value="false">X</span>',
          })

}




const confirmCantidad=(id)=>{
   let cantidad=document.querySelector("#cantidad").value
        console.log(id)
        console.log(`la cantidad es ${cantidad}`)
        

        
}