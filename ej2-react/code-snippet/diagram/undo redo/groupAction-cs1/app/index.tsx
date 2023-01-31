{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    ConnectorModel,
    UndoRedo,
    Inject
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      created={() => {
        //Start to group the changes
        diagramInstance.startGroupAction();
        //Makes the changes
        let color = ['black', 'red', 'green', 'yellow'];
        for (var i = 0; i < color.length; i++) {
          // Updates the fillColor for all the child elements.
          diagramInstance.nodes[0].style.fill = color[i];
          diagramInstance.dataBind();
        }
        //Ends grouping the changes
        diagramInstance.endGroupAction();
      }}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
    >
      <Inject services={[UndoRedo]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}