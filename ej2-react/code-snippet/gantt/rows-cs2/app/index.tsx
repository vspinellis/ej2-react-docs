

let data: Object[]  = [
  {
      TaskID: 1,
      TaskName: 'Project Initiation',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      isExpand:true,
      subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
      ]
  },
  {
      TaskID: 5,
      TaskName: 'Project Estimation',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      isExpand:false,
      subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
      ]
  },
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
    expandState: 'isExpand'
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}  
        height = '450px'>
      </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

