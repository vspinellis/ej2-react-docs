{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    DiagramConstraints,
    NodeConstraints
} from "@syncfusion/ej2-react-diagrams";
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
                id: "node1",
                width: 100,
                height: 100,
                annotations: [{
                    id: 'label',
                    content: 'Rectangle',
                    offset: {
                        x: 0.5,
                        y: 0.5
                    },
                    style: {
                        color: 'white',
                    },
                }],
                offsetX: 200,
                offsetY: 200,
                style: {
                    strokeColor: '#6BA5D7',
                    fill: '#6BA5D7',
                },
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            }];
//Initializes the Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'650px'}
      height={'350px'}
      constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip}
      //Defines nodes
      nodes={node}
      //Defines mouse over tooltip
      tooltip={{
        content: 'Nodes',
        position: 'TopLeft',
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}