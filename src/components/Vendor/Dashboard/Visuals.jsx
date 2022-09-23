import Chart from 'react-apexcharts'

const Visuals = () => {
    const options = {
          chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        dataLabels : {
            enabled : false
        },
          chart: {
      brush: {
        enabled: false,
        target: undefined,
        autoScaleYaxis: false
      },
      zoom: {
          enabled: true,
      }
  },

      

        stroke: {
  curve: 'smooth',
}
      
    }

         const series =     [{
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
            }]
         
             const series2 =     [{
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }]

    return (
        <>  
        <div className='block md:flex my-10 justify-between'> 
        <div style={{background: "linear-gradient(95.09deg, #3CAA35 6.9%, #1D6558 91.95%)", "box-shadow":" 0px 5px 14px rgba(0, 0, 0, 0.05)"}} className='rounded-2xl overflow-scroll md:overflow-hidden shadow-md m-2'>
     
        
         <Chart options={options} series={series} type="area" width ={450} height={320} />
            </div>
 <div className='rounded-2xl bg-white border-2  overflow-scroll md:overflow-hidden shadow-xl m-2'>
     
        
         <Chart options={options} series={series2} type="bar" width ={450}   height={320} />
            </div>
            </div>
        </>
    )
}
export default Visuals