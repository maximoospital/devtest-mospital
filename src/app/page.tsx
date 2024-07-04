import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StarFilled } from '@ant-design/icons';

const Home = () => {

  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <div className="overflow-y-auto h-screen bg-gris nbm:bg-transparent">
          <Header />
          <main className="flex flex-1 flex-col items-center justify-between p-0 pb-12">
            <div className="title px-1">
              <h1 className="text-4xl font-bold text-center order-progress pt-8 nbm:pt-0 leading-[4rem]">Wait ! Your Order In Progress.</h1>
              <h2 className="text-2xl font-bold text-center lorem-ipsum pt-3">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h2>
            </div>
            <div className="steps pt-4 nbm:pt-8 px-2">
              <ol className="items-center w-full flex space-x-8 lg:space-x-10 xl:space-x-24 space-y-0 rtl:space-x-reverse pasos align-middle">
                  <li className="flex flex-col nbm:flex-row items-center text-black nbm:space-x-2.5 rtl:space-x-reverse">
                      <span className="flex items-center justify-center w-8 h-8 shrink-0">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2"/>
                          <path d="M9.99977 20L16.6586 27L29.9998 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>
                          <p className="text-xs sm:text-base lg:text-lg before:content-['Cart_Review'] nbm:before:content-['Step_1_:_Cart_Review']"></p>
                      </span>
                  </li>
                  <li className="flex flex-col nbm:flex-row items-center text-black nbm:space-x-2.5 rtl:space-x-reverse">
                      <span className="flex items-center justify-center w-8 h-8 shrink-0">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2"/>
                          <path d="M9.99977 20L16.6586 27L29.9998 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>
                          <p className="text-xs sm:text-base lg:text-lg before:content-['Checkout'] nbm:before:content-['Step_2_:_Checkout']"></p>
                      </span>
                  </li>
                  <li className="flex flex-col nbm:flex-row items-center text-black nbm:space-x-2.5 rtl:space-x-reverse">
                      <span className="flex items-center justify-center w-8 h-8 shrink-0">
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2"/>
                          <path d="M19.6033 27.29C18.89 27.29 18.2333 27.1633 17.6333 26.91C17.0333 26.6567 16.5166 26.2967 16.0833 25.83C15.65 25.3567 15.3333 24.7933 15.1333 24.14L16.5333 23.72C16.7733 24.4333 17.1666 24.9733 17.7133 25.34C18.2666 25.7067 18.89 25.8833 19.5833 25.87C20.2233 25.8567 20.7733 25.7133 21.2333 25.44C21.7 25.1667 22.0566 24.7867 22.3033 24.3C22.55 23.8133 22.6733 23.25 22.6733 22.61C22.6733 21.63 22.3866 20.8433 21.8133 20.25C21.2466 19.65 20.4966 19.35 19.5633 19.35C19.3033 19.35 19.03 19.3867 18.7433 19.46C18.4566 19.5267 18.19 19.6233 17.9433 19.75L17.2033 18.58L22.8033 13.41L23.0433 14.01H15.7033V12.6H24.0233V14.03L19.1433 18.69L19.1233 18.11C20.1233 17.9833 21.0033 18.0967 21.7633 18.45C22.5233 18.8033 23.1166 19.3433 23.5433 20.07C23.9766 20.79 24.1933 21.6367 24.1933 22.61C24.1933 23.53 23.9933 24.3433 23.5933 25.05C23.2 25.75 22.6566 26.3 21.9633 26.7C21.27 27.0933 20.4833 27.29 19.6033 27.29Z" fill="white"/>
                        </svg>
                      </span>
                      <span>
                          <p className="text-xs sm:text-base lg:text-lg font-bold before:content-['Special_Offer'] nbm:before:content-['Step_3_:_Special_Offer']"></p>
                      </span>
                  </li>
                  <li className="flex flex-col nbm:flex-row items-center text-black nbm:space-x-2.5 rtl:space-x-reverse">
                      <span className="flex items-center justify-center w-8 h-8 shrink-0">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2"/>
                          <path d="M21.74 27V24.21H15V22.81L19.82 12.6H21.47L16.65 22.81H21.74V18.61H23.22V22.81H24.79V24.21H23.22V27H21.74Z" fill="#2C7EF8"/>
                        </svg>
                      </span>
                      <span>
                          <p className="text-xs sm:text-base lg:text-lg before:content-['Confirmation'] nbm:before:content-['Step_4_:_Confirmation']"></p>
                      </span>
                  </li>
              </ol>
            </div>
            <div className="rounded product nbm:w-11/12 2xl:w-7/12 px-0 pt-8">
              <div className="rounded bg-[#FAFAFA] p-6 flex flex-wrap md:flex-nowrap gap-x-6">
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-4xl font-bold otomb block md:hidden"><span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span>$14 Each</span> ($84.00 total!)</h2>
                  <img src="/assets/images/Product.png" alt="Product Image" className="w-full object-cover rounded-lg"/>
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-2  hidden md:block">
                    <div>
                      <div className="flex items-center">
                        {/* Star rating component */}
                        <img src="/assets/images/pfp.png" alt="Reviewer" className="w-10 h-10 rounded-full"/>
                        <div className="flex flex-col ml-2">
                          <img src="/assets/customicons/stars.svg" alt="Verified" className="w-20 h-6"/>
                          <div className='flex flex-row space-x-1'>
                           <p className="text-sm font-bold">Ken T.</p>
                            <img src="/assets/customicons/verified.svg" alt="Verified" className="w-4 h-4 ml-2"/>
                            <p className="text-sm verifiedcustomer">Verified Customer</p>
                          </div>
                        </div>
                      </div>
                      <p className="testimonial">&quot;As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-2 mt-2 md:mt-0 md:pl-4">
                  <h2 className="text-3xl font-bold oto hidden md:block"><span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span>$14 Each</span> ($84.00 total!)</h2>
                  <div className="p-4 pl-0 rounded-lg flex">
                    <img src="/assets/images/producticon.png" alt="Another Image" className="w-28 h-28 rounded-lg mr-4"/>
                    <div>
                      <div className="flex flex-col prod-bio">
                        {/* Star rating component */}
                        <div className="flex flex-row items-center space-x-2 justify-between">
                          <p className="text-md font-bold ml-0 prod-bio-title">Clairifion Air Ionizer</p>
                          <div className="flex flex-row space-x-2">
                            <p className="text-xl font-semibold ml-0 price-before"><span>$180</span></p>
                            <p className="text-xl font-semibold ml-0 price"><span>$84</span></p>
                          </div>
                        </div>
                        <span className="text-yellow-400"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
                      </div>
                      <div className="flex flex-row items-center space-x-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="7.99996" cy="7.99999" rx="7.99996" ry="7.99999" fill="#E3EEFF"/>
                          <ellipse cx="8.05925" cy="8.05899" rx="4.26664" ry="4.26666" fill="#2C7EF8"/>
                        </svg> 
                        <p className='stock'>12 left in Stock</p>
                        </div>
                      <p className="summary">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                    </div>
                  </div>
                  <ul className="list-none pl-0 features pb-3">
                    <li className="mb-2 flex items-center">
                      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Negative Ion Technology may <span className='ml-1'>help with allergens</span></li>
                    <li className="mb-2 flex items-center">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Designed for <span className="ml-1">air rejuvenation</span></li>
                    <li className="mb-2 flex items-center">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span className='mr-1'>Perfect for every room</span> in all types of places.</li>
                  </ul>
                  <div className="coupon p-4 py-3 rounded-lg flex flex-row items-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#2C7EF8"/>
                    <mask id="mask0_1_121" maskUnits="userSpaceOnUse" x="6" y="6" width="20" height="20">
                    <rect x="6.40002" y="6.40002" width="19.2" height="19.2" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1_121)">
                    <path d="M12.4001 15.2001C11.6268 15.2001 10.9668 14.9268 10.4201 14.3801C9.87343 13.8334 9.6001 13.1734 9.6001 12.4001C9.6001 11.6268 9.87343 10.9668 10.4201 10.4201C10.9668 9.87343 11.6268 9.6001 12.4001 9.6001C13.1734 9.6001 13.8334 9.87343 14.3801 10.4201C14.9268 10.9668 15.2001 11.6268 15.2001 12.4001C15.2001 13.1734 14.9268 13.8334 14.3801 14.3801C13.8334 14.9268 13.1734 15.2001 12.4001 15.2001ZM12.4001 13.6001C12.7334 13.6001 13.0168 13.4834 13.2501 13.2501C13.4834 13.0168 13.6001 12.7334 13.6001 12.4001C13.6001 12.0668 13.4834 11.7834 13.2501 11.5501C13.0168 11.3168 12.7334 11.2001 12.4001 11.2001C12.0668 11.2001 11.7834 11.3168 11.5501 11.5501C11.3168 11.7834 11.2001 12.0668 11.2001 12.4001C11.2001 12.7334 11.3168 13.0168 11.5501 13.2501C11.7834 13.4834 12.0668 13.6001 12.4001 13.6001ZM19.6001 22.4001C18.8268 22.4001 18.1668 22.1268 17.6201 21.5801C17.0734 21.0334 16.8001 20.3734 16.8001 19.6001C16.8001 18.8268 17.0734 18.1668 17.6201 17.6201C18.1668 17.0734 18.8268 16.8001 19.6001 16.8001C20.3734 16.8001 21.0334 17.0734 21.5801 17.6201C22.1268 18.1668 22.4001 18.8268 22.4001 19.6001C22.4001 20.3734 22.1268 21.0334 21.5801 21.5801C21.0334 22.1268 20.3734 22.4001 19.6001 22.4001ZM19.6001 20.8001C19.9334 20.8001 20.2168 20.6834 20.4501 20.4501C20.6834 20.2168 20.8001 19.9334 20.8001 19.6001C20.8001 19.2668 20.6834 18.9834 20.4501 18.7501C20.2168 18.5168 19.9334 18.4001 19.6001 18.4001C19.2668 18.4001 18.9834 18.5168 18.7501 18.7501C18.5168 18.9834 18.4001 19.2668 18.4001 19.6001C18.4001 19.9334 18.5168 20.2168 18.7501 20.4501C18.9834 20.6834 19.2668 20.8001 19.6001 20.8001ZM10.1601 21.8401C10.0134 21.6934 9.9401 21.5068 9.9401 21.2801C9.9401 21.0534 10.0134 20.8668 10.1601 20.7201L20.7201 10.1601C20.8668 10.0134 21.0534 9.9401 21.2801 9.9401C21.5068 9.9401 21.6934 10.0134 21.8401 10.1601C21.9868 10.3068 22.0601 10.4934 22.0601 10.7201C22.0601 10.9468 21.9868 11.1334 21.8401 11.2801L11.2801 21.8401C11.1334 21.9868 10.9468 22.0601 10.7201 22.0601C10.4934 22.0601 10.3068 21.9868 10.1601 21.8401Z" fill="white"/>
                    </g>
                  </svg>
                    <p className='ml-3'>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.</p>
                  </div>
                  <button className="discount-button w-full text-white px-4 py-2 rounded-lg extended">YES - CLAIM MY DISCOUNT →</button>
                  <img src="/assets/images/tags-mobile.svg" alt="Secure" className="nbm:hidden w-full"/>
                  <img src="/assets/images/tags.svg" alt="Secure" className="hidden nbm:block w-full"/>
                  <button className="deny-discount w-full text-white px-4 py-2 rounded-lg extended">NO THANKS, I DON&apos;T WANT THIS.</button>
                  <div className='flex flex-row items-center space-x-2 mt-4'>
                    <img src="/assets/images/satisfaction.png" alt="Satisfaction" className="w-20 h-20"/>
                    <p className="text-xs guarantee">If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                    </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
    </div>
  );
}

export default Home;