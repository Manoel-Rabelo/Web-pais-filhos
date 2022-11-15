let file = "./teste.json"
fetch (file)
.then(x => x.json())
.then(y => {
  const respostas =  y;
  console.log(respostas);
});







const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

const labels = [
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado',
      'Domingo',
    ];
  
const data = {
      labels: labels,
      datasets: [{
        label: 'Relatorio Semanal',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [{x: "Segunda", y: 5}, {x: "Terça", y: 6}, {x: "Quarta", y: 4}, {x: "Quinta", y: 8}, {x: "Sexta", y: 7}, {x: "Sabado", y: 2}, {x: "Domingo", y: 10}]
      }]
    };
  
const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            type: 'linear',
            min: 0,
            max: 10
        }
        },
        layout: {
            padding: 20
        }
      },
      plugins: [plugin],
    };


const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );