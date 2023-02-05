import React from 'react';
import { Driver } from '../../Assets';

export default function Notifications() {

  return (
    <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
      
      <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>Notifications</h1>

      <section className=''>
        <div className='grid lg:grid-cols-3'>
          <div className='lg:col-span-2'>

            <p className='pt-10 text-lg font-medium'>Pick Up</p>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>


            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='flex items-center justify-center w-10 h-10 p-2 border rounded border-slate-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                </div>
                
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                          <p className='text-sm font-medium sm:text-base text-slate-900'>Message -  Thomas</p>
                          <span className='pl-3 text-xs'>2 mins ago</span>
                        </div>
                        <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                          Hi, Cant find the front gate? 
                        </p>
                        <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                          Can you please help?
                        </p>

                        <div className='pt-2'>
                          <button className='inline-block mr-4 text-sm font-medium text-slate-500 hover:text-slate-600'>
                            Later
                          </button>

                          <button className='inline-block text-sm font-medium text-indigo-500 hover:text-indigo-600'>
                            Reply via text
                          </button>
                    </div>
                </div>
              </div>
            </div>


            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>


            <p className='pt-10 text-lg font-medium'>Yesterday</p>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12'>
                  <img className='object-cover w-10 h-10 sm:w-12 sm:h-12' src={Driver} alt=''/>
                  <span className='absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full sm:w-4 sm:h-4 bg-emerald-500'></span>
                </div>
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                      <p className='text-sm font-medium sm:text-base text-slate-900'>Package Collected</p>
                      <span className='pl-3 text-xs'>2 mins ago</span>
                    </div>
                    <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                      A Delivery Partner has collected job #20233 and package is in transit to recpient.
                    </p>
                </div>
              </div>
            </div>

            <div className='relative p-3 mt-3 bg-white rounded-lg sm:p-5 sm:pr-8 sm:mt-4'>
              <button className='absolute sm:top-3 sm:right-3 right-1 top-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className='flex'>
                <div className='flex items-center justify-center w-10 h-10 p-2 border rounded border-slate-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                </div>
                
                <div className='flex-1 pl-3 sm:pl-5'>
                    <div className='flex items-center'>
                          <p className='text-sm font-medium sm:text-base text-slate-900'>Message -  Thomas</p>
                          <span className='pl-3 text-xs'>2 mins ago</span>
                        </div>
                        <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                          Hi, Cant find the front gate? 
                        </p>
                        <p className='pt-1 text-xs sm:text-sm text-slate-500'>
                          Can you please help?
                        </p>

                        <div className='pt-2'>
                          <button className='inline-block mr-4 text-sm font-medium text-slate-500 hover:text-slate-600'>
                            Later
                          </button>

                          <button className='inline-block text-sm font-medium text-indigo-500 hover:text-indigo-600'>
                            Reply via text
                          </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </section>
  )
}
