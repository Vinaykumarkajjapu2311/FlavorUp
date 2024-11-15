import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  let className = '';
  if (totalCartItems > 0) {
    className += ' cart-button';
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>FlavorUp</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart} className={className}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
