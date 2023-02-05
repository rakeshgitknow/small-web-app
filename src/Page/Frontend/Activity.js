import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { Driver } from '../../Assets';
import { GoogleMapComponents } from '../../Component';

export default function Activity() {
  const [toogle, setToogle] = useState();

  return (
    <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
      <section className={`sm:flex justify-between items-center`}>
        <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>Activity</h1>

        <div className={`flex mt-3 sm:mt-0`}>
            <div className={`w-72 relative`}>
                <input
                  className={`form-control search-btn`}
                  type="text"
                  name="search"
                  placeholder={`Search`}
                />
               <button className='absolute inline-block top-3 left-3 text-slate-500 hover:text-indigo-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
               </button>
            </div>
            <button className='inline-flex items-center px-4 ml-2 bg-white border rounded-md hover:bg-indigo-500 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
              </svg>
              <span className='pl-1 text-sm font-medium '>Filter</span>
            </button>
        </div>
      </section>

      <section className='grid items-start grid-cols-1 pt-12 md:grid-cols-2 sm:gap-y-6 gap-y-4 sm:gap-x-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
            <div className='col-span-2 bg-white border rounded-lg border-slate-200'>
              <div className='p-4'>
                <p className='text-xs'>Jan 6, 2022</p>
                <div className='flex items-center justify-between pt-3'>
                  <p className='text-xl font-semibold text-slate-800'>
                    #3066
                  </p>
                  <div className='inline-flex items-center px-3 py-1 text-indigo-500 bg-indigo-50/50 rounded-xl'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      </span>
                      <span className='pl-2 text-xs font-medium'>
                        Out for delivery
                      </span>
                  </div>
                </div>
              </div>
              <div className='px-5 py-2 text-right border-t border-t-slate-100'>
                {toogle === 1 ? (
                  <button onClick={() => setToogle()} className='inline-block text-xs font-medium text-indigo-600'>Close</button>
                ):(
                  <button onClick={() => setToogle(1)} className='inline-block text-xs font-medium text-indigo-600'>View</button>
                )}
                
              </div>
            </div>
            <div className='hidden px-4 py-3 bg-white border rounded-lg sm:block border-slate-200'>
              <img src={Driver} alt="" className="flex-none object-cover w-12 h-12 rounded-full"/>

              <p className='pt-3 text-xs'>Jean deliver in...</p>

              <p className='text-xl text-slate-800'>16 mins </p>
            </div>
            <div className='col-span-full'>
              <Transition
              show={toogle === 1}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className='p-5 bg-white mt-0.5 border rounded-lg col-span-full border-slate-200'>
                <div className='flex items-center justify-between pb-5 text-sm sm:block text-slate-700'>
                  <div className='flex flex-col items-center justify-between pr-5 space-y-5 text-sm sm:space-y-0 sm:flex-row sm:pr-0'>
                    <p className='sm:w-1/3'>270 University Way</p>
                    <span className='inline-flex px-2 py-0.5 text-xs rounded-xl bg-slate-100 text-slate-500'>
                      24min
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                    <p className='text-right sm:w-1/3'>47 Waterfall Road</p>
                  </div>

                  <div className='block w-2/5 h-32 sm:hidden mapSectionsmall'>
                    <GoogleMapComponents/>
                  </div>
                </div>

                <div className='pt-5 border-t'>
                  <p className='text-xs text-slate-500'>Auth Code</p>
                  <p className='pt-2 text-sm'>This code is used by the delivery partner to verify the package is delivered to the recipient.</p>
                  <p className='pt-1 text-xl font-medium text-slate-800'>406930</p>
                </div>
              </div>
              </Transition>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
            <div className='col-span-2 bg-white border rounded-lg border-slate-200'>
              <div className='p-4'>
                <p className='text-xs'>Jan 6, 2022</p>
                <div className='flex items-center justify-between pt-3'>
                  <p className='text-xl font-semibold text-slate-800'>
                    #3066
                  </p>
                  <div className='inline-flex items-center px-3 py-1 text-indigo-500 bg-indigo-50/50 rounded-xl'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      </span>
                      <span className='pl-2 text-xs font-medium'>
                        Out for delivery
                      </span>
                  </div>
                </div>
              </div>
              <div className='px-5 py-2 text-right border-t border-t-slate-100'>
                {toogle === 2 ? (
                  <button onClick={() => setToogle()} className='inline-block text-xs font-medium text-indigo-600'>Close</button>
                ):(
                  <button onClick={() => setToogle(2)} className='inline-block text-xs font-medium text-indigo-600'>View</button>
                )}
                
              </div>
            </div>
            <div className='hidden px-4 py-3 bg-white border rounded-lg sm:block border-slate-200'>
              <img src={Driver} alt="" className="flex-none object-cover w-12 h-12 rounded-full"/>

              <p className='pt-3 text-xs'>Jean deliver in...</p>

              <p className='text-xl text-slate-800'>16 mins </p>
            </div>
            <div className='col-span-full'>
              <Transition
              show={toogle === 2}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className='p-5 bg-white mt-0.5 border rounded-lg col-span-full border-slate-200'>
                <div className='flex items-center justify-between pb-5 text-sm sm:block text-slate-700'>
                  <div className='flex flex-col items-center justify-between pr-5 space-y-5 text-sm sm:space-y-0 sm:flex-row sm:pr-0'>
                    <p className='sm:w-1/3'>270 University Way</p>
                    <span className='inline-flex px-2 py-0.5 text-xs rounded-xl bg-slate-100 text-slate-500'>
                      24min
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                    <p className='text-right sm:w-1/3'>47 Waterfall Road</p>
                  </div>

                  <div className='block w-2/5 h-32 sm:hidden mapSectionsmall'>
                    <GoogleMapComponents/>
                  </div>
                </div>

                <div className='pt-5 border-t'>
                  <p className='text-xs text-slate-500'>Auth Code</p>
                  <p className='pt-2 text-sm'>This code is used by the delivery partner to verify the package is delivered to the recipient.</p>
                  <p className='pt-1 text-xl font-medium text-slate-800'>406930</p>
                </div>
              </div>
              </Transition>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
            <div className='col-span-2 bg-white border rounded-lg border-slate-200'>
              <div className='p-4'>
                <p className='text-xs'>Jan 6, 2022</p>
                <div className='flex items-center justify-between pt-3'>
                  <p className='text-xl font-semibold text-slate-800'>
                    #3066
                  </p>
                  <div className='inline-flex items-center px-3 py-1 text-indigo-500 bg-indigo-50/50 rounded-xl'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      </span>
                      <span className='pl-2 text-xs font-medium'>
                        Out for delivery
                      </span>
                  </div>
                </div>
              </div>
              <div className='px-5 py-2 text-right border-t border-t-slate-100'>
                {toogle === 3 ? (
                  <button onClick={() => setToogle()} className='inline-block text-xs font-medium text-indigo-600'>Close</button>
                ):(
                  <button onClick={() => setToogle(3)} className='inline-block text-xs font-medium text-indigo-600'>View</button>
                )}
                
              </div>
            </div>
            <div className='hidden px-4 py-3 bg-white border rounded-lg sm:block border-slate-200'>
              <img src={Driver} alt="" className="flex-none object-cover w-12 h-12 rounded-full"/>

              <p className='pt-3 text-xs'>Jean deliver in...</p>

              <p className='text-xl text-slate-800'>16 mins </p>
            </div>
            <div className='col-span-full'>
              <Transition
              show={toogle === 3}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className='p-5 bg-white mt-0.5 border rounded-lg col-span-full border-slate-200'>
                <div className='flex items-center justify-between pb-5 text-sm sm:block text-slate-700'>
                  <div className='flex flex-col items-center justify-between pr-5 space-y-5 text-sm sm:space-y-0 sm:flex-row sm:pr-0'>
                    <p className='sm:w-1/3'>270 University Way</p>
                    <span className='inline-flex px-2 py-0.5 text-xs rounded-xl bg-slate-100 text-slate-500'>
                      24min
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                    <p className='text-right sm:w-1/3'>47 Waterfall Road</p>
                  </div>

                  <div className='block w-2/5 h-32 sm:hidden mapSectionsmall'>
                    <GoogleMapComponents/>
                  </div>
                </div>

                <div className='pt-5 border-t'>
                  <p className='text-xs text-slate-500'>Auth Code</p>
                  <p className='pt-2 text-sm'>This code is used by the delivery partner to verify the package is delivered to the recipient.</p>
                  <p className='pt-1 text-xl font-medium text-slate-800'>406930</p>
                </div>
              </div>
              </Transition>
            </div>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
        
            <div className='col-span-2 bg-white border rounded-lg border-slate-200'>
              <div className='p-4'>
                <p className='text-xs'>Jan 6, 2022</p>
                <div className='flex items-center justify-between pt-3'>
                  <p className='text-xl font-semibold text-slate-800'>
                    #3066
                  </p>
                  <div className='inline-flex items-center px-3 py-1 text-indigo-500 bg-indigo-50/50 rounded-xl'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      </span>
                      <span className='pl-2 text-xs font-medium'>
                        Out for delivery
                      </span>
                  </div>
                </div>
              </div>
              <div className='px-5 py-2 text-right border-t border-t-slate-100'>
                {toogle === 4 ? (
                  <button onClick={() => setToogle()} className='inline-block text-xs font-medium text-indigo-600'>Close</button>
                ):(
                  <button onClick={() => setToogle(4)} className='inline-block text-xs font-medium text-indigo-600'>View</button>
                )}
                
              </div>
            </div>
            <div className='hidden px-4 py-3 bg-white border rounded-lg sm:block border-slate-200'>
              <img src={Driver} alt="" className="flex-none object-cover w-12 h-12 rounded-full"/>

              <p className='pt-3 text-xs'>Jean deliver in...</p>

              <p className='text-xl text-slate-800'>16 mins </p>
            </div>
            <div className='col-span-full'>
              <Transition
              show={toogle === 4}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className='p-5 bg-white mt-0.5 border rounded-lg col-span-full border-slate-200'>
                <div className='flex items-center justify-between pb-5 text-sm sm:block text-slate-700'>
                  <div className='flex flex-col items-center justify-between pr-5 space-y-5 text-sm sm:space-y-0 sm:flex-row sm:pr-0'>
                    <p className='sm:w-1/3'>270 University Way</p>
                    <span className='inline-flex px-2 py-0.5 text-xs rounded-xl bg-slate-100 text-slate-500'>
                      24min
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                    <p className='text-right sm:w-1/3'>47 Waterfall Road</p>
                  </div>

                  <div className='block w-2/5 h-32 sm:hidden mapSectionsmall'>
                    <GoogleMapComponents/>
                  </div>
                </div>

                <div className='pt-5 border-t'>
                  <p className='text-xs text-slate-500'>Auth Code</p>
                  <p className='pt-2 text-sm'>This code is used by the delivery partner to verify the package is delivered to the recipient.</p>
                  <p className='pt-1 text-xl font-medium text-slate-800'>406930</p>
                </div>
              </div>
              </Transition>
            </div>
        </div>
      </section>
      
    </section>
  )
}
