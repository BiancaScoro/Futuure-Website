import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

const Product = () => {
  const { products } = useContext(ProductContext);

  useEffect(() => {
    console.log('Products in useEffect:', products);
  }, [products]);

  console.log('Products in Product component:', products);

  if (!products || products.length === 0) {
    console.log('No products found in Product component');
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className='py-20 px-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-3 gap-12'>
           {products.map((singleProduct, index) => 
            <div key={singleProduct.id} className='p-4'>
             <Link to={`/singleProduct/${singleProduct.id}`}>
               <img
                 src={singleProduct.images[0]}
                 className='w-full h-full'
                 alt={`Product ${index + 1}`}
               />
            </Link>
            </div>
          )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );  
  
};

export default Product;



