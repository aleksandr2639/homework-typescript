import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly img: string,
    readonly year: number,
    readonly tagline: string,
    readonly genre: string,
    readonly time: number,
  ){}
}