import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject
} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  // Define editing settings for the GridComponent
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    // Main container
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Page header */}
      <Header category="Page" title="Orders" />

      {/* Grid component */}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        {/* Define grid columns */}
        <ColumnsDirective>
          {ordersGrid.map((item, index) =>
            // Create column for each item in ordersGrid array
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>

        {/* Inject required services for the grid */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
