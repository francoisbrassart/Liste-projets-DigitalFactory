import {Subject} from 'rxjs';
export class Data {
    constructor(
        public not_filtered:any[],
        public filtered:any[],
        public filteredBy:[string,string],
        public sortedBy:[string,number],
        public subject: Subject<any[]>){}
}