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

// notas maiores que a média AQP

// 'AQP' '2016-2' 'number': 1
var hseScoresAQP10 = [];
var techScoresAQP10 = [];
for (i in data['AQP']['2016-2']['students']) {
  hseScoresAQP10.push(data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['hse']);
  techScoresAQP10.push(data['AQP']['2016-2']['students'][i]['sprints'][0]['score']['tech']);
}
var avarageHseScoresAQP10 = (hseScoresAQP10.reduce((a, b) => a + b)) / hseScoresAQP10.length ;
var avarageTechScoresAQP10 = (techScoresAQP10.reduce((a, b) => a + b)) / techScoresAQP10.length ;
var totalHseScoresAQP10 = avarageHseScoresAQP10 + avarageTechScoresAQP10;

// // 'AQP' '2016-2' 'number': 2
var hseScoresAQP11 = [];
var techScoresAQP11 = [];
for (i in data['AQP']['2016-2']['students']) {
  hseScoresAQP11.push(data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['hse']);
  techScoresAQP11.push(data['AQP']['2016-2']['students'][i]['sprints'][1]['score']['tech']);
}
var avarageHseScoresAQP11 = (hseScoresAQP11.reduce((a, b) => a + b)) / hseScoresAQP11.length ;
var avarageTechScoresAQP11 = (techScoresAQP11.reduce((a, b) => a + b)) / techScoresAQP11.length ;
var totalHseScoresAQP11 = avarageHseScoresAQP11 + avarageTechScoresAQP11;

// // 'AQP' '2016-2' 'number': 3
var hseScoresAQP12 = [];
var techScoresAQP12 = [];
for (i in data['AQP']['2016-2']['students']) {
  hseScoresAQP12.push(data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['hse']);
  techScoresAQP12.push(data['AQP']['2016-2']['students'][i]['sprints'][2]['score']['tech']);
}
var avarageHseScoresAQP12 = (hseScoresAQP12.reduce((a, b) => a + b)) / hseScoresAQP12.length ;
var avarageTechScoresAQP12 = (techScoresAQP12.reduce((a, b) => a + b)) / techScoresAQP12.length ;
var totalHseScoresAQP12 = avarageHseScoresAQP12 + avarageTechScoresAQP12;

// // 'AQP' '2016-2' 'number': 4
var hseScoresAQP13 = [];
var techScoresAQP13 = [];
for (i in data['AQP']['2016-2']['students']) {
  hseScoresAQP13.push(data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['hse']);
  techScoresAQP13.push(data['AQP']['2016-2']['students'][i]['sprints'][3]['score']['tech']);
}
var avarageHseScoresAQP13 = (hseScoresAQP13.reduce((a, b) => a + b)) / hseScoresAQP13.length ;
var avarageTechScoresAQP13 = (techScoresAQP13.reduce((a, b) => a + b)) / techScoresAQP13.length ;
var totalHseScoresAQP13 = avarageHseScoresAQP13 + avarageTechScoresAQP13;

// // 'AQP' '2017-1' 'number': 1
var hseScoresAQP20 = [];
var techScoresAQP20 = [];
for (i in data['AQP']['2017-1']['students']) {
  hseScoresAQP20.push(data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['hse']);
  techScoresAQP20.push(data['AQP']['2017-1']['students'][i]['sprints'][0]['score']['tech']);
}
var avarageHseScoresAQP20 = (hseScoresAQP20.reduce((a, b) => a + b)) / hseScoresAQP20.length ;
var avarageTechScoresAQP20 = (techScoresAQP20.reduce((a, b) => a + b)) / techScoresAQP20.length ;
var totalHseScoresAQP20 = avarageHseScoresAQP20 + avarageTechScoresAQP20;

// // 'AQP' '2017-1' 'number': 2
var hseScoresAQP21 = [];
var techScoresAQP21 = [];
for (i in data['AQP']['2017-1']['students']) {
  hseScoresAQP21.push(data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['hse']);
  techScoresAQP21.push(data['AQP']['2017-1']['students'][i]['sprints'][1]['score']['tech']);
}
var avarageHseScoresAQP21 = (hseScoresAQP21.reduce((a, b) => a + b)) / hseScoresAQP21.length ;
var avarageTechScoresAQP21 = (techScoresAQP21.reduce((a, b) => a + b)) / techScoresAQP21.length ;
var totalHseScoresAQP21 = avarageHseScoresAQP21 + avarageTechScoresAQP21;

// // 'AQP' '2017-1' 'number': 3
var hseScoresAQP22 = [];
var techScoresAQP22 = [];
for (i in data['AQP']['2017-1']['students']) {
  hseScoresAQP22.push(data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['hse']);
  techScoresAQP22.push(data['AQP']['2017-1']['students'][i]['sprints'][2]['score']['tech']);
}
var avarageHseScoresAQP22 = (hseScoresAQP22.reduce((a, b) => a + b)) / hseScoresAQP22.length ;
var avarageTechScoresAQP22 = (techScoresAQP22.reduce((a, b) => a + b)) / techScoresAQP22.length ;
var totalHseScoresAQP22 = avarageHseScoresAQP22 + avarageTechScoresAQP22;

// gráfico notas maiores que a média AQP
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartGradesAQP);

function curveChartGradesAQP() {
  var chartData = google.visualization.arrayToDataTable([
    ['Sprint', 'Notas HSE', 'Notas Tech', 'Notas Totais'],
    ['Turma 2016-2, sprint 1',avarageHseScoresAQP10,avarageTechScoresAQP10, totalHseScoresAQP10],
    ['Turma 2016-2, sprint 2',avarageHseScoresAQP11,avarageTechScoresAQP11, totalHseScoresAQP11],
    ['Turma 2016-2, sprint 3',avarageHseScoresAQP12,avarageTechScoresAQP12, totalHseScoresAQP12],
    ['Turma 2016-2, sprint 4',avarageHseScoresAQP13,avarageTechScoresAQP13, totalHseScoresAQP13],
    ['Turma 2017-1, sprint 1',avarageHseScoresAQP20,avarageTechScoresAQP20, totalHseScoresAQP20],
    ['Turma 2017-1, sprint 2',avarageHseScoresAQP21,avarageTechScoresAQP21, totalHseScoresAQP21],
    ['Turma 2017-1, sprint 3',avarageHseScoresAQP22,avarageTechScoresAQP22, totalHseScoresAQP22],
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesAQP'));

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





// --------------LABORATÓRIA-------------


// gráfico alunas presentes e desistentes em LAB
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutchartActiveLAB);
function donutchartActiveLAB() {
    
  var activeTrueLab = activeTrueAQP + activeTrueCDMX + activeTrueLIM +activeTrueSCL;
  var activeFalseLab = activeFalseAQP + activeFalseCDMX + activeFalseLIM +activeFalseSCL;
  var chartData = google.visualization.arrayToDataTable([
    ['',''],
    ['presentes',activeTrueLab],
    ['desistentes',activeFalseLab],
  ]);
  var options = {
    title: 'Número de alunas presentes e desistentes na Laboratória',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchartActiveLAB'));
  chart.draw(chartData, options);
}

