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
['promotoras',promotoras],
['pasivas', pasivas],
['detractoras', detractoras],

]);

var options = {
title: 'NPS: SCL-2017-2',
pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchartNPS'));
chart.draw(data, options);
}


/*---------------------------Média Jedi por Turma - SLC -2017-2*/
var averegeJedi20162 = 0;
var maxNoteJedi = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2016-2']['ratings']){
 sprintNote +=  data['SCL']['2016-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJedi20162 = sprintNote / numeroTotalDeSprint ;
}
var averegeJedi20172 = 0;
var maxNoteJedi = 5;
var sprintNote = 0;
for (sprint in data['SCL']['2017-2']['ratings']){
 sprintNote +=  data['SCL']['2017-2']['ratings'][sprint]['jedi'];
 var sprintNumber = parseInt(sprint);
var numeroTotalDeSprint = sprintNumber  +1;
averegeJedi20172 = sprintNote / numeroTotalDeSprint ;
}
 
/**---------------------- Média Jedi por Turma - SLC -2017-1*/

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