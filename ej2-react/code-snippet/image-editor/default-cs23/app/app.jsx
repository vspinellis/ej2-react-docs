{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    btnClick() {
        let dimension = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y,'Enter\nText');
    }
    btnClick() {
        imgObj.deleteShape('shape_1');
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Click' onClick={this.btnClick.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='Delete Text' onClick = {this.delClick.bind(this)}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}