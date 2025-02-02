import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries,
} from '@syncfusion/ej2-react-charts';
function App() {
  const data = [
    { country: 'USA', gold: 50, color: 'url(#chess)' },
    { country: 'China', gold: 40, color: 'url(#cross)' },
    { country: 'Japan', gold: 70, color: 'url(#circle)' },
    { country: 'Australia', gold: 60, color: 'url(#chess)' },
    { country: 'France', gold: 50, color: 'url(#rectangle)' },
    { country: 'Germany', gold: 40, color: 'url(#chess)' },
    { country: 'Italy', gold: 40, color: 'url(#line)' },
    { country: 'Sweden', gold: 30, color: 'url(#cross)' },
  ];

  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis = {
    minimum: 0,
    maximum: 80,
    interval: 20,
    title: 'Medals',
  };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title="Olympic Medals"
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="country"
          yName="gold"
          name="Gold"
          type="Column"
          pointColorMapping="color"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
