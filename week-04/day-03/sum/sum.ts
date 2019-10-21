'use strict';

export class Summing {
    public _list = [];
     
    public sum() {
        
        let total = 0;

        for(let i = 0; i < this._list.length; i++){
            total += this._list[i];
        }

        return total;

    }
};