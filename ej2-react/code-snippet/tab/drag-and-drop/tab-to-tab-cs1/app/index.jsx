{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
function ReactApp() {
    let firstTabObj;
    let secondTabObj;
    let headerText = [{ text: "India" }, { text: "Australia" }, { text: "USA" }, { text: "France" }, { text: "HTML" }, { text: "C Sharp(C#)" }, { text: "Java" }, { text: "VB.Net" }];
    let allowDragAndDrop = true;
    let firstTabitem = [];
    let secondTabitem = [];
    let dragItemIndex;
    let dragItemContainer;
    function firstTabdragStart(args) {
        firstTabitem = [firstTabObj.items[args.index]];
        args.draggedItem.style.visibility = 'hidden';
        dragItemContainer = args.draggedItem.closest('.e-tab');
    }
    function firstTabDragStop(args) {
        if (!isNullOrUndefined(args.target.closest('.e-tab')) && !dragItemContainer.isSameNode(args.target.closest('.e-tab'))) {
            args.cancel = true;
            let TabElement = args.target.closest('.e-tab');
            let dropItem = args.target.closest('.e-toolbar-item');
            if (TabElement != null && dropItem != null) {
                dragItemIndex = Array.prototype.indexOf.call(firstTabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
                let dropItemContainer = args.target.closest('.e-toolbar-items');
                let dropItemIndex = (dropItemContainer != null) ? (Array.prototype.slice.call(dropItemContainer.querySelectorAll('.e-toolbar-item'))).indexOf(dropItem) : '';
                secondTabObj.addTab(firstTabitem, dropItemIndex);
                firstTabObj.removeTab(dragItemIndex);
            }
        }
    }
    function secondTabDragStart(args) {
        secondTabitem = [secondTabObj.items[args.index]];
        args.draggedItem.style.visibility = 'hidden';
        dragItemContainer = args.draggedItem.closest('.e-tab');
    }
    function secondTabDragStop(args) {
        if (!isNullOrUndefined(args.target.closest('.e-tab')) && !dragItemContainer.isSameNode(args.target.closest('.e-tab'))) {
            args.cancel = true;
            let TabElement = args.target.closest('.e-tab');
            let dropItem = args.target.closest('.e-toolbar-item');
            if (TabElement != null && dropItem != null) {
                dragItemIndex = Array.prototype.indexOf.call(secondTabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
                let dropItemContainer = args.target.closest('.e-toolbar-items');
                let dropItemIndex = (dropItemContainer != null) ? (Array.prototype.slice.call(dropItemContainer.querySelectorAll('.e-toolbar-item'))).indexOf(dropItem) : '';
                firstTabObj.addTab(secondTabitem, dropItemIndex);
                secondTabObj.removeTab(dragItemIndex);
            }
        }
    }
    function content0() {
        return <div>
      India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
    </div>;
    }
    function content1() {
        return <div>
      Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.
    </div>;
    }
    function content2() {
        return <div>
      The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.
    </div>;
    }
    function content3() {
        return <div>
      France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.
    </div>;
    }
    function content4() {
        return <div>
      HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
    </div>;
    }
    function content5() {
        return <div>
      C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.
    </div>;
    }
    function content6() {
        return <div>
      Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to provide many features of native applications and can be embedded in HTML pages.
    </div>;
    }
    function content7() {
        return <div>
      The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.
    </div>;
    }
    return (<div>
      <TabComponent ref={(tab) => { firstTabObj = tab; }} id='firstTab' heightAdjustMode='Auto' allowDragAndDrop={allowDragAndDrop} dragArea="#container" onDragStart={firstTabdragStart} dragged={firstTabDragStop}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={content0}/>
          <TabItemDirective header={headerText[1]} content={content1}/>
          <TabItemDirective header={headerText[2]} content={content2}/>
          <TabItemDirective header={headerText[3]} content={content3}/>
        </TabItemsDirective>
      </TabComponent>
      <br></br>
      <TabComponent ref={(tab) => { secondTabObj = tab; }} id='secondTab' heightAdjustMode='Auto' allowDragAndDrop={allowDragAndDrop} dragArea="#container" onDragStart={secondTabDragStart} dragged={secondTabDragStop}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[4]} content={content4}/>
          <TabItemDirective header={headerText[5]} content={content5}/>
          <TabItemDirective header={headerText[6]} content={content6}/>
          <TabItemDirective header={headerText[7]} content={content7}/>
        </TabItemsDirective>
      </TabComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
{% endraw %}