export default class Move {

    toId: string
    to: string
    at: number
    amount: number

    constructor(toId: string, to: string, at: number, amount: number) {
        this.toId = toId
        this.to = to
        this.at = at
        this.amount = amount
    }
}