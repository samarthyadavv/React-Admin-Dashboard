import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  // Render the page header with category and title
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      {/* Render the grid component with data source, paging, and sorting enabled */}
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
      >
        {/* Render grid columns using employeesGrid array */}
        <ColumnsDirective>
          {employeesGrid.map((column, index) => (
            <ColumnDirective key={index} {...column} />
          ))}
        </ColumnsDirective>
        {/* Inject required grid services */}
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
