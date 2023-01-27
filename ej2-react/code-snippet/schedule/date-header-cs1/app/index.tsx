{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, View, Day, Week, WorkWeek, Month, RenderCellEventArgs, Inject, TimelineViews } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend, Internationalization } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const instance: Internationalization = new Internationalization();
  function getDateHeaderText(value: Date): string {
    return instance.formatDate(value, { skeleton: 'Ed' });
  }
  function getWeather(value: Date) {
    switch (value.getDay()) {
      case 0:
        return '<div class="weather-text">25°C</div>';
      case 1:
        return '<div class="weather-text">18°C</div>';
      case 2:
        return '<div class="weather-text">10°C</div>';
      case 3:
        return '<div class="weather-text">16°C</div>';
      case 4:
        return '<div class="weather-text">8°C</div>';
      case 5:
        return '<div class="weather-text">27°C</div>';
      case 6:
        return '<div class="weather-text">17°C</div>';
      default:
        return null;
    }
  }
  function dateHeaderTemplate(props): JSX.Element {
    return (<div><div>{getDateHeaderText(props.date)}</div><div className="date-text" dangerouslySetInnerHTML={{ __html: getWeather(props.date) }}></div></div>);
  }

  return (<ScheduleComponent width='100%' height='550px' cssClass='schedule-date-header-template'
    selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}
    dateHeaderTemplate={dateHeaderTemplate}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='TimelineWeek' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}