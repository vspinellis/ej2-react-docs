import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const settings = { mode: 'Both' };
    return (<GridComponent dataSource={data} selectionSettings={settings} height={315}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
              </ColumnsDirective>
              </GridComponent>);
}
;
export default App;
