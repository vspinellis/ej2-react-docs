{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingBarSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { cylindricalData } from 'datasource.ts';

function App() {
  return <ChartComponent id='charts'>
    <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y' type='StackingBar' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y1' type='StackingBar' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y2' type='StackingBar' columnFacet='Cylinder'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
