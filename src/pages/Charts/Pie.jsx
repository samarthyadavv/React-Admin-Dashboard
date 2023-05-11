import React from 'react';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

// Define the Pie component
const Pie = () => (
    // Wrap the component in a div with some styling
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        {/* Display a header for the chart */}
        <ChartsHeader category="Pie" title="Project Cost Breakdown" />

        {/* Render the PieChart component */}
        <div className="w-full">
            {/* Pass in the chart data, ID, and other props */}
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
        </div>
    </div>
);

// Export the Pie component as the default export
export default Pie;
