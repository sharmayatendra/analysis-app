import ReactEcharts from "echarts-for-react";
import Winedata from "./Wine-Data.json";
function App() {
  const scatterPlot = Winedata.map((item) => [
    item["Color intensity"],
    item["Hue"],
  ]);

  let bardata = {
    avg1: 0,
    length1: 0,
    avg2: 0,
    length2: 0,
    avg3: 0,
    length3: 0,
  };

  for (let i = 0; i < Winedata.length; i++) {
    if (Winedata[i]["Alcohol"] === 1) {
      bardata.length1++;
      bardata.avg1 += Winedata[i]["Malic Acid"];
    } else if (Winedata[i]["Alcohol"] === 2) {
      bardata.length2++;
      bardata.avg2 += Winedata[i]["Malic Acid"];
    } else {
      bardata.length3++;
      bardata.avg3 += Winedata[i]["Malic Acid"];
    }
  }

  bardata.avg1 = bardata.avg1 / bardata.length1;
  bardata.avg2 = bardata.avg2 / bardata.length2;
  bardata.avg3 = bardata.avg3 / bardata.length3;

  const option = {
    xAxis: {
      name: "Color intensity",
    },
    yAxis: {
      name: "Hue",
    },
    series: [
      {
        data: scatterPlot,
        type: "scatter",
      },
    ],
  };

  const barOptions = {
    xAxis: {
      name: "Alcohol",
      data: ["1", "2", "3"],
    },
    yAxis: {
      name: "Malic Acid",
    },
    series: [
      {
        data: [bardata.avg1, bardata.avg2, bardata.avg3],
        type: "bar",
        barWidth: "20%",
        barGap: "10%",
      },
    ],
  };
  return (
    <>
      <ReactEcharts option={option} />
      <ReactEcharts option={barOptions} />
    </>
  );
}

export default App;
