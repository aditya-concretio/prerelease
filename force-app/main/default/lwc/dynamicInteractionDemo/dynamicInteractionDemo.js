import { LightningElement, api } from 'lwc';

export default class DynamicInteractionDemo extends LightningElement {

    handleChange(ev) {
        this.dispatchEvent(new CustomEvent('itemselected', {detail: {recordId: ev.target.value}}));
    }
}