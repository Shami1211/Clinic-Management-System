import {React, useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';

function BarChart({data, categories,height,width}) {


  const [config, setConfig] = useState(()=>{
    return{          
        series: [{
          data: data
        }],
        options: {
          xaxis: {
            categories: categories,
          },
          colors: ['#3e9455']
        }
    }
  })
  return (
      <ReactApexChart
          type="bar"
          height={height}
          width={width}
          options={config.options}
          series = {config.series}
      />
  )
}

export default BarChart