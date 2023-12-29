import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { AiOutlineClose } from 'react-icons/ai';
import {IoMdRemove, IoMdAdd } from 'react-icons/io'
import {Link} from 'react-router-dom';

const CartItem = ({ item }) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
    const {id, title, price, amount, images} = item;
  return (
    <div className='flex'>
        <div className='w-full min-h-[150px]'>
            <Link to={`/product${id}`}>
            <img src={images} alt='' className='max-w-full h-auto'/>
            </Link>
            <div className="w-full flex flex-col">
            <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">{title}</Link>
         <div onClick={()=> removeFromCart(id)} className="text-xl cursor-pointer"><AiOutlineClose className='text-gray-500 hover:text-red-500 transition'/></div>
        </div>
        <div className="flex gap-x-2 h-[36px] text-sm">
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-noto-sans font-medium'><div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdRemove /></div><div className="h-full flex justify-center items-center px-2">{amount}</div><div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer"><IoMdAdd /></div></div>
          <div className='flex-1 flex justify-end items-center text-noto-sans font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem