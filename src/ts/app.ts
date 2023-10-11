import Cart from './card/Cart';
import Movie from "./demo/Movie";
import Music from "./demo/Music";
import Book from "./demo/Book";

const cart = new Cart;
console.log(cart.items)

cart.add(new Movie(12345, 'The Avengers', 400, 'https://github.com/netology-code/ajs-homeworks/blob/ajs8/typescript/pic/avengers.png', 2012, 'Avengers Assemmble!', 'action', 137));
cart.add(new Music(67890, 'Greatest Hits', 1500, 'The Offspring', 2005));
cart.add(new Book(23789, 'Empire V', 900,'Victor Pelevin', 2006, 416));

console.log(cart.items)