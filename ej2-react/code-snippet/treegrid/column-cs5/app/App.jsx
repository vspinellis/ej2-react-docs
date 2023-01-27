import { ColumnDirective, ColumnsDirective, Inject, Resize, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    return <TreeGridComponent dataSource={sampleData} allowResizing={true} allowSelection={false} treeColumnIndex={1} childMapping='subtasks' height='315'>
    <Inject services={[Resize]}/>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
    </TreeGridComponent>;
}
;
export default App;
