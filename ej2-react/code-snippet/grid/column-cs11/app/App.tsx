

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data} allowReordering={true} height={315}>
        <Inject services={[Reorder]} />
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' width='100' />
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
            <ColumnDirective field='OrderDate' width='140' format="yMd" textAlign="Right" />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


