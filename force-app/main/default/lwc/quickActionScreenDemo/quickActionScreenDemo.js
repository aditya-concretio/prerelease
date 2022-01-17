import { LightningElement, api } from 'lwc';

export default class QuickActionScreenDemo extends LightningElement {
    @api 
    invoke() {
        console.log("Hi, I'm an action.");
    }
}