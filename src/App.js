import React from "react";

import "./App.css";
import Chart from "chart.js/auto";

import ChartComp from "./components/ChartComp.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Deferred from "chartjs-plugin-deferred";
import data from "./components/data.js";

import Hero from "./components/Hero.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

Chart.register(ChartDataLabels);
Chart.register(Deferred);

function App() {
  const chartsmap = data.map((item) => {
    return <ChartComp key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Hero className="fadeInUp" />
      <Navbar />
      <section className="charts-list fadeInUp">{chartsmap}</section>
      <Footer />
    </div>
  );
}

export default App;
