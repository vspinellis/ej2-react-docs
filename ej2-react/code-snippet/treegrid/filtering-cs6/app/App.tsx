

import { ColumnDirective, ColumnsDirective, Filter } from '@syncfusion/ej2-react-treegrid';
import { FilterSettingsModel, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='275' allowFiltering={true} filterSettings={FilterOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>
};
export default App;

