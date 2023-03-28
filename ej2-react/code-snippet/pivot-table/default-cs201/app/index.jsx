{% raw %}
import { PivotViewComponent, Pager, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let pivotObj;
    let remoteData = new DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    let dataSourceSettings = {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
        filters: []
    };
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={{ columnWidth: 120 }} pageSettings={{
            rowPageSize: 10,
            columnPageSize: 5,
            currentColumnPage: 1,
            currentRowPage: 1
        }} pagerSettings={{
            position: 'Bottom',
            enableCompactView: false,
            showColumnPager: true,
            showRowPager: true,
            columnPageSizes: [5, 10, 20, 50, 100],
            rowPageSizes: [10, 50, 100, 200],
            isInversed: false,
            showColumnPageSize: true,
            showRowPageSize: true
        }} enablePaging={true}>
            <Inject services={[Pager]}/>
        </PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}