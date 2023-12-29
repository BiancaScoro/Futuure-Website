import React from 'react';
import earphones from '../assets/earphones.jpeg';
import { Link } from 'react-router-dom';
import clothes from '../assets/hoodie.jpeg'
import electronics from '../assets/laptop.jpeg'
import shoes from '../assets/shoes.jpeg'
import furniture from '../assets/table.jpeg'
import other from '../assets/glasses.jpg'
import whitechair from '../assets/whitechair.jpeg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className='bg-stone-100'>
      <div className='flex gap-8'>
        <img className='w-3/6 object-contain' src={earphones} alt='earphones and buds' />
          <div className='flex flex-col text-left justify-center gap-5'>
            <h1 className='text-5xl font-gothic text-navy md:pt-16'>TRENDING NOW</h1>
              <Link to='/singleProduct/19'>
                <button className='bg-black text-white py-2 px-6  hover:bg-purple1 hover:text-black rounded'>CHECK IT OUT</button>
              </Link>
          </div>
      </div>
      <h2 className='font-gothic text-4xl text-center justify-center pt-20 text-purple1'>CATEGORIES TO EXPLORE</h2>
      <section className='py-20 px-20'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-5 gap-4 md:grid-cols-1'>
            <div>
           <img src={clothes} alt='hoodie' />
           <h3 className='text-center font-noto-sans text-lg font-bold md:text-sm'>CLOTHES</h3>
           </div>
           <div>
           <img src={electronics} alt='laptop' />
           <h3  className='text-center font-noto-sans text-lg font-bold md:text-sm'>ELECTRONICS</h3>
           </div>
           <div>
           <img src={shoes} alt='shoes' />
           <h3 className='text-center font-noto-sans text-lg font-bold md:text-sm'>SHOES</h3>
           </div>
           <div>
           <img src={furniture} alt='table' />
           <h3 className='text-center font-noto-sans text-lg font-bold md:text-sm'>FURNITURE</h3>
           </div>
           <div>
           <img src={other} alt='glasses' />
           <h3 className='text-center font-noto-sans text-lg font-bold md:text-sm'>GLASSES</h3>
           </div>
          </div>
        </div>
      </section>
      <div className='flex'>
        <div className='flex flex-col lg:justify-center lg:ml-64 gap-4 lg:text-center md:text-left md:ml-32'>
          <h3 className='font-gothic text-6xl text-custom-blue'>ON SALE!</h3>
          <h4 className='font-noto-sans text-2xl'>20% OFF</h4>
          <Link to='/singleProduct/34'>
                <button className='bg-black text-white py-2 px-6  hover:bg-purple1 hover:text-black rounded'>SHOP NOW</button>
          </Link>
        </div>
        <img src={whitechair} className='w-3/6 object-contain ml-auto' alt='white chair' />
      </div>
      <Footer />
    </section>
  );
};

export default Home;

