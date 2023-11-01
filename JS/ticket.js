let vista;
      const mostrar=()=>{
        document.querySelector("#mostrar-ticket").classList.add("mostrar-ticket-on")
          let factura= sessionStorage.getItem("ticket")
          factura=JSON.parse(factura)
          console.log(factura)
        factura.forEach(f =>{

            document.querySelector("#mostrar-ticket").innerHTML+=
                  `
                  <p>${f.articulo}</p>
                  `
               
          })

          document.querySelector("#mostrar-ticket").innerHTML+='<div style=display:flex""><button class="btn-pagar">Pagar</button> <button onclick="salir()" class="btn-salir">X</button></div>'
         

        
      }



      const salir=()=>{
        document.querySelector("#mostrar-ticket").classList.remove("mostrar-ticket-on")
        document.querySelector("#mostrar-ticket").innerHTML=""
      }
