import React from 'react'
import contactImage from '../assets/contact-image.jpg'


const Contact = () => {
  return (
    <>
    <div className='relative'>
      <img className='w-full object-cover h-[550px]' src={contactImage} alt='bed' />
      <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
        <h1 className='text-white text-6xl font-gothic font-bold'>CONTACT</h1>
        <section className="font-noto-sans relative pt-32">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-left w-full mb-12">
          </div>
          <div className="lg:w-1/2 md:w-2/3 text-left mx-auto">
            <div className="flex flex-wrap text-left m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm font-semibold text-left text-navy">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-lightgray rounded border border-gray-300 focus:border-purple1 text-base outline-none text-navy py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm font-semibold text-navy"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-purple1 text-base outline-none text-navy py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm font-semibold text-navy"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-purple1 h-32 text-base outline-none text-navy py-1 px-3 resize-none leading-6 transition-colors duration-300 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-navy border-0 py-2 px-8 focus:outline-none hover:bg-purple1 rounded text-lg">
                  SEND
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 text-center">
                <a className="text-purple1">YOUREMAIL@GMAIL.COM</a>
                <p className="leading-normal my-5">
                  TORONTO, ON
                </p>
                <span className="inline-flex">
                  <a className="text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    </>
  )
}

export default Contact