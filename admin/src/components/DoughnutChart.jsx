import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = () => {
  const data = {
    labels: ['Shirt', 'Pant', 'T-Shirt', 'Hoodie'],
    datasets: [
      {
        label: 'Products',
        data: [15, 20, 35, 10], // Quantity of each product
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Shirt
          'rgba(54, 162, 235, 0.6)', // Pant
          'rgba(255, 206, 86, 0.6)', // T-Shirt
          'rgba(75, 192, 192, 0.6)', // Hoodie
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Shirt
          'rgba(54, 162, 235, 1)', // Pant
          'rgba(255, 206, 86, 1)', // T-Shirt
          'rgba(75, 192, 192, 1)', // Hoodie
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
    },
  }

  return (
    <div className="h-3/4 w-full flex items-center justify-center">
      <div className="w-3/4 md:w-2/3">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default DoughnutChart
