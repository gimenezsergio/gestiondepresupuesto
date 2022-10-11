let ingreso = function () {
    let ingreso = parseInt(document.querySelector('#ingreso').value)
    let ingresado = parseInt(document.querySelector('#ingresado').innerText)
    let calculo = ingresado + ingreso
    document.querySelector('#ingresado').innerText = calculo
    balance()
}

let egreso = function () {
    let egreso = parseInt(document.querySelector('#egreso').value)
    let egresado = parseInt(document.querySelector('#gastado').innerText)
    let calculo = egresado + egreso
    document.querySelector('#gastado').innerText = calculo
    balance()
}

let balance = function () {
    let ingresado = parseInt(document.querySelector('#ingresado').innerText)
    let gastado = parseInt(document.querySelector('#gastado').innerText)
    let calculo = ingresado - gastado
    document.querySelector('#balance').innerText = calculo
    grafico(ingresado, gastado)
}


const data = {
    labels: [
      'Gastado',
      'Ingresado'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [gastado, ingresado],
      backgroundColor: [
        'red',
        'green'      ],
      hoverOffset: 4
    }]
  };

let miGrafico = new Chart('myChart', {
    type: 'bar',
    data: data
  })

let grafico = function(ingresado, gastado){
    console.log(ingresado, gastado)
    const data = {
        labels: [
          'Gastado',
          'Ingresado'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [gastado, ingresado],
          backgroundColor: [
            'red',
            'green'      ],
          hoverOffset: 4
        }]
      };
    
      miGrafico.destroy()
      miGrafico = new Chart('myChart', {
        type: 'bar',
        data: data
      })

}

