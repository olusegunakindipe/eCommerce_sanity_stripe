import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsToggleOn } from 'react-icons/bs';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, toggleTheme } =
    useStateContext();
  return (
    <div className="navbar-container">
      <p>
        <Link href="/"> JSM Headphones</Link>
      </p>

      <div className="switch">
        <BsToggleOn size={30} className="toggle" onClick={toggleTheme} />
        <AiOutlineShopping size={30} onClick={() => setShowCart(true)} />
        {totalQuantities > 0 && (
          <span className="cart-item-qty">{totalQuantities}</span>
        )}
      </div>
      {/* <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button> */}

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
