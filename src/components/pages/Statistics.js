import React from 'react';
import '../../App.css';
import '../pages/PieChart';
import Chart from "react-google-charts";
import ReactDOM from "react-dom";
import PieChart from '../pages/PieChart.js';
import EnergyPerProviderChart from './EnergyPerProviderChart';
import StationCharts from './StationCharts';


export default function Statistics() {


  return (
    <div className='stations'>
        <h1 className='statistics'>ΕΜΦΑΝΙΣΗ ΣΤΑΤΙΣΤΙΚΩΝ ΚΑΙ ΔΙΑΓΡΑΜΜΑΤΩΝ</h1>
        <PieChart></PieChart>
        <EnergyPerProviderChart></EnergyPerProviderChart>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <StationCharts></StationCharts>
    </div>
  );

}



