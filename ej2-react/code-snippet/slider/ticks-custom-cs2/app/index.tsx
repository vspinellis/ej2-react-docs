


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent, SliderTickRenderedEventArgs, SliderTickEventArgs } from '@syncfusion/ej2-react-inputs';

function App() {
  let value: number[] = [30, 70];

  let icon: TicksDataModel = { placement: "Before", largeStep: 20 };

  let custom: TicksDataModel = { placement: "Both", largeStep: 20, smallStep: 5 };

  function iconTicks(args: SliderTickEventArgs): void {
    if (args.tickElement.classList.contains("e-large")) {
      args.tickElement.classList.add("e-custom");
    }
  }

  function customTicks(args: SliderTickRenderedEventArgs): void {
    let li: any = args.ticksWrapper.getElementsByClassName("e-large");
    let remarks: any = ["Very Poor", "Poor", "Average", "Good", "Very Good", "Excellent"];
    for (let i: number = 0; i < li.length; ++i) {
      (li[i].querySelectorAll(".e-tick-both")[1] as HTMLElement).innerText = remarks[i];
    }
  }

  return (
    <div id="container">
      <div className="col-lg-12 control-section">
        <div className="slider-content-wrapper">
          <div className="slider_container" id="slider_wrapper">
            <div className="slider_labelText userselect">Dynamic ticks color</div>
            <SliderComponent
              id="ticks_slider"
              type="MinRange"
              min={0}
              max={100}
              step={5}
              value={30}
              ticks={icon}
              renderingTicks={iconTicks.bind(this) as any}
            />
          </div>

          <div className="slider_container">
            <div className="slider_labelText userselect">Ticks with legends</div>
            <SliderComponent
              id="slider"
              type="MinRange"
              min={0}
              max={100}
              value={value}
              ticks={custom}
              renderedTicks={customTicks.bind(this) as any}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


