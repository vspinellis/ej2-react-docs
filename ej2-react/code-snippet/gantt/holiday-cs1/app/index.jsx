import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} height='450px'>
            <HolidaysDirective>
                <HolidayDirective from='04/10/2019' label='Local Holiday' cssClass='e-custom-holiday'></HolidayDirective>
            </HolidaysDirective>
            <Inject services={[DayMarkers]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));