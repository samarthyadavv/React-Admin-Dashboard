import React from 'react';
import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Renders the ChartsHeader component, which displays a title and category for the chart */}
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      {/* Renders the StackedChart component, which displays a stacked bar chart of revenue breakdown */}
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
