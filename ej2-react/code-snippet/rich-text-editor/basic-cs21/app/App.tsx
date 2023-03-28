


import { Count, HtmlEditor, HTMLFormatter, IHtmlFormatterModel, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let customHTMLModel: IHtmlFormatterModel = {
    // formatter is used to configure the custom key
    keyConfig: {
    'insert-link': 'ctrl+q', // confite the desired key
    }
  };

  let formatter: any =  new HTMLFormatter(customHTMLModel);
  // to configure custom key

  return (
    <RichTextEditorComponent formatter={formatter}>
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
        </li>
        <li>
          <p>Capable of handling markdown editing.</p>
        </li>
        <li>
          <p>Contains a modular library to load the necessary functionality on demand.</p>
        </li>
        <li>
          <p>Provides a fully customizable toolbar.</p>
        </li>
      </ul>
      <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;



