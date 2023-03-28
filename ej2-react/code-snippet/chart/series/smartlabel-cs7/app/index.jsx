import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
function App() {
    const datalabel = {
        visible: true, name: 'text', position: 'Outside',
        connectorStyle: {
            //Length of the connector line in pixels
            length: '50px',
            //Width of the connector line in pixels
            width: 2,
            //dashArray of the connector line
            dashArray: '5,3',
            //Color of the connector line
            color: '#f4429e',
            //Specifies the type of the connector line either Line or Curve
            type: 'Curve'
        }
    };
    return <AccumulationChartComponent id='charts' enableSmartLabels='true'>
      <Inject services={[AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' dataLabel={datalabel}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
