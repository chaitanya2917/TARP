// analytics.js
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart").getContext("2d");

    const data = {
        labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
        datasets: [
            {
                label: "Data Set 1",
                data: [12, 19, 3, 17],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const config = {
        type: "bar",
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };

    const myChart = new Chart(ctx, config);
});
