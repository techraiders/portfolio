 /*sidenav sharing icons opens and closes*/
function close(x) {
    x.style.display= "none";
}
function open(y) {
    y.style.display = "block";
}


function w3_openShareIconsSidenav() {
    document.getElementById("socialshareiconsholder").style.display = "block";
    close(shareicon);
}
function w3_closesocialShareIconsSidenav() {
    document.getElementById("socialshareiconsholder").style.display = "none";
    open(shareicon);
}



/*BEGINNING OF GOOGLE CHART*/
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Skills');
        data.addColumn('number', 'Levels');
        data.addRows([
          ['Bootstrap', 2],
          ['W3css', 3],
          ['HTML5', .7],
          ['Angular Js 1.5.6', 1],
          ['Github', 3],
          ['CSS3', .2],
          ['SQL Server 2014', .5],
          ['C', .3],
          ['C++', .3],
          ['Adobe Photoshop', 1],
          ['Google Chart', 1],
          ['Wireframing', 1]
        ]);

        // Set chart options
        var options = {
          'height' : 400,
          'width'  : 600,
          'is3D'   : true
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('skills_chart'));
        chart.draw(data, options);
      }

/* END OF GOOGLE CHART*/