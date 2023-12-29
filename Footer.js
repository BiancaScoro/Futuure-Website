import React from 'react'
import Logo from '../assets/futuure.png'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <section>
        <div className="container px-6 py-9 bg-lightgray">
            <div className='flex gap-32'>
                <img className='w-16 h-16' src={Logo} alt="Futuure" />
            <div className='flex flex-col font-noto-sans text-sm'>
                <ul>
                    <li>
                        <Link to="/" >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" >
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default footer