const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "# Monthly Sales",
        data: [12, 19, 3, 5, 2, 3, 15, 10, 5, 6, 10, 8],
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "rgba(10, 10, 10, 1)",
          "purple",
          "green",
          "rgba(245, 40, 145, 0.8)",
          "rgba(0, 40, 145, 0.8)",
          "rgba(245, 254, 145, 0.8)",
          "rgba(245, 0, 255, 0.8)",
          "rgba(245, 40, 0, 0.8)",
          "rgba(0, 40, 0, 0.8)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    Plugins: {
      legend: {
        labels: {
          boxWidth: 40,
          boxHeight: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

let heading = document.querySelector(".headline");
ScrollReveal().reveal(heading, { delay: 500 });
ScrollReveal().reveal(heading, { origin: "bottom" });
