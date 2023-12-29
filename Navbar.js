import React, { useState, useContext, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../assets/futuure.png'
import { FaCartShopping } from "react-icons/fa6";
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);

    const {itemAmount} = useContext(CartContext)
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
      window.addEventListener('scroll', ()=> {
        window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
      })
    })

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <nav className={`${isActive ? 'bg-white py-8 shadow-md' : 'bg-white py-6'} fixed flex flex-row items-center justify-between gap-6 px-16 py-2 sm:px-8 z-30 w-full transition-all`}>
        <Link to="/" className='flex flex-row'>
          <img className='w-16 h-16' src={Logo} alt="Futuure" />
        </Link>
        <div className="hidden lg:flex flex-row">
          {/* Regular navigation for larger screens */}
          <ul className="flex gap-12 font-noto-sans text-lg text-custom-blue">
            <li>
              <Link to="/" className="hover:font-bold">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:font-bold">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-bold">
                CONTACT
              </Link>
            </li>
            <li>
            <Link to='/sidebar' onClick={() => setIsOpen(!isOpen)}>
              <FaCartShopping className='text-navy' /> 
              <div className='bg-red-500 absolute right-4 top-9 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={handleMenuToggle}
        >
          <RxHamburgerMenu className="text-4xl md:ml-auto" />
        </div>
      </nav>

      {/* Responsive dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 left-0 bottom-0 bg-slate-100">
          <div
            className="fixed right-0 px-8 py-4 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <AiOutlineClose className="text-4xl" />
          </div>
          <ul className="flex flex-col pt-36 items-center gap-6 font-noto-sans text-lg text-custom-blue">
            <li>
              <Link to="/" className="hover:font-bold">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:font-bold">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-bold">
                CONTACT
              </Link>
            </li>
            <li>
            <Link to='/sidebar' onClick={() => setIsOpen(!isOpen)}>
              <FaCartShopping className='text-navy'/>
              <div className='bg-red-500 absolute right-49 top-41 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

