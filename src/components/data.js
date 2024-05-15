const data = [
  {
    id: 1,
    type: "Line",
    title: "Line Graph",
    className: "line1",
    idName: "line1",
    url: "https://insights.stackoverflow.com/trends",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      datasets: [
        {
          label: "React",
          backgroundColor: "#6678fe",
          borderColor: "#6678fe",
          data: [0.2, 0.6, 1.25, 2.1, 3.1, 4.05, 5.25, 6],
        },
        {
          label: "Angular",
          backgroundColor: "#fa65f9",
          borderColor: "#fa65f9",
          data: [0, 0.5, 2.05, 3, 3, 2.75, 1.9, 1.8],
        },
        {
          label: "Vue.js",
          backgroundColor: "#6cff66",
          borderColor: "#6cff66",
          data: [0, 0.08, 0.3, 0.5, 1, 1.2, 1.2, 1.1],
        },
        {
          label: "Svelte",
          backgroundColor: "#fdfe67",
          borderColor: "#fdfe67",
          data: [0, 0, 0, 0.03, 0.05, 0.04, 0.06, 0.103],
        },
        {
          label: "backbond.js",
          backgroundColor: "#fa6666",
          borderColor: "#fa6666",
          data: [0.125, 0.065, 0.04, 0.02, 0.01, 0.01, 0.008, 0.004],
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { color: "#37373b" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
        },
        y: {
          grid: { color: "#737b87" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "% of Stack Overflow Questions",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "lightgrey",
            font: {
              size: 18,
            },
          },
        },
        datalabels: {
          display: false,
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },
  {
    id: 2,
    type: "Bar",
    title: "Bar Chart",
    className: "bar1",
    idName: "bar1",
    url: "https://weatherspark.com/y/142033/Average-Weather-in-Seoul-South-Korea-Year-Round",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Seoul",
          backgroundColor: "#f15bb5",
          data: [-2, 1, 6, 13, 18, 22, 25, 26, 21, 15, 7, 1],
        },
        {
          label: "Los Angeles",
          backgroundColor: "#fee440",
          data: [14, 14, 15, 17, 18, 20, 22, 23, 22, 20, 16, 13],
        },
        {
          label: "Honolulu",
          backgroundColor: "#00f5d4",
          data: [23, 23, 23, 24, 25, 26, 27, 27, 27, 26, 25, 24],
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { color: "#37373b" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
        },
        y: {
          grid: { color: "#737b87" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "Average Temperature of the Month in °C",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "lightgrey",
            font: {
              size: 18,
            },
          },
        },
        datalabels: {
          display: false,
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },
  {
    id: 3,
    type: "Doughnut",
    title: "Doughnut Chart",
    className: "doughnut1",
    idName: "doughnut1",
    url: "https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/isk2e1087u/tabs_OPI_color_20141027%20(2).pdf",
    data: {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink"],
      datasets: [
        {
          hoverOffset: 30,
          borderWidth: 0,
          backgroundColor: [
            "#ffadad",
            "#ffd6a5",
            "#fdffb6",
            "#caffbf",
            "#a0c4ff",
            "#bdb2ff",
            "#ffc6ff",
          ],
          data: [12, 3, 4, 15, 31, 14, 5],
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "Most liked color - weighted",
          },
        },
      },
      radius: "90%",
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: "black",
          font: { size: 20 },
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },
  {
    id: 4,
    type: "Line",
    title: "Area Graph",
    className: "area1",
    idName: "area1",
    url: "https://en.wikipedia.org/wiki/South_Korea_at_the_Olympics",
    data: {
      labels: [2002, 2006, 2010, 2014, 2018, 2022],
      datasets: [
        {
          label: "Gold",
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          data: [2, 6, 6, 3, 5, 2],
          fill: true,
        },
        {
          label: "Total",
          backgroundColor: "#7393B3",
          borderColor: "#7393B3",
          data: [4, 11, 14, 8, 17, 9],
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { color: "#37373b" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
        },
        y: {
          grid: { color: "#737b87" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "# of Medals at the Winter Olympics",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "lightgrey",
            textAlign: "center",
            font: {
              size: 18,
            },
          },
        },
        datalabels: {
          display: false,
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },

  {
    id: 5,
    type: "Bubble",
    title: "Bubble Graph",
    className: "bubble1",
    idName: "bubble1",
    url: "https://ppcexpo.com/blog/scatter-plot-generator",
    data: {
      labels: ["Guitar", "Flute", "Violin", "Harmonica", "Mandolin"],
      datasets: [
        {
          label: "Number of Shares",
          data: [
            { x: 671, y: 251, r: 24.8, label: "Guitar \n   248" },
            { x: 578, y: 357, r: 32.4, label: "Flute \n  324" },
            { x: 806, y: 364, r: 14.9, label: "Violin \n  149" },
            { x: 321, y: 278, r: 39.3, label: "Harmonica \n      393" },
            { x: 467, y: 319, r: 22.9, label: "Mandolin \n     229" },
          ],
          backgroundColor: [
            "#eb936f",
            "#c6ffa3",
            "#75f3bd",
            "#5d9ac0",
            "#c6bade",
          ],
          borderColor: ["#eb936f", "#c6ffa3", "#75f3bd", "#5d9ac0", "#c6bade"],
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { color: "#37373b" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "Number of Views",
          },
        },
        y: {
          grid: { color: "#737b87" },
          ticks: {
            color: "#d1d1e6",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "Number of Likes",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
            color: "lightgrey",
            font: {
              size: 18,
            },
          },
        },
        datalabels: {
          display: true,
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },
  {
    id: 6,
    type: "Radar",
    title: "Radar Chart",
    className: "radar1",
    idName: "radar1",
    url: "https://www.advsofteng.com/images/multiradar_g.png",
    data: {
      labels: ["Speed", "Efficiency", "Safety", "Reliability", "Comfort"],
      datasets: [
        {
          label: "Ultra Speed",
          data: [90, 55, 78, 60, 85],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
          borderWidth: 3,
        },
        {
          label: "Super Economy",
          data: [60, 85, 80, 85, 80],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
          borderWidth: 3,
        },
      ],
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          grid: { color: "#969696" },
          ticks: {
            color: "#969696",
            font: {
              size: 14,
            },
          },
          pointLabels: {
            color: "white",
            font: { size: 20 },
          },
        },
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          title: {
            display: true,
            color: "lightgrey",
            font: {
              size: 18,
            },
            text: "Ultra Speed vs. Super Economy",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: false,
        },
        deferred: {
          xOffset: 150,
          yOffset: "50%",
          delay: 200,
        },
      },
    },
  },
];

export default data;
