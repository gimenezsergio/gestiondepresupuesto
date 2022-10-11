// Años, meses. Fecha capturada desde el sistema, la hora del navegador
// Ingresos, egresos con sus categorias 
// Total por mes y total por categoria
// 

let calcularTotal = function () {
    let egreso = parseInt(document.querySelector('#totalEgreso').innerText)
    let ingreso = parseInt(document.querySelector('#totalIngreso').innerText)
    let calculo = ingreso - egreso
    document.querySelector('#total').innerText = calculo
}

let ingreso = function () {
    let ingreso = parseInt(document.querySelector('#ingreso').value)
    let total = parseInt(document.querySelector('#totalIngreso').innerText)
    let calculo = ingreso + total
    document.querySelector('#totalIngreso').innerText = calculo
    calcularTotal()
}


let egreso = function () {
    let egreso = parseInt(document.querySelector('#egreso').value)
    let total = parseInt(document.querySelector('#totalEgreso').innerText)
    let calculo = total + egreso
    document.querySelector('#totalEgreso').innerText = calculo
    calcularTotal()
}




