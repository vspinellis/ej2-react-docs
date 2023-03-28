import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Filter, ForeignKey } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
function App() {
    let dropInstance;
    const filterOption = { type: 'Menu' };
    const filter = {
        ui: {
            create: (args) => {
                const flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                dropInstance = new DropDownList({
                    dataSource: new DataManager(employeeData),
                    fields: { text: 'FirstName', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                dropInstance.appendTo(flValInput);
            },
            read: (args) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.text);
            },
            write: (args) => {
                dropInstance.text = (args.filteredValue || '');
            }
        }
    };
    return <GridComponent dataSource={data} height={315} allowFiltering={true} filterSettings={filterOption}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150' filter={filter}/>
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
    </ColumnsDirective>
    <Inject services={[ForeignKey, Filter]}/>
  </GridComponent>;
}
;
export default App;
