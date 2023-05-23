import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
    const eventSettings = { dataSource: scheduleData }
    return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} allowDragAndDrop={false} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
