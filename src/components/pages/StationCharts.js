import React from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";

export default class StationCharts extends React.Component {

    render() {
        return (
            <Chart
                width={'800px'}
                height={'500px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Σταθμοί Φόρτισης', 'Συνολική Ενέργεια(kWh)', 'Σύνολο Αυτοκινήτων'],
                    ['Σταθμός 1', 8000, 20],
                    ['Σταθμός 2', 24000, 50],
                    ['Σταθμός 3', 30000, 30],
                    ['Σταθμός 4', 50000, 40],
                    ['Σταθμός 5', 60000, 6]
                ]}
                options={{
                    // Material design options
                    width: 900,
          chart: {
            title: 'Πληροφορίες ενέργειας κάθε σταθμού',
            subtitle: 'Αριστερά η συνολική ενέργεια που παρείχε ο σταθμός και δεξιά το σύνολο των αυτκινήτων που επισκέφτηκαν τον σταθμό'
          },
          series: {
            0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              distance: {label: 'kWh'}, // Left y-axis.
              brightness: {side: 'right', label: 'Πλήθος Αυτοκινήτων'} // Right y-axis.
            }
          }
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}

            />
        );
    }
}