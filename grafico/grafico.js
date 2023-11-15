var ctx = document.getElementById('myDoughnutChart').getContext('2d');

        var data = {
            datasets: [{
                data: [30, 70], // Specify the data values for the chart
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)', // Color for the first segment
                    'rgba(54, 162, 235, 0.8)'  // Color for the second segment
                ],
            }],
            labels: ['Red', 'Blue'] // Labels for each segment
        };

        var options = {
            cutoutPercentage: 50, // Adjust the size of the hole in the middle (0 to 100)
            responsive: false, // Set to true for a responsive chart
        };

        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
