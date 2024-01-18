import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { IoIosArrowDown } from "react-icons/io";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = () => {
    const data = {
        labels: ["jan", "Mar", "Apr", "Jul", "Sep", "Nov"],
        datasets: [
            {
                data: [20000, 50000, 100000, 200000, 150000, 180000, 120000],
                borderColor: 'blue',
                backgroundColor: 'transparent',
                tension: 0.5,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: data.labels,
                grid: {
                    display: false, // Set display to false to hide gridlines for x-axis
                },
            },
            y: {
                grid: {
                    display: false, // Set display to false to hide gridlines for y-axis
                },
                ticks: {
                    callback: (value) => {
                        // Format the y-axis labels as '20k', '50k', '100k', etc.
                        return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value / 1000) + 'k';
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Set display to false to hide legend
            },
        },
    };

    return (
        <div className='bg-blue-100 w-[380px] rounded-lg mt-4'>
            <div className='flex'>
                <div className='mt-4 rounded-lg border-2 border-white w-[100px] h-[30px] relative ml-4 mb-4'>
                    <p className='flex items-center'>
                        Overview
                        <span className='mt-1.5 ml-2 absolute right-2'>
                            <IoIosArrowDown />
                        </span>
                    </p>
                </div>
                <div className='mt-4 rounded-lg border-2 border-white w-[100px] h-[30px] relative ml-auto mr-4'>
                    <p className='flex items-center'>
                        This Year
                        <span className='mt-1.5 ml-2 absolute right-2'>
                            <IoIosArrowDown />
                        </span>
                    </p>
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartComponent;
