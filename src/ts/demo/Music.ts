import Buyable from './Buyable';

export default class Music implements Buyable {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author: string,
    readonly year: number,
  ){}
}