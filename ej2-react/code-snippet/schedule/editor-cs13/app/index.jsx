
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };

  const onMoreEventsClick = (args) => {
    args.cancel = true;
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} currentView='Month' eventSettings={eventSettings} moreEventsClick={onMoreEventsClick}>
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>);
}
  ;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
