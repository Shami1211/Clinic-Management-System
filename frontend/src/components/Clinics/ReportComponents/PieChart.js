import {React, useState} from 'react';
import ReactApexChart from 'react-apexcharts';

function PieChart({ data, labels }) {

    const [config, setConfig] = useState(()=>{
        console.log(data)
        return {
            series: data,
            options: {
            chart: {
                width: 380,
                type: 'pie'
            },
            labels: labels,
            plotOptions: {
                pie: {
                animate: false // disable animation
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
                }
            }]
            },
        }
    })

    

    return (
        <ReactApexChart
        type="pie"
        options={config.options}
        series={config.series}
        width="100%"
        />
    );
}

export default PieChart;