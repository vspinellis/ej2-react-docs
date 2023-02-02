{% raw %}


import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return(
    <ProgressBarComponent id="linear"
                        type='Linear'
                        trackThickness={24}
                        progressThickness={24}
                        value={60}
                        animation={{
                            enable: true,
                            duration: 2000,
                            delay: 0
                        }}>
    </ProgressBarComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("container"));


{% endraw %}