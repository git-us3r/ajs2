/// Thin wrapper for https://bravenewcoin-v1.p.mashape.com/convert
export class BTCValue {
    
    constructor( private success : boolean = false,
        private source : string = null,
        private request_date : Date = null,
        private from_quantity : number = null,
        private from_symbol : string = null,
        private from_name : string = null,
        private to_symbol : string = null,
        private to_name : string = null,
        private to_quantity : number = null) {

        // EMPTY
    }
}