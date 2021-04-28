//evaluar x en la funcion
function f(x) {
    eval=Math.cos(x)-x**3;
    return eval
}
//obtener la derivada
function df(x) {
    return Math.sin(x)-3*x**2
}

function newtonRapson(X0,total,n) {
    for (let i = 0; i < n; i++) {
        let X1=X0-f(X0)/df(X0)
        if (Math.abs(X1-X0)<total) {
            print("x "+k+1+"="+x1+"es la raiz")
            return
        }
        X0=X1
        print("x "+k+1+"="+x1)

    }
}

console.log(newtonRapson(Math.PI,0.0000001,10))