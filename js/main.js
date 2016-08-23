 

/*SLIDE SHOW*/
var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
          showDivs(slideIndex += n);
        }

        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          x[slideIndex-1].style.display = "block";
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
          ['W3css', 3],
          ['Bootstrap', 2],
          ['HTML5', .7],
          ['Angular Js 1.5.6', 1],
          ['Angular 2', .4],
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
          'legend' : 'left',
          'width'  : 600,
          'height' : 500,
          'is3D'   : true
        };
      // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('skills_chart'));
        chart.draw(data, options);
      }

/* END OF GOOGLE CHART*/