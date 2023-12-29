import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductInfo = () => {
    const {id} = useParams()
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)

    console.log('Products in ProductInfo Component:', products);
   
  
    const product = products.find(item => {
      return item.id === parseInt(id);
    });

    if (!product) {
        return <div>Loading...</div>;
      }

    const {title, price, description, images} = product
  return (
    <>
    <section className='container mx-auto py-16 px-16'>
    <div className='flex flex-col gap-12'>
    <img src={images} alt='' />
    <div className='flex flex-col font-roboto text-lg'>
    <p className='font-semibold pb-3'>{title}</p>
    <p className='pb-2'>Description: {description}</p>
    <p className='pb-0'>Price: ${price}</p>
    </div>
    </div>
    </section> 
    <div className='pl-16 pt-0 pb-8'>
    <button onClick={() => addToCart(product, product.id)} className='bg-black text-white py-2 px-6 hover:bg-purple1 hover:text-black'>Add To Cart</button>
    </div>
    </>
  )
}

export default ProductInfo



