import React, { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const scheduleObj = useRef < ScheduleComponent > (null);
  const eventSettings = { dataSource: scheduleData }

  const onEventRendered = (args) => {
    if (args.data.EndTime < scheduleObj.current.selectedDate) {
      args.element.classList.add('e-past-app');
    }
  }
  return (<ScheduleComponent width='100%' height='550px' ref={scheduleObj} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} eventRendered={onEventRendered}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}
  ;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);