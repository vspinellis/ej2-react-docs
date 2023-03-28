import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
function App() {
    const textRender = (args) => {
        if (args.text === '7') {
            args.color = 'red';
            args.border.width = 1;
        }
    };
    const datalabel = { visible: true };
    return <AccumulationChartComponent id='charts' enableSmartLabels='true' textRender={textRender}>
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
