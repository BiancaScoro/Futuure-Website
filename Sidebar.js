import React, { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from "../components/CartItem";
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);
  console.log('Sidebar isOpen:', isOpen);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : 'right-full'}
    bg-white fixed top-0 w-full h-full shadow-2xl md:w-[20vw] transition-all duration-300 z-20 px-4 lg:w-[30vw] overflow-y-auto flex flex-col`}>
      <div className="flex items-center justify-between">
        <div className='uppercase text-md font-semibold font-roboto text-center pt-36'>Shopping Bag ({itemAmount})</div>
      </div>
      <div className='flex flex-col gap-y-4 flex-grow font-roboto font-semibold'>{cart.map((item) => {
        return <CartItem item={item} key={item.id} />
      })}
      </div>
      <div className='flex flex-col gap-y-3 py-4'>
        <div className= 'flex w-full justify-between items-center'>
         <div className='uppercase font-semibold font-roboto'><span className='mr-2'>Total:</span>$ {parseFloat (total).toFixed(2)}</div> 
          <div onClick={clearCart} className='cursor-pointer py-4 text-black w-12 h-12 flex justify-center items-center text-xl'><FiTrash2 /></div>
        </div>
        <button className='bg-navy hover:bg-purple1 flex p-3 justify-center items-center text-white w-full rounded font-medium'>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Sidebar;