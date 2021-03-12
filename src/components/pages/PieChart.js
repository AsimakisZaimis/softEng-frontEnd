import React from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";
 

const pieOptions = {
    title: "Συνολικές Φορτίσεις ανάλογα με την πόλη που βρίσκεται ο σταθμός",
    pieHole: 0.5,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    // chartArea: {
    //   left: 0,
    //   top: 0,
    //   width: "100%",
    //   height: "80%"
    // },
    fontName: "Roboto"
  };
export default class PieChart extends React.Component {
    state = {
      chartImageURI: ""
    };
    render() {
      return (
        <div className="App">
            <br></br>
            <br></br>
          <Chart
            chartType="PieChart"
            data={[["Age", "Weight"], ["Νομός Αττικής", 12], ["Νομός Θεσσαλονίκης", 5.5]]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      );
    }
}