var calculateInvestment = function(p_investment, p_timeInvestment, p_compound, p_interestRate) {
  var perYear = [['Years', 'Money']]
  if(p_compound) {
    for(var i = 0; i < p_timeInvestment; i++) {
      p_investment *= (1+(p_interestRate/100));
      perYear.push([i, p_investment])
    }
  }else {
    for(i++; i < p_timeInvestment; i++) {
      p_investment *= (1+(p_interestRate/100))
      perYear.push([i, p_investment])
    }
  }
  return [p_investment, perYear];
};
var ic = document.getElementById("investmentCalculator");
if(ic != null) {
  ic.addEventListener("submit", 
  function(event) {
    event.preventDefault();
    var investment = parseFloat(document.getElementById("invested").value);
    var timeInvestment = parseInt(document.getElementById("timee").value);
    var compound = document.getElementById("h_compound").checked;
    var interestRate = parseFloat(document.getElementById("rate").value);
    const [finalInvestment, investmentData] = calculateInvestment(investment, timeInvestment, compound, interestRate);
    //alert(finalInvestment.toFixed(2));
    document.getElementById("result").innerHTML = "Result: $"+finalInvestment.toFixed(2)
    drawChart(investmentData);
  });
}else {
  alert("Investment Calculator not found.")
}
google.charts.load('current',{packages:['corechart']});
//google.charts.setOnLoadCallback(drawChart);
function drawChart(optio) {
const data = google.visualization.arrayToDataTable(optio);
const options = {
  title: 'Investment Growth Chart',
  hAxis: {title: 'Money in $'},
  vAxis: {title: 'Years'},
  legend: 'none'
};
const chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}
