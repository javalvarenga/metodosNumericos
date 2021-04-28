
 /* var puntoInicial=document.getElementById('punto-inicial') */

//evaluar x en la funcion
function f(x) {
    eval=x**3-Math.cos(x)
    return eval
}
//obtener la derivada
function df(x) {
    return 3*x**2+Math.sin(x)
}

function newtonRapson(X0,n) {
    let X1=0
    for (let i = 1; i < n; i++) {
        X1=X0-f(X0)/df(X0)
        X0=X1
        console.log("x "+i+" = "+X1)
    }
    console.log(X0)
    return {raiz:X1,error:Math.abs(X1-X0)}
}


var btn = document.getElementById('btn-extract');
var parentResult=document.getElementById('box1')

var raizChild=document.createElement("p")
var errorChild=document.createElement("p")

var txtRaiz="Raiz: "+newtonRapson(1,10).raiz
var txtError="Error: "+newtonRapson(1,10).error

btn.addEventListener('click',()=>{
    raizChild.textContent=txtRaiz
    parentResult.appendChild(raizChild)
    errorChild.textContent=txtError+"%"
    parentResult.appendChild(errorChild)
}) 