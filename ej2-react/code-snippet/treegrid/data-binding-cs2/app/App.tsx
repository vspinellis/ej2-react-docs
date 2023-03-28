

import { ColumnDirective, ColumnsDirective, Inject, Page, PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
  const pageOptions: PageSettingsModel = { pageSize: 7 };
  return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
      allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
      </ColumnsDirective>
      <Inject services={[Page]}/>
  </TreeGridComponent>
};
export default App;


