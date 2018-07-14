// --------------AQP-------------


// alunas presentes e desistentes em AQP
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
// gráfico alunas presentes e desistentes em AQP
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


// alunas presentes e desistentes em CDMX
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
// gráfico alunas presentes e desistentes em CDMX
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





// --------------LIM-------------


// alunas presentes e desistentes em LIM
var activeTrueLIM = 0;
var activeFalseLIM = 0;
for ( turma in data['LIM'])
for ( i in data['LIM'][turma]['students']) {
  if (data['LIM'][turma]['students'][i]['active'] == true) {
    activeTrueLIM++;
  } else if (data['LIM'][turma]['students'][i]['active'] == false) {
    activeFalseLIM++;
  }
  var totalActiveLIM = activeTrueLIM + activeFalseLIM;
}
// gráfico alunas presentes e desistentes em LIM
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutchartActiveLIM);
function donutchartActiveLIM() {
  var chartData = google.visualization.arrayToDataTable([
    ['',''],
    ['presentes',activeTrueLIM],
    ['desistentes',activeFalseLIM],
  ]);
  var options = {
    title: 'Número de alunas presentes e desistentes em Lima',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartActiveLIM'));
  chart.draw(chartData, options);
}




// --------------SCL-------------


// alunas presentes e desistentes em SCL
var activeTrueSCL = 0;
var activeFalseSCL = 0;
for ( turma in data['SCL'])
for ( i in data['SCL'][turma]['students']) {
  if (data['SCL'][turma]['students'][i]['active'] == true) {
    activeTrueSCL++;
  } else if (data['SCL'][turma]['students'][i]['active'] == false) {
    activeFalseSCL++;
  }
  var totalActiveSCL = activeTrueSCL + activeFalseSCL;
}
// gráfico alunas presentes e desistentes em SCL
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutchartActiveSCL);
function donutchartActiveSCL() {
  var chartData = google.visualization.arrayToDataTable([
    ['',''],
    ['presentes',activeTrueSCL],
    ['desistentes',activeFalseSCL],
  ]);
  var options = {
    title: 'Número de alunas presentes e desistentes em Santiago',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartActiveSCL'));
  chart.draw(chartData, options);
}