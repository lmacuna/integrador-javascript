let modal=false;


const mensajeria=()=>{

   Swal.fire({
    title:'Bienvenidos a Ovalo Virtual',
    background:'white',
    color:'black',
    width:'500px',
    showConfirmButton:false,
    showCancelButton:true,
    html:`<div style="font-family:'Nunito','Serif';z-index:4;position:relative !importante">
    <p><b>Servicio</b>, de compra Virtual<br>
    <b>Fácil</b> Ingresa, compras y te lo llevamos.<br>
     <b>Ingresa a Compra virtual desde el menú <br>
     de navegación!!!.</b>
     </p>
    </div>

    `,
    cancelButtonText:'<span style="border:none !important;font-size:16px;color:white;font-weight:bold">X</span>',
   })
 

}

if(sessionStorage.getItem("modal")===null){
    mensajeria()
    modal=true;
    sessionStorage.setItem("modal",modal)
}


const getFotos=async()=>{
    let data,token;
    let metodo='GET'
    let url='Mock/data.json'
    var fotos=await services(data,metodo,url,token)
        fotos=await fotos.data
    return(console.log(fotos),localStorage.setItem("fotos",JSON.stringify(fotos)))
}

getFotos()

var i=1;
 const homeFotos=(fotos)=>{

    fotos=localStorage.getItem("fotos")
    fotos=JSON.parse(fotos)

    document.querySelector("#fotos").innerHTML=`
    <img src=${fotos[i-1].img} alt="imagen"></img>
    `

} 
homeFotos(fotos)

setInterval(() => {
    


        i++
        if(i===5){
            i=1
        }
    

    homeFotos(fotos)
}, 3000);




const getTarjetas=async()=>{
    var data,token;
    var url='Mock/tarjetas.json'
    var metodo='GET'
    let res=await services(data,metodo,url,token)
        res=await res.data
    return(console.log(res),localStorage.setItem("tarjetas",JSON.stringify(res)))
}


getTarjetas()


const vistaTarjetas=()=>{

    tarjetas=localStorage.getItem("tarjetas")
    tarjetas=JSON.parse(tarjetas)

    tarjetas.forEach(tarj => {
        document.querySelector("#tarjetas").innerHTML+=`
            <img class="img-tarjetas" src=${tarj.img} alt="trajetas"></img>
        `
    });

}

vistaTarjetas()

