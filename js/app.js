// --------------AQP-------------


// ativas e desativas em AQP
var activeTrueAQP = 0;
var activeFalseAQP = 0;
for ( turma in data['AQP'])
for ( i in data['AQP'][turma]['students']) {
  if (data['AQP'][turma]['students'][i]['active'] == true) {
    activeTrueAQP++;
  } else if (data['AQP'][turma]['students'][i]['active'] == false) {
    activeFalseAQP++;
  }
  var totalActiveAQP = activeTrueAQP + activeFalseAQP;
}
// gráfico ativas e desativas em AQP
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutchartActiveAQP);
function donutchartActiveAQP() {
  var chartData = google.visualization.arrayToDataTable([
    ['',''],
    ['presentes',activeTrueAQP],
    ['desistentes',activeFalseAQP],
  ]);
  var options = {
    title: 'Número de alunas presentes e desistentes em Arequipa',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartActiveAQP'));
  chart.draw(chartData, options);
}





// --------------CDMX-------------


// ativas e desativas em CDMX
var activeTrueCDMX = 0;
var activeFalseCDMX = 0;
for ( turma in data['CDMX'])
for ( i in data['CDMX'][turma]['students']) {
  if (data['CDMX'][turma]['students'][i]['active'] == true) {
    activeTrueCDMX++;
  } else if (data['CDMX'][turma]['students'][i]['active'] == false) {
    activeFalseCDMX++;
  }
  var totalActiveCDMX = activeTrueCDMX + activeFalseCDMX;
}
// gráfico ativas e desativas em AQP
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutchartActiveCDMX);
function donutchartActiveCDMX() {
  var chartData = google.visualization.arrayToDataTable([
    ['',''],
    ['presentes',activeTrueCDMX],
    ['desistentes',activeFalseCDMX],
  ]);
  var options = {
    title: 'Número de alunas presentes e desistentes na Cidade do México',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartActiveCDMX'));
  chart.draw(chartData, options);
}