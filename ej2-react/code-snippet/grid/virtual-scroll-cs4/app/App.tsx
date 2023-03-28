

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, VirtualScroll, Edit, Toolbar, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './largeData';

function App() {
  const datas: object[] = data(1000);
  const pageSettings: PageSettingsModel = { pageSize: 50 };
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const rules: object = { required: true };
    return (<GridComponent dataSource={datas} height={300} enableVirtualization={true}
            pageSettings={ pageSettings } editSettings={editOptions} toolbar={toolbarOptions}>
            <Inject services={[VirtualScroll, Edit, Toolbar]} />
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' width='100' textAlign='Right' isPrimaryKey={true} validationRules={rules}/>
                <ColumnDirective field='Engineer' width='100'/>
                <ColumnDirective field='Designation' width='140' editType='dropdownedit' validationRules={rules}/>
                <ColumnDirective field='Estimation' headerText='Estimation' textAlign='Right' width='110' editType='numericedit' validationRules={rules}/>
                <ColumnDirective field='Status' width='100' editType='dropdownedit'/>
            </ColumnsDirective>
            </GridComponent>)
}
export default App;


