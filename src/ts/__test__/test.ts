import Cart from '../card/Cart';
import Movie from '../demo/Movie';
import Music from '../demo/Music';
import Book from '../demo/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('new card should be empty', () => {
  const cart = new Cart();
  cart.add(new Movie(12345, 'The Avengers', 400, 'https://github.com/netology-code/ajs-homeworks/blob/ajs8/typescript/pic/avengers.png', 2012, 'Avengers Assemmble!', 'action', 137));
  cart.add(new Music(67890, 'Greatest Hits', 1500, 'The Offspring', 2005));
  cart.add(new Book(23789, 'Empire V', 900, 'Victor Pelevin', 2006, 416));
  expect(cart.items.length).toBe(3);
});

test('sum price', () => {
  const cart = new Cart();
  cart.add(new Movie(12345, 'The Avengers', 400, 'https://github.com/netology-code/ajs-homeworks/blob/ajs8/typescript/pic/avengers.png', 2012, 'Avengers Assemmble!', 'action', 137));
  cart.add(new Music(67890, 'Greatest Hits', 1500, 'The Offspring', 2005));
  cart.add(new Book(23789, 'Empire V', 900, 'Victor Pelevin', 2006, 416));
  expect(cart.sumItem()).toBe(2800);
});

test('discount price', () => {
  const cart = new Cart();
  cart.add(new Movie(12345, 'The Avengers', 400, 'https://github.com/netology-code/ajs-homeworks/blob/ajs8/typescript/pic/avengers.png', 2012, 'Avengers Assemmble!', 'action', 137));
  cart.add(new Music(67890, 'Greatest Hits', 1500, 'The Offspring', 2005));
  cart.add(new Book(23789, 'Empire V', 900, 'Victor Pelevin', 2006, 416));
  expect(cart.discountItem(35)).toBe(1820);
});

test('delete id', () => {
  const cart = new Cart();
  cart.add(new Movie(12345, 'The Avengers', 400, 'https://github.com/netology-code/ajs-homeworks/blob/ajs8/typescript/pic/avengers.png', 2012, 'Avengers Assemmble!', 'action', 137));
  cart.add(new Music(67890, 'Greatest Hits', 1500, 'The Offspring', 2005));
  cart.add(new Book(23789, 'Empire V', 900, 'Victor Pelevin', 2006, 416));
  cart.deleteItem (12345);
  expect(cart.items.length).toBe(2);
});
