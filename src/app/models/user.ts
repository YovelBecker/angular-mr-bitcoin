import Move from './move';

export default class User {


    constructor(public name: string,
        public coins: number = 100,
        public moves: Array<Move> = [new Move('5a566402abce24c6bfe4699d','Dominique Soto',2652712571,2)]) {

    }
}