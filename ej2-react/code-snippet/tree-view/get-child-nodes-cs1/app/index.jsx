{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    // Data source for TreeView component
    let data = [
        {
            code: "AF", name: "Africa", countries: [
                { code: "NGA", name: "Nigeria" },
                { code: "EGY", name: "Egypt" },
                { code: "ZAF", name: "South Africa" }
            ]
        },
        {
            code: "AS", name: "Asia", countries: [
                { code: "CHN", name: "China" },
                { code: "IND", name: "India", countries: [
                        { code: "TN", name: "TamilNadu" }
                    ] },
                { code: "JPN", name: "Japan" }
            ]
        },
        {
            code: "EU", name: "Europe", countries: [
                { code: "DNK", name: "Denmark" },
                { code: "FIN", name: "Finland" },
                { code: "AUT", name: "Austria" }
            ]
        },
        {
            code: "NA", name: "North America", countries: [
                { code: "USA", name: "United States of America" },
                { code: "CUB", name: "Cuba" },
                { code: "MEX", name: "Mexico" }
            ]
        },
        {
            code: "SA", name: "South America", countries: [
                { code: "BR", name: "Brazil" },
                { code: "COL", name: "Colombia" },
                { code: "ARG", name: "Argentina" }
            ]
        },
    ];
    let field = { dataSource: data, id: 'code', text: 'name', child: 'countries' };
    let loadOnDemand = false;
    let treeObj;
    function onCreate() {
        let proxy = treeObj;
        document.getElementById("btn").addEventListener("click", (event) => {
            let id = document.getElementById('Nodes');
            let element = proxy.element.querySelector('[data-uid="' + id.value + '"]');
            // Gets the child Element
            let liElements = element.querySelectorAll('ul li');
            let arr = [];
            for (let i = 0; i < liElements.length; i++) {
                let nodeData = proxy.getNode(liElements[i]);
                arr.push(nodeData);
            }
            alert(JSON.stringify(arr));
        });
    }
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className='control_wrapper'>
                    {/* Render TreeView */}
                    <TreeViewComponent fields={field} ref={(treeview) => { treeObj = treeview; }} loadOnDemand={loadOnDemand} created={onCreate.bind(this)}/>
                </div>
            </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}