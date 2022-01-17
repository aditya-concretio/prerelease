import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class UiListDemo extends LightningElement {
    @wire(getListInfoByName, { objectApiName: ACCOUNT_OBJECT, listViewApiName: 'AllAccounts' })
    listView;

    get records() {
        console.clear();
        console.log('listView', this.listView);
        return this.listView.data.records.records;
    }
}
