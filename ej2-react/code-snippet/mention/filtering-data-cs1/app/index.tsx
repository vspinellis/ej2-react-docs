


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';

  private searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  private dataFields: Object  = { text: 'ContactName', value: 'CustomerID' };
  private query: Query = new Query().select(['ContactName', 'CustomerID']).take(7);
  private minLength = 3;
  public render() {
    return(
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag user'></div>
                </td>
            </tr>
        </table>
      <MentionComponent dataSource={this.searchData} target={this.mentionTarget} fields={this.dataFields} query={this.query} minLength={this.minLength}></MentionComponent>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



