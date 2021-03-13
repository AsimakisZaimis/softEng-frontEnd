import React from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";


export default class EnergyPerProviderChart extends React.Component {

    render() {
        return (
            <Chart
            
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Element',
                        'kWh',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                    ],
                    ['Provider 1', 8.94, '#b87333', null],
                    ['Provider 2', 10.49, 'red', null],
                    ['Provider 3', 19.3, 'blue', null],
                    ['Provider 4', 21.45, 'green', null],
                ]}
                options={{
                    title: 'Συνολική Ενέργεια που παρείχε ο κάθε provider',
                    width: 800,
                    height: 600,
                    bar: { groupWidth: '95%' },
                    legend: { position: 'center' },
                    
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
            />
        );
    }
}