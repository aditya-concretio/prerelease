import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickActionDemo extends LightningElement {
    @api 
    invoke() {
        console.log("Hi, I'm an action.");
        const event = new ShowToastEvent({
            title: 'Demo',
            message: 'Demo for quick action',
            variant: 'success'
        });
        this.dispatchEvent(event);
    }
}