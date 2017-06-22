


  var chores = {

    tasks: []
  }

  for(var i =0; i<chores.tasks.length; i++){

  }

  function drawList() {

    var parent = document.getElementById("list-container")

    parent.innerHTML = ""

    var ul = document.createElement("ul")
    for(var i =0; i<chores.tasks.length; i++){
      console.log(chores.tasks[i].taskassigned)


      var li = document.createElement("li")

      li.innerHTML = chores.tasks[i].taskassigned


      ul.appendChild(li)
    }

    parent.appendChild(ul)
  }

  function choreMaker(){
    console.log("Get to work!")
    event.preventDefault();
    var form = document.querySelector("form");

    var newTask = {taskassigned:  form.taskassigned.value}

    chores.tasks.push(newTask)

    drawList();
  }

  window.onload = function(){

    drawList();

    var form = document.querySelector("form");
    form.onsubmit = choreMaker;

    var paras = document.querySelectorAll('p');
    for(var i=0; i<paras.length; i++){

    }
  }





  google.charts.load('current', {'packages':['corechart']});

  google.charts.setOnLoadCallback(drawBasic);

  var voteCounter = {
    Barbara: 0,
    Anna: 3,
    Elvis: 4
  }

  window.onload = function(){

    document.getElementById("Barbara").onclick = vote;
    document.getElementById("Anna").onclick = vote;
    document.getElementById("Elvis").onclick = vote;

  }

  function vote(){

    console.log(this.id)

    voteCounter[this.id] = voteCounter[this.id] + 1;

    drawBasic();
  }


  function drawBasic() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Workers');
        data.addColumn('number', 'Votes');


        data.addRows([

          ['Barbara', voteCounter.Barbara],
          ['Anna', voteCounter.Anna],
          ['Elvis', voteCounter.Elvis]
        ]);

        var options = {
          title: 'Who should have the most chores?',
          hAxis: {
            title: 'Lucky Workers'
          },
          vAxis: {
            title: 'Number of Votes'
          }
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('chart_div'));

        chart.draw(data, options);
      }


  function drawChart() {

    var data = new google.visualization.DataTable();

    data.addRows([

      ['Barbara', 7],
      ['Anna', 6],
      ['Elvis', 4]
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
