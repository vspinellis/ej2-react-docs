import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';
const App = () => {
  const ruleOutput = useRef(null);
    useEffect(() => {
        let outputElement = ruleOutput.current;
        outputElement.innerText = 'Select Rule';
    }, []);
    const onChange = (args) => {
        let outputElement = ruleOutput.current;
        if (args.value == "") {
            outputElement.innerText = 'Select Rule';
        }
        else {
            outputElement.innerText = args.value;
        }
    }
    return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Rule Output</label>
      <div className='rule-output-container'>
        <div ref={ruleOutput}></div>
      </div>
    </div>
    <div className='RecurrenceEditor'>
      <RecurrenceEditorComponent id='RecurrenceEditor' change={onChange}></RecurrenceEditorComponent>
    </div>
  </div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
