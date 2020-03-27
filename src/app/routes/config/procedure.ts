export class Procedure {
    procedureName: string;
    itemList: string[];
    selectedItemList: string[];
   // defaultItemList: string[];
    defaultItemList = [...this.selectedItemList];
}      