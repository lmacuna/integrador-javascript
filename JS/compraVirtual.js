

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
            <button class="btn-agregar">Agregar</button>
        </div>
        `
    });
}


vistaArticulos()