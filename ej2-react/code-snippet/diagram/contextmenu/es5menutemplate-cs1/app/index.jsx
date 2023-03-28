{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, DiagramContextMenu } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
//Initializes the connector
let connector = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2,
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }];
//Initializes the nodes
let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
                id: 'label1',
                content: 'Rectangle1',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white'
                }
            }]
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
                id: 'label2',
                content: 'Rectangle2',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white'
                }
            }]
    }];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} connectors={connector} contextMenuSettings={{
            //Enables the context menu
            show: true,
            items: [
                {
                    text: 'Cut',
                    id: 'Cut',
                    target: '.e-diagramcontent',
                    iconCss: 'e-Cut',
                },
                {
                    text: 'Copy',
                    id: 'Copy',
                    target: '.e-diagramcontent',
                    iconCss: 'e-Copy',
                },
            ],
            //Shows the custom context menu items
            showCustomMenuOnly: true,
            contextMenuBeforeItemRender: function (args) {
                // To render template in li.
                let shortCutSpan = createElement('span');
                let text = args.item.text;
                let shortCutText = text === 'Cut'
                    ? 'Ctrl + S'
                    : text === 'Copy'
                        ? 'Ctrl + U'
                        : 'Ctrl + Shift + I';
                shortCutSpan.textContent = shortCutText;
                args.element.appendChild(shortCutSpan);
                shortCutSpan.setAttribute('class', 'shortcut');
            },
        }}>
      <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}