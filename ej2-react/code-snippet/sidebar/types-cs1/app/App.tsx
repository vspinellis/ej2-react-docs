{% raw %}
import { ButtonComponent, ChangeEventArgs, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App() {
    let sidebarObj: SidebarComponent;
    let btnObj: ButtonComponent;  
    let type: SidebarType = "Push";
    function onCreate(): void {
        sidebarObj.element.style.visibility='';
    }
    // Toggle button click event handler
    function btnClick(): void {
        if (btnObj.element.classList.contains('e-active')) {
            btnObj.content = 'Close';
            btnObj.iconCss = 'e-icons burg-icon';
            sidebarObj.show();
        } else {
            btnObj.content = 'Open';
            btnObj.iconCss = 'e-icons burg-icon';
            sidebarObj.hide();
        }
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick(): void {
        sidebarObj.toggle();
    }
    // Close the Sidebar
    function closeClick(): void {
          sidebarObj.hide();
          btnObj.content = 'Open';
    }
    // function to handle the CheckBox change event
    function onChange(args: ChangeEventArgs): void {
        sidebarObj.position = ((args as any).event.target.id === "left") ? "Left" : "Right";
    }

    return (
        <div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" enablePersistence={true} ref={Sidebar => sidebarObj = Sidebar as SidebarComponent}  style={{visibility:"hidden"}} created={onCreate} type={type}  width="280px">
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title"> Click the button to close the Sidebar. </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div id="head">
                    <ButtonComponent id="toggle" ref={(scope) => { btnObj = scope as ButtonComponent; }} iconCss='e-icons burg-icon'
                        isToggle={true} onClick={btnClick} className="e-btn e-info">Open</ButtonComponent>
                </div>
                <div id="maincontent" className="content">
                    <div>
                        <div className="title">Main content</div>
                        <div className="radiobutton" >
                            <div className='row'>
                                <RadioButtonComponent id="left" checked={true} label='Left' name='position' change={onChange} />
                            </div>
                            <div className='row'>
                                <RadioButtonComponent id="right" label='Right' name='position' change={onChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;
{% endraw %}