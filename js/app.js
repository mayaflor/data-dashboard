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
    title: 'Média de notas em Arequipa',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesAQP'));

  chart.draw(chartData, options);
}

// O percentual de alunas satisfeitas com a experiência da Laboratória de AQP 2016-2
var noCumpleAQP1 = [] ;
var cumpleAQP1 = [] ;
var superaAQP1 = [] ;
for (i in data['AQP']['2016-2']['ratings']) {
  noCumpleAQP1.push(data['AQP']['2016-2']['ratings'][i]['student']['no-cumple']);
  cumpleAQP1.push(data['AQP']['2016-2']['ratings'][i]['student']['cumple']);
  superaAQP1.push(data['AQP']['2016-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleAQP1 = (noCumpleAQP1.reduce((a, b) => a + b)) / noCumpleAQP1.length ;
var averageCumpleAQP1 = (cumpleAQP1.reduce((a, b) => a + b)) / cumpleAQP1.length ;
var averagesuperaAQP1 = (superaAQP1.reduce((a, b) => a + b)) / superaAQP1.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de AQP 2017-1
var noCumpleAQP2 = [] ;
var cumpleAQP2 = [] ;
var superaAQP2 = [] ;
for (i in data['AQP']['2017-1']['ratings']) {
  noCumpleAQP2.push(data['AQP']['2017-1']['ratings'][i]['student']['no-cumple']);
  cumpleAQP2.push(data['AQP']['2017-1']['ratings'][i]['student']['cumple']);
  superaAQP2.push(data['AQP']['2017-1']['ratings'][i]['student']['supera']);
}
var averageNoCumpleAQP2 = (noCumpleAQP2.reduce((a, b) => a + b)) / noCumpleAQP2.length ;
var averageCumpleAQP2 = (cumpleAQP2.reduce((a, b) => a + b)) / cumpleAQP2.length ;
var averagesuperaAQP2 = (superaAQP2.reduce((a, b) => a + b)) / superaAQP2.length ;

// Gráfico do percentual de alunas satisfeitas com a experiência da Laboratória de AQP

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartSatisfiedAQP);

function curveChartSatisfiedAQP() {
  var chartData = google.visualization.arrayToDataTable([
    ['Turma', 'Insatisfeita', 'Satisfeita', 'Muito Satisfeita'],
    ['Turma 2016-2',averageNoCumpleAQP1,averageCumpleAQP1, averagesuperaAQP1],
    ['Turma 2017-1',averageNoCumpleAQP2,averageCumpleAQP2, averagesuperaAQP2],
  ]);

  var options = {
    title: 'Média de alunas satisfeitas com a experiência da Laboratória de Arequipa',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartSatisfiedAQP'));

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


// notas maiores que a média CDMX

// 'CDMX' '2017-1' 'number': 1
var hseScoresCDMX10 = [];
var techScoresCDMX10 = [];
for (i in data['CDMX']['2017-1']['students']) {
  hseScoresCDMX10.push(data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['hse']);
  techScoresCDMX10.push(data['CDMX']['2017-1']['students'][i]['sprints'][0]['score']['tech']);
}
var avarageHseScoresCDMX10 = (hseScoresCDMX10.reduce((a, b) => a + b)) / hseScoresCDMX10.length ;
var avarageTechScoresCDMX10 = (techScoresCDMX10.reduce((a, b) => a + b)) / techScoresCDMX10.length ;
var totalHseScoresCDMX10 = avarageHseScoresCDMX10 + avarageTechScoresCDMX10;

// 'CDMX' '2017-1' 'number': 2
var hseScoresCDMX11 = [];
var techScoresCDMX11 = [];
for (i in data['CDMX']['2017-1']['students']) {
  hseScoresCDMX11.push(data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['hse']);
  techScoresCDMX11.push(data['CDMX']['2017-1']['students'][i]['sprints'][1]['score']['tech']);
}
var avarageHseScoresCDMX11 = (hseScoresCDMX11.reduce((a, b) => a + b)) / hseScoresCDMX11.length ;
var avarageTechScoresCDMX11 = (techScoresCDMX11.reduce((a, b) => a + b)) / techScoresCDMX11.length ;
var totalHseScoresCDMX11 = avarageHseScoresCDMX11 + avarageTechScoresCDMX11;

// 'CDMX' '2017-1' 'number': 3
var hseScoresCDMX12 = [];
var techScoresCDMX12 = [];
for (i in data['CDMX']['2017-1']['students']) {
  hseScoresCDMX12.push(data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['hse']);
  techScoresCDMX12.push(data['CDMX']['2017-1']['students'][i]['sprints'][2]['score']['tech']);
}
var avarageHseScoresCDMX12 = (hseScoresCDMX12.reduce((a, b) => a + b)) / hseScoresCDMX12.length ;
var avarageTechScoresCDMX12 = (techScoresCDMX12.reduce((a, b) => a + b)) / techScoresCDMX12.length ;
var totalHseScoresCDMX12 = avarageHseScoresCDMX12 + avarageTechScoresCDMX12;

// 'CDMX' '2017-2' 'number': 1
var hseScoresCDMX20 = [];
var techScoresCDMX20 = [];
for (i in data['CDMX']['2017-2']['students']) {
  if (data['CDMX']['2017-2']['students'][i]['active'] === true ){
    hseScoresCDMX20.push(data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['hse']);
    techScoresCDMX20.push(data['CDMX']['2017-2']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresCDMX20 = (hseScoresCDMX20.reduce((a, b) => a + b)) / hseScoresCDMX20.length ;
var avarageTechScoresCDMX20 = (techScoresCDMX20.reduce((a, b) => a + b)) / techScoresCDMX20.length ;
var totalHseScoresCDMX20 = avarageHseScoresCDMX20 + avarageTechScoresCDMX20;

// 'CDMX' '2017-2' 'number': 2
var hseScoresCDMX21 = [];
var techScoresCDMX21 = [];
for (i in data['CDMX']['2017-2']['students']) {
  if (data['CDMX']['2017-2']['students'][i]['active'] === true ){
  hseScoresCDMX21.push(data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['hse']);
  techScoresCDMX21.push(data['CDMX']['2017-2']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresCDMX21 = (hseScoresCDMX21.reduce((a, b) => a + b)) / hseScoresCDMX21.length ;
var avarageTechScoresCDMX21 = (techScoresCDMX21.reduce((a, b) => a + b)) / techScoresCDMX21.length ;
var totalHseScoresCDMX21 = avarageHseScoresCDMX21 + avarageTechScoresCDMX21;

// gráfico notas maiores que a média CDMX
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartGradesCDMX);

function curveChartGradesCDMX() {
  var chartData = google.visualization.arrayToDataTable([
    ['Sprint', 'Notas HSE', 'Notas Tech', 'Notas Totais'],
    ['Turma 2017-1, sprint 1',avarageHseScoresCDMX10,avarageTechScoresCDMX10, totalHseScoresCDMX10],
    ['Turma 2017-1, sprint 2',avarageHseScoresCDMX11,avarageTechScoresCDMX11, totalHseScoresCDMX11],
    ['Turma 2017-1, sprint 3',avarageHseScoresCDMX12,avarageTechScoresCDMX12, totalHseScoresCDMX12],
    ['Turma 2017-2, sprint 1',avarageHseScoresCDMX20,avarageTechScoresCDMX20, totalHseScoresCDMX20],
    ['Turma 2017-2, sprint 2',avarageHseScoresCDMX21,avarageTechScoresCDMX21, totalHseScoresCDMX21]
  ]);

  var options = {
    title: 'Média de notas na Cidade do México',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesCDMX'));

  chart.draw(chartData, options);
}





// O percentual de alunas satisfeitas com a experiência da Laboratória de CDMX 2017-1
var noCumpleCDMX1 = [] ;
var cumpleCDMX1 = [] ;
var superaCDMX1 = [] ;
for (i in data['CDMX']['2017-1']['ratings']) {
  noCumpleCDMX1.push(data['CDMX']['2017-1']['ratings'][i]['student']['no-cumple']);
  cumpleCDMX1.push(data['CDMX']['2017-1']['ratings'][i]['student']['cumple']);
  superaCDMX1.push(data['CDMX']['2017-1']['ratings'][i]['student']['supera']);
}
var averageNoCumpleCDMX1 = (noCumpleCDMX1.reduce((a, b) => a + b)) / noCumpleCDMX1.length ;
var averageCumpleCDMX1 = (cumpleCDMX1.reduce((a, b) => a + b)) / cumpleCDMX1.length ;
var averagesuperaCDMX1 = (superaCDMX1.reduce((a, b) => a + b)) / superaCDMX1.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de CDMX 2017-2
var noCumpleCDMX2 = [] ;
var cumpleCDMX2 = [] ;
var superaCDMX2 = [] ;
for (i in data['CDMX']['2017-2']['ratings']) {
  noCumpleCDMX2.push(data['CDMX']['2017-2']['ratings'][i]['student']['no-cumple']);
  cumpleCDMX2.push(data['CDMX']['2017-2']['ratings'][i]['student']['cumple']);
  superaCDMX2.push(data['CDMX']['2017-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleCDMX2 = (noCumpleCDMX2.reduce((a, b) => a + b)) / noCumpleCDMX2.length ;
var averageCumpleCDMX2 = (cumpleCDMX2.reduce((a, b) => a + b)) / cumpleCDMX2.length ;
var averagesuperaCDMX2 = (superaCDMX2.reduce((a, b) => a + b)) / superaCDMX2.length ;

// Gráfico do percentual de alunas satisfeitas com a experiência da Laboratória de CDMX

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartSatisfiedCDMX);

function curveChartSatisfiedCDMX() {
  var chartData = google.visualization.arrayToDataTable([
    ['Turma', 'Insatisfeita', 'Satisfeita', 'Muito Satisfeita'],
    ['Turma 2016-2',averageNoCumpleCDMX1,averageCumpleCDMX1, averagesuperaCDMX1],
    ['Turma 2017-1',averageNoCumpleCDMX2,averageCumpleCDMX2, averagesuperaCDMX2],
  ]);

  var options = {
    title: 'Média de alunas satisfeitas com a experiência da Laboratória na Cidade do México',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartSatisfiedCDMX'));

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



// notas maiores que a média LIM

// 'LIM' '2016-2' 'number': 1
var hseScoresLIM10 = [];
var techScoresLIM10 = [];
for (i in data['LIM']['2016-2']['students']) {
  if (data['LIM']['2016-2']['students'][i]['active'] === true ){
    hseScoresLIM10.push(data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['hse']);
    techScoresLIM10.push(data['LIM']['2016-2']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresLIM10 = (hseScoresLIM10.reduce((a, b) => a + b)) / hseScoresLIM10.length ;
var avarageTechScoresLIM10 = (techScoresLIM10.reduce((a, b) => a + b)) / techScoresLIM10.length ;
var totalHseScoresLIM10 = avarageHseScoresLIM10 + avarageTechScoresLIM10;

// 'LIM' '2016-2' 'number': 2
var hseScoresLIM11 = [];
var techScoresLIM11 = [];
for (i in data['LIM']['2016-2']['students']) {
  if (data['LIM']['2016-2']['students'][i]['active'] === true ){
    hseScoresLIM11.push(data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['hse']);
    techScoresLIM11.push(data['LIM']['2016-2']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresLIM11 = (hseScoresLIM11.reduce((a, b) => a + b)) / hseScoresLIM11.length ;
var avarageTechScoresLIM11 = (techScoresLIM11.reduce((a, b) => a + b)) / techScoresLIM11.length ;
var totalHseScoresLIM11 = avarageHseScoresLIM11 + avarageTechScoresLIM11;

// 'LIM' '2017-1' 'number': 1
var hseScoresLIM20 = [];
var techScoresLIM20 = [];
for (i in data['LIM']['2017-1']['students']) {
  if (data['LIM']['2017-1']['students'][i]['active'] === true ){
    hseScoresLIM20.push(data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['hse']);
    techScoresLIM20.push(data['LIM']['2017-1']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresLIM20 = (hseScoresLIM20.reduce((a, b) => a + b)) / hseScoresLIM20.length ;
var avarageTechScoresLIM20 = (techScoresLIM20.reduce((a, b) => a + b)) / techScoresLIM20.length ;
var totalHseScoresLIM20 = avarageHseScoresLIM20 + avarageTechScoresLIM20;

// 'LIM' '2017-1' 'number': 2
var hseScoresLIM21 = [];
var techScoresLIM21 = [];
for (i in data['LIM']['2017-1']['students']) {
  if (data['LIM']['2017-1']['students'][i]['active'] === true ){
    hseScoresLIM21.push(data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['hse']);
    techScoresLIM21.push(data['LIM']['2017-1']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresLIM21 = (hseScoresLIM21.reduce((a, b) => a + b)) / hseScoresLIM21.length ;
var avarageTechScoresLIM21 = (techScoresLIM21.reduce((a, b) => a + b)) / techScoresLIM21.length ;
var totalHseScoresLIM21 = avarageHseScoresLIM21 + avarageTechScoresLIM21;

// 'LIM' '2017-1' 'number': 3
var hseScoresLIM22 = [];
var techScoresLIM22 = [];
for (i in data['LIM']['2017-1']['students']) {
  if (data['LIM']['2017-1']['students'][i]['active'] === true ){
    hseScoresLIM22.push(data['LIM']['2017-1']['students'][i]['sprints'][2]['score']['hse']);
    techScoresLIM22.push(data['LIM']['2017-1']['students'][i]['sprints'][2]['score']['tech']);}
}
var avarageHseScoresLIM22 = (hseScoresLIM22.reduce((a, b) => a + b)) / hseScoresLIM22.length ;
var avarageTechScoresLIM22 = (techScoresLIM22.reduce((a, b) => a + b)) / techScoresLIM22.length ;
var totalHseScoresLIM22 = avarageHseScoresLIM22 + avarageTechScoresLIM22;

// 'LIM' '2017-1' 'number': 4
var hseScoresLIM23 = [];
var techScoresLIM23 = [];
for (i in data['LIM']['2017-1']['students']) {
  if (data['LIM']['2017-1']['students'][i]['active'] === true ){
    hseScoresLIM23.push(data['LIM']['2017-1']['students'][i]['sprints'][3]['score']['hse']);
    techScoresLIM23.push(data['LIM']['2017-1']['students'][i]['sprints'][3]['score']['tech']);}
}
var avarageHseScoresLIM23 = (hseScoresLIM23.reduce((a, b) => a + b)) / hseScoresLIM23.length ;
var avarageTechScoresLIM23 = (techScoresLIM23.reduce((a, b) => a + b)) / techScoresLIM23.length ;
var totalHseScoresLIM23 = avarageHseScoresLIM23 + avarageTechScoresLIM23;

// 'LIM' '2017-2' 'number': 1
var hseScoresLIM30 = [];
var techScoresLIM30 = [];
for (i in data['LIM']['2017-2']['students']) {
  if (data['LIM']['2017-2']['students'][i]['active'] === true ){
    hseScoresLIM30.push(data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['hse']);
    techScoresLIM30.push(data['LIM']['2017-2']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresLIM30 = (hseScoresLIM30.reduce((a, b) => a + b)) / hseScoresLIM30.length ;
var avarageTechScoresLIM30 = (techScoresLIM30.reduce((a, b) => a + b)) / techScoresLIM30.length ;
var totalHseScoresLIM30 = avarageHseScoresLIM30 + avarageTechScoresLIM30;

// 'LIM' '2017-2' 'number': 2
var hseScoresLIM31 = [];
var techScoresLIM31 = [];
for (i in data['LIM']['2017-2']['students']) {
  if (data['LIM']['2017-2']['students'][i]['active'] === true ){
    hseScoresLIM31.push(data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['hse']);
    techScoresLIM31.push(data['LIM']['2017-2']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresLIM31 = (hseScoresLIM31.reduce((a, b) => a + b)) / hseScoresLIM31.length ;
var avarageTechScoresLIM31 = (techScoresLIM31.reduce((a, b) => a + b)) / techScoresLIM31.length ;
var totalHseScoresLIM31 = avarageHseScoresLIM31 + avarageTechScoresLIM31;

// gráfico notas maiores que a média LIM
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartGradesLIM);

function curveChartGradesLIM() {
  var chartData = google.visualization.arrayToDataTable([
    ['Sprint', 'Notas HSE', 'Notas Tech', 'Notas Totais'],
    ['Turma 2016-2, sprint 1',avarageHseScoresLIM10,avarageTechScoresLIM10, totalHseScoresLIM10],
    ['Turma 2016-2, sprint 2',avarageHseScoresLIM11,avarageTechScoresLIM11, totalHseScoresLIM11],
    ['Turma 2017-1, sprint 1',avarageHseScoresLIM20,avarageTechScoresLIM20, totalHseScoresLIM20],
    ['Turma 2017-1, sprint 2',avarageHseScoresLIM21,avarageTechScoresLIM21, totalHseScoresLIM21],
    ['Turma 2017-1, sprint 3',avarageHseScoresLIM22,avarageTechScoresLIM22, totalHseScoresLIM22],
    ['Turma 2017-1, sprint 4',avarageHseScoresLIM23,avarageTechScoresLIM23, totalHseScoresLIM23],
    ['Turma 2017-2, sprint 1',avarageHseScoresLIM30,avarageTechScoresLIM30, totalHseScoresLIM30],
    ['Turma 2017-2, sprint 2',avarageHseScoresLIM31,avarageTechScoresLIM31, totalHseScoresLIM31]
  ]);

  var options = {
    title: 'Média de notas em Lima',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesLIM'));

  chart.draw(chartData, options);
}




// O percentual de alunas satisfeitas com a experiência da Laboratória de LIM 2016-2
var noCumpleLIM1 = [] ;
var cumpleLIM1 = [] ;
var superaLIM1 = [] ;
for (i in data['LIM']['2016-2']['ratings']) {
  noCumpleLIM1.push(data['LIM']['2016-2']['ratings'][i]['student']['no-cumple']);
  cumpleLIM1.push(data['LIM']['2016-2']['ratings'][i]['student']['cumple']);
  superaLIM1.push(data['LIM']['2016-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleLIM1 = (noCumpleLIM1.reduce((a, b) => a + b)) / noCumpleLIM1.length ;
var averageCumpleLIM1 = (cumpleLIM1.reduce((a, b) => a + b)) / cumpleLIM1.length ;
var averagesuperaLIM1 = (superaLIM1.reduce((a, b) => a + b)) / superaLIM1.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de LIM 2017-1
var noCumpleLIM2 = [] ;
var cumpleLIM2 = [] ;
var superaLIM2 = [] ;
for (i in data['LIM']['2017-1']['ratings']) {
  noCumpleLIM2.push(data['LIM']['2017-1']['ratings'][i]['student']['no-cumple']);
  cumpleLIM2.push(data['LIM']['2017-1']['ratings'][i]['student']['cumple']);
  superaLIM2.push(data['LIM']['2017-1']['ratings'][i]['student']['supera']);
}
var averageNoCumpleLIM2 = (noCumpleLIM2.reduce((a, b) => a + b)) / noCumpleLIM2.length ;
var averageCumpleLIM2 = (cumpleLIM2.reduce((a, b) => a + b)) / cumpleLIM2.length ;
var averagesuperaLIM2 = (superaLIM2.reduce((a, b) => a + b)) / superaLIM2.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de LIM 2017-2
var noCumpleLIM3 = [] ;
var cumpleLIM3 = [] ;
var superaLIM3 = [] ;
for (i in data['LIM']['2017-2']['ratings']) {
  noCumpleLIM3.push(data['LIM']['2017-2']['ratings'][i]['student']['no-cumple']);
  cumpleLIM3.push(data['LIM']['2017-2']['ratings'][i]['student']['cumple']);
  superaLIM3.push(data['LIM']['2017-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleLIM3 = (noCumpleLIM3.reduce((a, b) => a + b)) / noCumpleLIM3.length ;
var averageCumpleLIM3 = (cumpleLIM3.reduce((a, b) => a + b)) / cumpleLIM3.length ;
var averagesuperaLIM3 = (superaLIM3.reduce((a, b) => a + b)) / superaLIM3.length ;

// Gráfico do percentual de alunas satisfeitas com a experiência da Laboratória de LIM

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartSatisfiedLIM);

function curveChartSatisfiedLIM() {
  var chartData = google.visualization.arrayToDataTable([
    ['Turma', 'Insatisfeita', 'Satisfeita', 'Muito Satisfeita'],
    ['Turma 2016-2',averageNoCumpleLIM1,averageCumpleLIM1, averagesuperaLIM1],
    ['Turma 2017-1',averageNoCumpleLIM2,averageCumpleLIM2, averagesuperaLIM2],
    ['Turma 2017-2',averageNoCumpleLIM3,averageCumpleLIM3, averagesuperaLIM3],
  ]);

  var options = {
    title: 'Média de alunas satisfeitas com a experiência da Laboratória de Lima',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartSatisfiedLIM'));

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



// notas maiores que a média SCL

// 'SCL' '2016-2' 'number': 1
var hseScoresSCL10 = [];
var techScoresSCL10 = [];
for (i in data['SCL']['2016-2']['students']) {
  if (data['SCL']['2016-2']['students'][i]['active'] == true) {
    hseScoresSCL10.push(data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['hse']);
    techScoresSCL10.push(data['SCL']['2016-2']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresSCL10 = (hseScoresSCL10.reduce((a, b) => a + b)) / hseScoresSCL10.length ;
var avarageTechScoresSCL10 = (techScoresSCL10.reduce((a, b) => a + b)) / techScoresSCL10.length ;
var totalHseScoresSCL10 = avarageHseScoresSCL10 + avarageTechScoresSCL10;

// 'SCL' '2016-2' 'number': 2
var hseScoresSCL11 = [];
var techScoresSCL11 = [];
for (i in data['SCL']['2016-2']['students']) {
  if (data['SCL']['2016-2']['students'][i]['active'] == true) {
    hseScoresSCL11.push(data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['hse']);
    techScoresSCL11.push(data['SCL']['2016-2']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresSCL11 = (hseScoresSCL11.reduce((a, b) => a + b)) / hseScoresSCL11.length ;
var avarageTechScoresSCL11 = (techScoresSCL11.reduce((a, b) => a + b)) / techScoresSCL11.length ;
var totalHseScoresSCL11 = avarageHseScoresSCL11 + avarageTechScoresSCL11;

// 'SCL' '2016-2' 'number': 3
var hseScoresSCL12 = [];
var techScoresSCL12 = [];
for (i in data['SCL']['2016-2']['students']) {
  if (data['SCL']['2016-2']['students'][i]['active'] == true) {
    hseScoresSCL12.push(data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['hse']);
    techScoresSCL12.push(data['SCL']['2016-2']['students'][i]['sprints'][2]['score']['tech']);}
}
var avarageHseScoresSCL12 = (hseScoresSCL12.reduce((a, b) => a + b)) / hseScoresSCL12.length ;
var avarageTechScoresSCL12 = (techScoresSCL12.reduce((a, b) => a + b)) / techScoresSCL12.length ;
var totalHseScoresSCL12 = avarageHseScoresSCL12 + avarageTechScoresSCL12;

// 'SCL' '2016-2' 'number': 4
var hseScoresSCL13 = [];
var techScoresSCL13 = [];
for (i in data['SCL']['2016-2']['students']) {
  if (data['SCL']['2016-2']['students'][i]['active'] == true) {
    hseScoresSCL13.push(data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['hse']);
    techScoresSCL13.push(data['SCL']['2016-2']['students'][i]['sprints'][3]['score']['tech']);}
}
var avarageHseScoresSCL13 = (hseScoresSCL13.reduce((a, b) => a + b)) / hseScoresSCL13.length ;
var avarageTechScoresSCL13 = (techScoresSCL13.reduce((a, b) => a + b)) / techScoresSCL13.length ;
var totalHseScoresSCL13 = avarageHseScoresSCL13 + avarageTechScoresSCL13;

// 'SCL' '2017-1' 'number': 1
var hseScoresSCL20 = [];
var techScoresSCL20 = [];
for (i in data['SCL']['2017-1']['students']) {
  if (data['SCL']['2017-1']['students'][i]['active'] == true) {
    hseScoresSCL20.push(data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['hse']);
    techScoresSCL20.push(data['SCL']['2017-1']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresSCL20 = (hseScoresSCL20.reduce((a, b) => a + b)) / hseScoresSCL20.length ;
var avarageTechScoresSCL20 = (techScoresSCL20.reduce((a, b) => a + b)) / techScoresSCL20.length ;
var totalHseScoresSCL20 = avarageHseScoresSCL20 + avarageTechScoresSCL20;

// 'SCL' '2017-1' 'number': 2
var hseScoresSCL21 = [];
var techScoresSCL21 = [];
for (i in data['SCL']['2017-1']['students']) {
  if (data['SCL']['2017-1']['students'][i]['active'] == true) {
    hseScoresSCL21.push(data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['hse']);
    techScoresSCL21.push(data['SCL']['2017-1']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresSCL21 = (hseScoresSCL21.reduce((a, b) => a + b)) / hseScoresSCL21.length ;
var avarageTechScoresSCL21 = (techScoresSCL21.reduce((a, b) => a + b)) / techScoresSCL21.length ;
var totalHseScoresSCL21 = avarageHseScoresSCL21 + avarageTechScoresSCL21;

// 'SCL' '2017-1' 'number': 3
var hseScoresSCL22 = [];
var techScoresSCL22 = [];
for (i in data['SCL']['2017-1']['students']) {
  if (data['SCL']['2017-1']['students'][i]['active'] == true) {
    hseScoresSCL22.push(data['SCL']['2017-1']['students'][i]['sprints'][2]['score']['hse']);
    techScoresSCL22.push(data['SCL']['2017-1']['students'][i]['sprints'][2]['score']['tech']);}
}
var avarageHseScoresSCL22 = (hseScoresSCL22.reduce((a, b) => a + b)) / hseScoresSCL22.length ;
var avarageTechScoresSCL22 = (techScoresSCL22.reduce((a, b) => a + b)) / techScoresSCL22.length ;
var totalHseScoresSCL22 = avarageHseScoresSCL22 + avarageTechScoresSCL22;

// 'SCL' '2017-2' 'number': 1
var hseScoresSCL30 = [];
var techScoresSCL30 = [];
for (i in data['SCL']['2017-2']['students']) {
  if (data['SCL']['2017-2']['students'][i]['active'] == true) {
    hseScoresSCL30.push(data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['hse']);
    techScoresSCL30.push(data['SCL']['2017-2']['students'][i]['sprints'][0]['score']['tech']);}
}
var avarageHseScoresSCL30 = (hseScoresSCL30.reduce((a, b) => a + b)) / hseScoresSCL30.length ;
var avarageTechScoresSCL30 = (techScoresSCL30.reduce((a, b) => a + b)) / techScoresSCL30.length ;
var totalHseScoresSCL30 = avarageHseScoresSCL30 + avarageTechScoresSCL30;

// 'SCL' '2017-2' 'number': 2
var hseScoresSCL31 = [];
var techScoresSCL31 = [];
for (i in data['SCL']['2017-2']['students']) {
  if (data['SCL']['2017-2']['students'][i]['active'] == true) {
    hseScoresSCL31.push(data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['hse']);
    techScoresSCL31.push(data['SCL']['2017-2']['students'][i]['sprints'][1]['score']['tech']);}
}
var avarageHseScoresSCL31 = (hseScoresSCL31.reduce((a, b) => a + b)) / hseScoresSCL31.length ;
var avarageTechScoresSCL31 = (techScoresSCL31.reduce((a, b) => a + b)) / techScoresSCL31.length ;
var totalHseScoresSCL31 = avarageHseScoresSCL31 + avarageTechScoresSCL31;


// gráfico notas maiores que a média SCL
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartGradesSCL);

function curveChartGradesSCL() {
  var chartData = google.visualization.arrayToDataTable([
    ['Sprint', 'Notas HSE', 'Notas Tech', 'Notas Totais'],
    ['Turma 2016-2, sprint 1',avarageHseScoresSCL10,avarageTechScoresSCL10, totalHseScoresSCL10],
    ['Turma 2016-2, sprint 2',avarageHseScoresSCL11,avarageTechScoresSCL11, totalHseScoresSCL11],
    ['Turma 2016-2, sprint 3',avarageHseScoresSCL12,avarageTechScoresSCL12, totalHseScoresSCL12],
    ['Turma 2016-2, sprint 4',avarageHseScoresSCL13,avarageTechScoresSCL13, totalHseScoresSCL13],
    ['Turma 2017-1, sprint 1',avarageHseScoresSCL20,avarageTechScoresSCL20, totalHseScoresSCL20],
    ['Turma 2017-1, sprint 2',avarageHseScoresSCL21,avarageTechScoresSCL21, totalHseScoresSCL21],
    ['Turma 2017-1, sprint 3',avarageHseScoresSCL22,avarageTechScoresSCL22, totalHseScoresSCL22],
    ['Turma 2017-2, sprint 1',avarageHseScoresSCL30,avarageTechScoresSCL30, totalHseScoresSCL30],
    ['Turma 2017-2, sprint 2',avarageHseScoresSCL31,avarageTechScoresSCL31, totalHseScoresSCL31]
  ]);

  var options = {
    title: 'Média de notas em Santiago',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesSCL'));

  chart.draw(chartData, options);
}





// O percentual de alunas satisfeitas com a experiência da Laboratória de SCL 2016-2
var noCumpleSCL1 = [] ;
var cumpleSCL1 = [] ;
var superaSCL1 = [] ;
for (i in data['SCL']['2016-2']['ratings']) {
  noCumpleSCL1.push(data['SCL']['2016-2']['ratings'][i]['student']['no-cumple']);
  cumpleSCL1.push(data['SCL']['2016-2']['ratings'][i]['student']['cumple']);
  superaSCL1.push(data['SCL']['2016-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleSCL1 = (noCumpleSCL1.reduce((a, b) => a + b)) / noCumpleSCL1.length ;
var averageCumpleSCL1 = (cumpleSCL1.reduce((a, b) => a + b)) / cumpleSCL1.length ;
var averagesuperaSCL1 = (superaSCL1.reduce((a, b) => a + b)) / superaSCL1.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de SCL 2017-1
var noCumpleSCL2 = [] ;
var cumpleSCL2 = [] ;
var superaSCL2 = [] ;
for (i in data['SCL']['2017-1']['ratings']) {
  noCumpleSCL2.push(data['SCL']['2017-1']['ratings'][i]['student']['no-cumple']);
  cumpleSCL2.push(data['SCL']['2017-1']['ratings'][i]['student']['cumple']);
  superaSCL2.push(data['SCL']['2017-1']['ratings'][i]['student']['supera']);
}
var averageNoCumpleSCL2 = (noCumpleSCL2.reduce((a, b) => a + b)) / noCumpleSCL2.length ;
var averageCumpleSCL2 = (cumpleSCL2.reduce((a, b) => a + b)) / cumpleSCL2.length ;
var averagesuperaSCL2 = (superaSCL2.reduce((a, b) => a + b)) / superaSCL2.length ;

// O percentual de alunas satisfeitas com a experiência da Laboratória de SCL 2017-2
var noCumpleSCL3 = [] ;
var cumpleSCL3 = [] ;
var superaSCL3 = [] ;
for (i in data['SCL']['2017-2']['ratings']) {
  noCumpleSCL3.push(data['SCL']['2017-2']['ratings'][i]['student']['no-cumple']);
  cumpleSCL3.push(data['SCL']['2017-2']['ratings'][i]['student']['cumple']);
  superaSCL3.push(data['SCL']['2017-2']['ratings'][i]['student']['supera']);
}
var averageNoCumpleSCL3 = (noCumpleSCL3.reduce((a, b) => a + b)) / noCumpleSCL3.length ;
var averageCumpleSCL3 = (cumpleSCL3.reduce((a, b) => a + b)) / cumpleSCL3.length ;
var averagesuperaSCL3 = (superaSCL3.reduce((a, b) => a + b)) / superaSCL3.length ;

// Gráfico do percentual de alunas satisfeitas com a experiência da Laboratória de SCL

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartSatisfiedSCL);

function curveChartSatisfiedSCL() {
  var chartData = google.visualization.arrayToDataTable([
    ['Turma', 'Insatisfeita', 'Satisfeita', 'Muito Satisfeita'],
    ['Turma 2016-2',averageNoCumpleSCL1,averageCumpleSCL1, averagesuperaSCL1],
    ['Turma 2017-1',averageNoCumpleSCL2,averageCumpleSCL2, averagesuperaSCL2],
    ['Turma 2017-2',averageNoCumpleSCL3,averageCumpleSCL3, averagesuperaSCL3],
  ]);

  var options = {
    title: 'Média de alunas satisfeitas com a experiência da Laboratória de Santiago',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartSatisfiedSCL'));

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


// notas maiores que a média LAB
var totalHseScoresAQP = (totalHseScoresAQP10 + totalHseScoresAQP11 + totalHseScoresAQP12 + totalHseScoresAQP13 + totalHseScoresAQP20 + totalHseScoresAQP21 + totalHseScoresAQP22) / 7;
var totalHseScoresCDMX = (totalHseScoresCDMX10 + totalHseScoresCDMX11 + totalHseScoresCDMX12 + totalHseScoresCDMX20 + totalHseScoresCDMX21) / 5;
var totalHseScoresLIM = (totalHseScoresLIM10 + totalHseScoresLIM11 + totalHseScoresLIM20 + totalHseScoresLIM21 + totalHseScoresLIM22 + totalHseScoresLIM23 + totalHseScoresLIM30 + totalHseScoresLIM31) / 8;
var totalHseScoresSCL = (totalHseScoresSCL10 + totalHseScoresSCL11 + totalHseScoresSCL12 + totalHseScoresSCL13 + totalHseScoresSCL20 + totalHseScoresSCL21 + totalHseScoresSCL22 + totalHseScoresSCL30 + totalHseScoresSCL31) / 9;

// gráfico notas maiores que a média LAB
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curveChartGradesLAB);

function curveChartGradesLAB() {
  var chartData = google.visualization.arrayToDataTable([
    ['Sede', 'Média das Notas'],
    ['Arequipa',totalHseScoresAQP],
    ['Cidade do México',totalHseScoresCDMX],
    ['Lima',totalHseScoresLIM],
    ['Santiago',totalHseScoresSCL]
  ]);

  var options = {
    title: 'Média de notas na Laboratória',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveChartGradesLAB'));

  chart.draw(chartData, options);
}
/*---------------NPS---------------------------*/
/*-------------NPS POR TURMA AQP 2016-2------------*/
var promotorasAQP20162 = 0;
var pasivasAQP20162 = 0;
var detractorasAQP20162 = 0;
for ( turma in data['AQP'])
for (i in data['AQP']['2016-2']['ratings']){
 promotorasAQP20162 += data['AQP']['2016-2']['ratings'][i]['nps']['promoters'];
 pasivasAQP20162 += data['AQP']['2016-2']['ratings'][i]['nps']['passive'];
 detractorasAQP20162 += data['AQP']['2016-2']['ratings'][i]['nps']['detractors'];
var total = promotorasAQP20162 + pasivasAQP20162 + detractorasAQP20162;
var promoters = (promotorasAQP20162 / total) *100;
var passive = (pasivasAQP20162 / total)*100;
var detractors = (detractorasAQP20162 / total) *100;
var nps = promoters - detractors; 
}


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNPSAQP20162);
function drawChartNPSAQP20162() {
var data = google.visualization.arrayToDataTable([
['', ''],
['Indicariam',promotorasAQP20162],
['Neutras', pasivasAQP20162],
['Não indicariam', detractorasAQP20162],

]);

var options = {
title: 'NPS: AQP-2016-2',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartAQP20162'));
chart.draw(data, options);
}
/*-------------NPS POR TURMA AQP 2017-1------------*/
 
var promotorasAQP20171 = 0;
var pasivasAQP20171 = 0;
var detractorasAQP20171= 0;
for ( turma in data['AQP'])
for (i in data['AQP']['2017-1']['ratings']){
 promotorasAQP20171 += data['AQP']['2017-1']['ratings'][i]['nps']['promoters'];
 pasivasAQP20171 += data['AQP']['2017-1']['ratings'][i]['nps']['passive'];
 detractorasAQP20171+= data['AQP']['2017-1']['ratings'][i]['nps']['detractors'];
var total = promotorasAQP20171 + pasivasAQP20171 + detractorasAQP20171
var promoters = (promotorasAQP20171 / total) *100;
var passive = (pasivasAQP20171 / total)*100;
var detractors = (detractorasAQP20171/ total) *100;
var nps = promoters - detractors; 
}
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNPSAQP20171);
function drawChartNPSAQP20171() {
var data = google.visualization.arrayToDataTable([
['', ''],
['Indicariam',promotorasAQP20171],
['Neutras', pasivasAQP20171],
['Não indicariam', detractorasAQP20171],

]);

var options = {
title: 'NPS: AQP-2016-2',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartAQP20171'));
chart.draw(data, options);
}
//-FIM DO NPS AQP-//


/**NPS CDMX */
 /**NPS CDMX 2017-1 */
 var promotorasCDMX20171 = 0;
 var pasivasCDMX20171 = 0;
 var detractorasCDMX20171 = 0;
 for ( turma in data['CDMX'])
 for (i in data['CDMX']['2017-1']['ratings']){
  promotorasCDMX20171 += data['CDMX']['2017-1']['ratings'][i]['nps']['promoters'];
  pasivasCDMX20171 += data['CDMX']['2017-1']['ratings'][i]['nps']['passive'];
  detractorasCDMX20171 += data['CDMX']['2017-1']['ratings'][i]['nps']['detractors'];
 var total = promotorasCDMX20171 + pasivasCDMX20171 + detractorasCDMX20171;
 var promoters = (promotorasCDMX20171 / total) *100;
 var passive = (pasivasCDMX20171 / total)*100;
 var detractors = (detractorasCDMX20171 / total) *100;
 var nps = promoters - detractors; 
 }
 
 
 
 
 //-----GRAFICO NPS CDMX ------// 
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChartNPSCDMX20171);
 function drawChartNPSCDMX20171() {
 var data = google.visualization.arrayToDataTable([
 ['', ''],
 ['Indicariam',promotorasCDMX20171],
 ['Neutras', pasivasCDMX20171],
 ['Não indicariam', detractorasCDMX20171],
 
 ]);
 
 var options = {
 title: 'NPS: CDMX-2017-1',
 pieHole: 0.4,
 };
 
 var chart = new google.visualization.PieChart(document.getElementById('donutchartCDMX20171'));
 chart.draw(data, options);
 }
/**FIM CDMX 2017-1 */

 /*NPS CDMX 2017-2*/

 var promotorasCDMX20172 = 0;
 var pasivasCDMX20172 = 0;
 var detractorasCDMX20172 = 0;
 for ( turma in data['CDMX'])
 for (i in data['CDMX']['2017-2']['ratings']){
  promotorasCDMX20172 += data['CDMX']['2017-2']['ratings'][i]['nps']['promoters'];
  pasivasCDMX20172 += data['CDMX']['2017-2']['ratings'][i]['nps']['passive'];
  detractorasCDMX20172 += data['CDMX']['2017-2']['ratings'][i]['nps']['detractors'];
 var total = promotorasCDMX20172 + pasivasCDMX20172 + detractorasCDMX20172;
 var promoters = (promotorasCDMX20172 / total) *100;
 var passive = (pasivasCDMX20172 / total)*100;
 var detractors = (detractorasCDMX20172 / total) *100;
 var nps = promoters - detractors; 
 }
 
 
 
 
 //-----GRAFICO NPS CDMX ------// 
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChartNPSCDMX20172);
 function drawChartNPSCDMX20172() {
 var data = google.visualization.arrayToDataTable([
 ['', ''],
 ['Indicariam',promotorasCDMX20172],
 ['Neutras', pasivasCDMX20172],
 ['Não indicariam', detractorasCDMX20172],
 
 ]);
 
 var options = {
 title: 'NPS: CDMX-2017-2',
 pieHole: 0.4,
 };
 
 var chart = new google.visualization.PieChart(document.getElementById('donutchartCDMX20172'));
 chart.draw(data, options);
 }
 /*******************************************NPS LIMA ********** */
 /*******************************************NPS LIMA 2016-2********** */
 var promotorasLIM20161 = 0;
 var pasivasLIM20161 = 0;
 var detractorasLIM20161 = 0;
 for ( turma in data['LIM'])
 for (i in data['LIM']['2016-2']['ratings']){
  promotorasLIM20161 += data['LIM']['2016-2']['ratings'][i]['nps']['promoters'];
  pasivasLIM20161 += data['LIM']['2016-2']['ratings'][i]['nps']['passive'];
  detractorasLIM20161 += data['LIM']['2016-2']['ratings'][i]['nps']['detractors'];
 var total = promotorasLIM20161 + pasivasLIM20161 + detractorasLIM20161;
 var promoters = (promotorasLIM20161 / total) *100;
 var passive = (pasivasLIM20161 / total)*100;
 var detractors = (detractorasLIM20161 / total) *100;
 var nps = promoters - detractors; 
 }
 
 
 
 
 //-----GRAFICO NPS LIM 2016-2 ------// 
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChartNPSLIM20162);
 function drawChartNPSLIM20162() {
 var data = google.visualization.arrayToDataTable([
 ['', ''],
 ['Indicariam',promotorasLIM20161],
 ['Neutras', pasivasLIM20161],
 ['Não indicariam', detractorasLIM20161],
 
 ]);
 
 var options = {
 title: 'NPS: LIM-2016-2',
 pieHole: 0.4,
 };
 
 var chart = new google.visualization.PieChart(document.getElementById('donutchartLIM20162'));
 chart.draw(data, options);
 }
  
 /*******************************************NPS LIMA 2017-2********** */
 var promotorasLIM20172 = 0;
var pasivasLIM20172 = 0;
var detractorasLIM20172 = 0;
for ( turma in data['LIM'])
for (i in data['LIM']['2017-2']['ratings']){
 promotorasLIM20172 += data['LIM']['2017-2']['ratings'][i]['nps']['promoters'];
 pasivasLIM20172 += data['LIM']['2017-2']['ratings'][i]['nps']['passive'];
 detractorasLIM20172 += data['LIM']['2017-2']['ratings'][i]['nps']['detractors'];
var total = promotorasLIM20172 + pasivasLIM20172 + detractorasLIM20172;
var promoters = (promotorasLIM20172 / total) *100;
var passive = (pasivasLIM20172 / total)*100;
var detractors = (detractorasLIM20172 / total) *100;
var nps = promoters - detractors; 
}




//-----GRAFICO NPS LIM -2017-2-----// 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNPSLIM20172);
function drawChartNPSLIM20172() {
var data = google.visualization.arrayToDataTable([
['', ''],
['Indicariam',promotorasLIM20172],
['Neutras', pasivasLIM20172],
['Não indicariam', detractorasLIM20172],

]);

var options = {
title: 'NPS: LIM-2017-2',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartLIM20172'));
chart.draw(data, options);
} 

 /*******************************************NPS LIMA 2017-1********** */
  
 
 
 var promotorasLIM20171 = 0;
 var pasivasLIM20171 = 0;
 var detractorasLIM20171 = 0;
 for ( turma in data['LIM'])
 for (i in data['LIM']['2017-1']['ratings']){
  promotorasLIM20171 += data['LIM']['2017-1']['ratings'][i]['nps']['promoters'];
  pasivasLIM20171 += data['LIM']['2017-1']['ratings'][i]['nps']['passive'];
  detractorasLIM20171 += data['LIM']['2017-1']['ratings'][i]['nps']['detractors'];
 var total = promotorasLIM20171 + pasivasLIM20171 + detractorasLIM20171;
 var promoters = (promotorasLIM20171 / total) *100;
 var passive = (pasivasLIM20171 / total)*100;
 var detractors = (detractorasLIM20171 / total) *100;
 var nps = promoters - detractors; 
 }
 
 
 
 
 //-----GRAFICO NPS LIM ------// 
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChartNPSLIM20171);
 function drawChartNPSLIM20171() {
 var data = google.visualization.arrayToDataTable([
 ['', ''],
 ['Indicariam',promotorasLIM20171],
 ['Neutras', pasivasLIM20171],
 ['Não indicariam ', detractorasLIM20171],
 
 ]);
 
 var options = {
 title: 'NPS: LIM-2017-1',
 pieHole: 0.4,
 };
 
 var chart = new google.visualization.PieChart(document.getElementById('donutchartLIM20171'));
 chart.draw(data, options);
 } 
   
  //-------------NPS SCL------------//
  //--------------------NPS SCL 2016-2--------------------//
   
  var promotoras20162 = 0;
  var pasivas20162 = 0;
  var detractoras20162 = 0;
  for ( turma in data['SCL'])
  for (i in data['SCL']['2016-2']['ratings']){
   promotoras20162 += data['SCL']['2016-2']['ratings'][i]['nps']['promoters'];
   pasivas20162 += data['SCL']['2016-2']['ratings'][i]['nps']['passive'];
   detractoras20162 += data['SCL']['2016-2']['ratings'][i]['nps']['detractors'];
  var total = promotoras20162 + pasivas20162 + detractoras20162;
  var promoters = (promotoras20162 / total) *100;
  var passive = (pasivas20162 / total)*100;
  var detractors = (detractoras20162 / total) *100;
  var nps = promoters - detractors; 
  }
  
  
  
  
  //-----GRAFICO NPS SCL-2016-2 ------// 
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChartNPSSCL20162);
  function drawChartNPSSCL20162() {
  var data = google.visualization.arrayToDataTable([
  ['', ''],
  ['Indicariam',promotoras20162],
  ['Neutras', pasivas20162],
  ['Não indicariam ', detractoras20162],
  
  ]);
  
  var options = {
  title: 'NPS: SCL-2016-2',
  pieHole: 0.4,
  };
  
  var chart = new google.visualization.PieChart(document.getElementById('donutchartNPSSCL20162'));
  chart.draw(data, options);
  }
  
  //-------------NPS POR TURMA SCL 2017-1------------//
  var promotoras20171 = 0;
var pasivas20171 = 0;
var detractoras20171 = 0;
for ( turma in data['SCL'])
for (i in data['SCL']['2017-1']['ratings']){
 promotoras20171 += data['SCL']['2017-1']['ratings'][i]['nps']['promoters'];
 pasivas20171 += data['SCL']['2017-1']['ratings'][i]['nps']['passive'];
 detractoras20171 += data['SCL']['2017-1']['ratings'][i]['nps']['detractors'];
var total = promotoras20171 + pasivas20171 + detractoras20171;
var promoters = (promotoras20171 / total) *100;
var passive = (pasivas20171 / total)*100;
var detractors = (detractoras20171 / total) *100;
var nps = promoters - detractors; 
}




//-----GRAFICO NPS SCL-2017-1 ------// 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNPS20171);
function drawChartNPS20171() {
var data = google.visualization.arrayToDataTable([
['', ''],
['Indicariam',promotoras20171],
['Neutras', pasivas20171],
['Não indicariam ', detractoras20171],

]);

var options = {
title: 'NPS: SCL-2017-1',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartNPS20171'));
chart.draw(data, options);
}
  //-------------NPS POR TURMA SCL 2017-2------------//

var promotoras = 0;
var pasivas = 0;
var detractoras = 0;
for ( turma in data['SCL'])
for (i in data['SCL']['2017-2']['ratings']){
 promotoras += data['SCL']['2017-2']['ratings'][i]['nps']['promoters'];
 pasivas += data['SCL']['2017-2']['ratings'][i]['nps']['passive'];
 detractoras += data['SCL']['2017-2']['ratings'][i]['nps']['detractors'];
var total = promotoras + pasivas + detractoras;
var promoters = (promotoras / total) *100;
var passive = (pasivas / total)*100;
var detractors = (detractoras / total) *100;
var nps = promoters - detractors; 
}




//-----GRAFICO NPS SCL ------// 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNPS);
function drawChartNPS() {
var data = google.visualization.arrayToDataTable([
['', ''],
['Indicariam',promotoras],
['Neutras', pasivas],
['Não indicariam ', detractoras],

]);

var options = {
title: 'NPS: SCL-2017-2',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartNPS'));
chart.draw(data, options);
}
/*FIM DO NPS */
/*-------------------------------MÉDIA JEDI-------------------------------------------*/
/* ------------AQP-------------------*/
var averegeJediAQP20162 = 0;
var maxNoteJediAQP20162 = 5;
var sprintNoteAQP20162 = 0;
for (sprint in data['AQP']['2016-2']['ratings']){
 sprintNoteAQP20162 +=  data['AQP']['2016-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprintAQP20162 = sprintNumber +1;
averegeJediAQP20162 = sprintNoteAQP20162 / numeroTotalDeSprintAQP20162 ;
}
/*---------------------------Média Jedi por Turma - AQP -2017-2*/
var averegeJediAQP20171 = 0;
var maxNoteJediAQP20171 = 5;
var sprintNoteAQP20171 = 0;
for (sprint in data['AQP']['2017-1']['ratings']){
 sprintNoteAQP20171 +=  data['AQP']['2017-1']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJediAQP20171 = sprintNoteAQP20171 / numeroTotalDeSprint ;
}
 
 

/*---------gráfico linhas média jedi sede AQP --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeJediAQP);

function drawChartAveregeJediAQP() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média Jedi'],
    ['2016-2', averegeJediAQP20162],
    ['2017-1',averegeJediAQP20171 ],
   
   
    
  ]);

  var options = {
    title: 'Média nota do Jedi AQP',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeJediAQP'));

  chart.draw(data, options);
  
}
/**-------------------jedi CDMX ----------------------------*/
var averegeJediCDMX20171 = 0;
var maxNoteJediCDMX20171 = 5;
var sprintNoteCDMX20171 = 0;
for (sprint in data['CDMX']['2017-1']['ratings']){
 sprintNoteCDMX20171 +=  data['CDMX']['2017-1']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint20171 = sprintNumber +1;
averegeJediCDMX20171 = sprintNoteCDMX20171 / numeroTotalDeSprint20171 ;
}
/*---------------------------Média Jedi por Turma - CDMX -20172*/
var averegeJediCDMX20172 = 0;
var maxNoteJediCDMX20172 = 5;
var sprintNoteCDMX20172 = 0;
for (sprint in data['CDMX']['2017-2']['ratings']){
 sprintNoteCDMX20172 +=  data['CDMX']['2017-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJediCDMX20172 = sprintNoteCDMX20172 / numeroTotalDeSprint ;
}
 
 

/*---------gráfico linhas média jedi sede CDMX --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeJediCDMX);

function drawChartAveregeJediCDMX() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média Jedi'],
    ['2016-2',averegeJediCDMX20171],
    ['2017-1',averegeJediCDMX20172],
  ]);

  var options = {
    title: 'Média nota do Jedi CDMX',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeJediCDMX'));

  chart.draw(data, options);
 }
/*MEDIA JEDI LIM
/*---------------------------Média Jedi por Turma - LIM -20162*/
var averegeJediLIM20162 = 0;
var maxNoteJediLIM20162 = 5;
var sprintNoteLIM20162 = 0;
for (sprint in data['LIM']['2016-2']['ratings']){
 sprintNoteLIM20162 +=  data['LIM']['2016-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint20171 = sprintNumber +1;
averegeJediLIM20162 = sprintNoteLIM20162 / numeroTotalDeSprint20171 ;
}
/*---------------------------Média Jedi por Turma - LIM -20171*/
var averegeJediLIM20171 = 0;
var maxNoteJediLIM20171 = 5;
var sprintNoteLIM20171 = 0;
for (sprint in data['LIM']['2017-1']['ratings']){
 sprintNoteLIM20171 +=  data['LIM']['2017-1']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJediLIM20171 = sprintNoteLIM20171 / numeroTotalDeSprint ;
}
 
 /*---------------------------Média Jedi por Turma - LIM -20172*/
 var averegeJediLIM20172 = 0;
 var maxNoteJediLIM20172 = 5;
 var sprintNoteLIM20172 = 0;
 for (sprint in data['LIM']['2017-2']['ratings']){
  sprintNoteLIM20172 +=  data['LIM']['2017-2']['ratings'][sprint]['jedi'];
  var sprintNumber = parseInt(sprint);
 var numeroTotalDeSprint = sprintNumber  +1;
 averegeJediLIM20172 = sprintNoteLIM20172 / numeroTotalDeSprint ;
 }
/*---------gráfico linhas média jedi sede LIM --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeJediLIM);

function drawChartAveregeJediLIM() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média Jedi'],
    ['2016-2',averegeJediLIM20162],
    ['2017-1',averegeJediLIM20171],
    ['2017-2',averegeJediLIM20172], 
  ]);

  var options = {
    title: 'Média nota do Jedi LIM',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeJediLIM'));

  chart.draw(data, options);
 }
/*---------------------------Média Jedi por Turma - SLC -2016-2*/
var averegeJedi20162 = 0;
var maxNoteJedi = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2016-2']['ratings']){
 sprintNote +=  data['SCL']['2016-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJedi20162 = sprintNote / numeroTotalDeSprint ;
}
/*---------------------------Média Jedi por Turma - SLC -2017-2*/
var averegeJedi20172 = 0;
var maxNoteJedi = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-2']['ratings']){
 sprintNote +=  data['SCL']['2017-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJedi20172 = sprintNote / numeroTotalDeSprint ;
}
 
/**---------------------- Média Jedi Por Turma - SLC -2017-1*/

var averegeJedi20171 = 0;
var maxNoteJedi = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-1']['ratings']){
 sprintNote +=  data['SCL']['2017-1']['ratings'][sprint]['jedi']; 
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJedi20171 = sprintNote / numeroTotalDeSprint ;
}


/*---------gráfico linhas média jedi sede scl --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeJediSCL);

function drawChartAveregeJediSCL() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média Jedi'],
    ['2016-2', averegeJedi20162],
    ['2017-1',averegeJedi20171 ],
    ['2017-2', averegeJedi20172 ],
   
    
  ]);

  var options = {
    title: 'Média nota do Jedi SCL',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeJediSCL'));

  chart.draw(data, options);
 
  
}
 /*----fim do grafico linhas média jedi sede scl*/

 /*--grafico em barras*/
 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChartAveregeJediSCLBarras);

      function drawChartAveregeJediSCLBarras() {
        var data = google.visualization.arrayToDataTable([
          ['Turma', 'Média Jedi'],
          ['2016-2', averegeJedi20162],
          ['2017-1',averegeJedi20171 ],
          ['2017-2', averegeJedi20172 ],
         
        ]);

        var options = {
          chart: {
            title: 'Média Jedi Sede - SCL',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('barraAveregeJediSCL'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


      /*MÉDIA MENTORES */
      /* MEDIA MENTORES AQP*/
      var averegeteacherAQP20162 = 0;
var maxNoteteacherAQP20162 = 5;
var sprintNoteAQP20162 = 0;
for (sprint in data['AQP']['2016-2']['ratings']){
 sprintNoteAQP20162 +=  data['AQP']['2016-2']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprintAQP20162 = sprintNumber +1;
averegeteacherAQP20162 = sprintNoteAQP20162 / numeroTotalDeSprintAQP20162 ;
}
/*---------------------------Média teacher por Turma - AQP -2017-2*/
var averegeteacherAQP20171 = 0;
var maxNoteteacherAQP20171 = 5;
var sprintNoteAQP20171 = 0;
for (sprint in data['AQP']['2017-1']['ratings']){
 sprintNoteAQP20171 +=  data['AQP']['2017-1']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacherAQP20171 = sprintNoteAQP20171 / numeroTotalDeSprint ;
}
 
 

/*---------gráfico linhas média teacher sede AQP --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeteacherAQP);

function drawChartAveregeteacherAQP() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média teacher'],
    ['2016-2', averegeteacherAQP20162],
    ['2017-1',averegeteacherAQP20171 ],
   
   
    
  ]);

  var options = {
    title: 'Média nota do teacher AQP',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeteacherAQP'));

  chart.draw(data, options);
  
}
/**-------------------teacher CDMX ----------------------------*/
var averegeteacherCDMX20171 = 0;
var maxNoteteacherCDMX20171 = 5;
var sprintNoteCDMX20171 = 0;
for (sprint in data['CDMX']['2017-1']['ratings']){
 sprintNoteCDMX20171 +=  data['CDMX']['2017-1']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint20171 = sprintNumber +1;
averegeteacherCDMX20171 = sprintNoteCDMX20171 / numeroTotalDeSprint20171 ;
}
/*---------------------------Média teacher por Turma - CDMX -20172*/
var averegeteacherCDMX20172 = 0;
var maxNoteteacherCDMX20172 = 5;
var sprintNoteCDMX20172 = 0;
for (sprint in data['CDMX']['2017-2']['ratings']){
 sprintNoteCDMX20172 +=  data['CDMX']['2017-2']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacherCDMX20172 = sprintNoteCDMX20172 / numeroTotalDeSprint ;
}
 
 

/*---------gráfico linhas média teacher sede CDMX --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeteacherCDMX);

function drawChartAveregeteacherCDMX() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média teacher'],
    ['2016-2',averegeteacherCDMX20171],
    ['2017-1',averegeteacherCDMX20172],
  ]);

  var options = {
    title: 'Média nota do teacher CDMX',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeteacherCDMX'));

  chart.draw(data, options);
 }
/*MEDIA teacher LIM
/*---------------------------Média teacher por Turma - LIM -20162*/
var averegeteacherLIM20162 = 0;
var maxNoteteacherLIM20162 = 5;
var sprintNoteLIM20162 = 0;
for (sprint in data['LIM']['2016-2']['ratings']){
 sprintNoteLIM20162 +=  data['LIM']['2016-2']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint20171 = sprintNumber +1;
averegeteacherLIM20162 = sprintNoteLIM20162 / numeroTotalDeSprint20171 ;
}
/*---------------------------Média teacher por Turma - LIM -20171*/
var averegeteacherLIM20171 = 0;
var maxNoteteacherLIM20171 = 5;
var sprintNoteLIM20171 = 0;
for (sprint in data['LIM']['2017-1']['ratings']){
 sprintNoteLIM20171 +=  data['LIM']['2017-1']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacherLIM20171 = sprintNoteLIM20171 / numeroTotalDeSprint ;
}
 
 /*---------------------------Média teacher por Turma - LIM -20172*/
 var averegeteacherLIM20172 = 0;
 var maxNoteteacherLIM20172 = 5;
 var sprintNoteLIM20172 = 0;
 for (sprint in data['LIM']['2017-2']['ratings']){
  sprintNoteLIM20172 +=  data['LIM']['2017-2']['ratings'][sprint]['teacher'];
  var sprintNumber = parseInt(sprint);
 var numeroTotalDeSprint = sprintNumber  +1;
 averegeteacherLIM20172 = sprintNoteLIM20172 / numeroTotalDeSprint ;
 }
/*---------gráfico linhas média teacher sede LIM --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeteacherLIM);

function drawChartAveregeteacherLIM() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média teacher'],
    ['2016-2',averegeteacherLIM20162],
    ['2017-1',averegeteacherLIM20171],
    ['2017-2',averegeteacherLIM20172], 
  ]);

  var options = {
    title: 'Média nota do teacher LIM',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeteacherLIM'));

  chart.draw(data, options);
 }
/*---------------------------Média teacher por Turma - SLC -2016-2*/
var averegeteacher20162 = 0;
var maxNoteteacher = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2016-2']['ratings']){
 sprintNote +=  data['SCL']['2016-2']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacher20162 = sprintNote / numeroTotalDeSprint ;
}
/*---------------------------Média teacher por Turma - SLC -2017-2*/
var averegeteacher20172 = 0;
var maxNoteteacher = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-2']['ratings']){
 sprintNote +=  data['SCL']['2017-2']['ratings'][sprint]['teacher'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacher20172 = sprintNote / numeroTotalDeSprint ;
}
 
/**---------------------- Média teacher Por Turma - SLC -2017-1*/

var averegeteacher20171 = 0;
var maxNoteteacher = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-1']['ratings']){
 sprintNote +=  data['SCL']['2017-1']['ratings'][sprint]['teacher']; 
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeteacher20171 = sprintNote / numeroTotalDeSprint ;
}


/*---------gráfico linhas média teacher sede scl --------------------*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAveregeteacherSCL);

function drawChartAveregeteacherSCL() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média teacher'],
    ['2016-2', averegeteacher20162],
    ['2017-1',averegeteacher20171 ],
    ['2017-2', averegeteacher20172 ],
   
    
  ]);

  var options = {
    title: 'Média nota do teacher SCL',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curveAveregeteacherSCL'));

  chart.draw(data, options);
 
  
}

      /**-------------MÉDIA MENTORES POR SCL */
    
 
        /**---SCL-2016-2 */

        var averegeTecher20162 = 0;
        var maxNoteTecher = 5;
        var sprintNote = 0;
        for (sprint in data['SCL']['2016-2']['ratings']){
         sprintNote +=  data['SCL']['2016-2']['ratings'][sprint]['teacher']; 
         var sprintNumber = parseInt(sprint);
        var numeroTotalDeSprint = sprintNumber  +1;
        averegeTecher20162 = sprintNote / numeroTotalDeSprint ;
        }

  /**---SCL-2017-1 */
  var averegeTecher20171 = 0;
var maxNoteTecher = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-1']['ratings']){
 sprintNote +=  data['SCL']['2017-1']['ratings'][sprint]['teacher']; 
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeTecher20171 = sprintNote / numeroTotalDeSprint ;
}

  /**SCL-2017-2 */
var averegeTecher20172 = 0;
var maxNoteTecher = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-2']['ratings']){
 sprintNote +=  data['SCL']['2017-2']['ratings'][sprint]['teacher']; 
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeTecher20172 = sprintNote / numeroTotalDeSprint ;
}
/**GRÁFICO EM BARRAS MÉDIA MENTORES SCL */
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChartAveregeTeacherSCLBarras);

function drawChartAveregeTeacherSCLBarras() {
  var data = google.visualization.arrayToDataTable([
    ['Turma', 'Média Mentores'],
    ['2016-2',averegeTecher20162],
    ['2017-1',averegeTecher20171 ],
    ['2017-2', averegeTecher20172 ],
   
  ]);

  var options = {
    chart: {
      title: 'Média Mentores Sede - SCL',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('barraAveregeTeacherSCL'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}