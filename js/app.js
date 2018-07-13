
  for (sede in data){ 
    for ( turma in sede){
      for (students in turma)
      for (i in data[sede][turma][students]){
        var active = data[sede][turma][students][2]
      }
    }
  }

console.log(active);




    
// gráfico rosquinha de alunas presentes e desistentes na Laboratória 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);}

  console.log(data);