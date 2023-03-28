{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    boldCenter = { fontWeight: 'bold', textAlign: 'center' };
    oncreated() {
        //Add Data validation to range.
        this.spreadsheet.addDataValidation({ type: 'TextLength', operator: 'LessThanOrEqualTo', value1: '4' }, 'A2:A5');
        this.spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }, 'B2:B5');
        this.spreadsheet.addDataValidation({ type: 'Date', operator: 'NotEqualTo', value1: '04/11/2019' }, 'F2:F5');
        this.spreadsheet.addDataValidation({ type: 'Time', operator: 'Between', value1: '10:00:00 AM', value2: '11:00:00 AM' }, 'G2:G5');
        this.spreadsheet.addDataValidation({ type: 'Decimal', operator: 'LessThan', value1: '100000.00' }, 'H2:H5');
        //Highlight Invalid Data.
        this.spreadsheet.addInvalidHighlight('A1:H5');
    }
    render() {
        return (<div>
             <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective name={'PriceDetails'}>
                            <RowsDirective>
                                <RowDirective index={0}>
                                    <CellsDirective>
                                        <CellDirective index={0} value={'Seller Name'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={1} value={'Customer Id'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={2} value={'Customer Name'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={3} value={'Product Name'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={4} value={'Product Price'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={5} value={'Sales Date'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={6} value={'Billing Time'} style={this.boldCenter}></CellDirective>
                                        <CellDirective index={7} value={'Total Price'} style={this.boldCenter}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective index={1}>
                                    <CellsDirective>
                                        <CellDirective index={0} value={'John'}></CellDirective>
                                        <CellDirective index={1} value={'1'} validation={{ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }}></CellDirective>
                                        <CellDirective index={2} value={'Nash'}></CellDirective>
                                        <CellDirective index={3} value={'Digger'} validation={{ type: 'List', value1: 'Digger, Digger, Cherrypicker' }}></CellDirective>
                                        <CellDirective index={4} value={'50000'} validation={{ type: 'List', value1: '50000,50000,45000' }}></CellDirective>
                                        <CellDirective index={5} value={'04/11/2019'}></CellDirective>
                                        <CellDirective index={6} value={'11:34:32 AM'}></CellDirective>
                                        <CellDirective index={7} value={'1,45,000.00'}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective index={2}>
                                    <CellsDirective>
                                        <CellDirective index={0} value={'Mike'}></CellDirective>
                                        <CellDirective index={1} value={'2'} validation={{ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }}></CellDirective>
                                        <CellDirective index={2} value={'Jim'}></CellDirective>
                                        <CellDirective index={3} value={'Cherrypicker'} validation={{ type: 'List', value1: 'Cherrypicker, JCB, Wheelbarrow' }}></CellDirective>
                                        <CellDirective index={4} value={'45000'} validation={{ type: 'List', value1: '45000,90000,40' }}></CellDirective>
                                        <CellDirective index={5} value={'04/11/2019'}></CellDirective>
                                        <CellDirective index={6} value={'11:34:32 AM'}></CellDirective>
                                        <CellDirective index={7} value={'1,45,000.00'}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective index={3}>
                                    <CellsDirective>
                                        <CellDirective index={0} value={'shane'}></CellDirective>
                                        <CellDirective index={1} value={'3'} validation={{ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }}></CellDirective>
                                        <CellDirective index={2} value={'Sean'}></CellDirective>
                                        <CellDirective index={3} value={'Kango'} validation={{ type: 'List', value1: 'Kango, Ropes' }}></CellDirective>
                                        <CellDirective index={4} value={'450'} validation={{ type: 'List', value1: '450, 95' }}></CellDirective>
                                        <CellDirective index={5} value={'06/25/2019'}></CellDirective>
                                        <CellDirective index={6} value={'01:30:11 PM'}></CellDirective>
                                        <CellDirective index={7} value={'545.00'}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective index={4}>
                                    <CellsDirective>
                                        <CellDirective index={0} value={'John'}></CellDirective>
                                        <CellDirective index={1} value={'1'} validation={{ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }}></CellDirective>
                                        <CellDirective index={2} value={'Nash'}></CellDirective>
                                        <CellDirective index={3} value={'JCB'} validation={{ type: 'List', value1: 'JCB, Ropes, scaffolding' }}></CellDirective>
                                        <CellDirective index={4} value={'90000'} validation={{ type: 'List', value1: '90000, 95, 10000' }}></CellDirective>
                                        <CellDirective index={5} value={'09/22/2019'}></CellDirective>
                                        <CellDirective index={6} value={'12:30:02 PM'}></CellDirective>
                                        <CellDirective index={7} value={'1,00,095.00'}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                            </RowsDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={88}></ColumnDirective>
                                    <ColumnDirective width={88}></ColumnDirective>
                                    <ColumnDirective width={106}></ColumnDirective>
                                    <ColumnDirective width={98}></ColumnDirective>
                                    <ColumnDirective width={88}></ColumnDirective>
                                    <ColumnDirective width={86}></ColumnDirective>
                                    <ColumnDirective width={107}></ColumnDirective>
                                    <ColumnDirective width={81}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}