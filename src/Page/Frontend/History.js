import React from 'react'
import MenuBar from '../../Component/Layout/MenuBar'
import { useAuth } from '../../Hook/useAuth';

export default function History() {
  const { user, logout } = useAuth();

  return (
    <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
      <section className={`sm:flex justify-between items-center`}>
        <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>History</h1>

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

      <section className='grid gap-4 pt-8 sm:pt-12 sm:gap-6 lg:grid-cols-3 sm:grid-cols-2'>
        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>

        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>


        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>


        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>



        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>



        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>



        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>



        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>



        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>


        <div className='bg-white border rounded-lg border-slate-200'>
          <div className='p-4'>
            <p className='text-xs'>Jan 6, 2022</p>
            <div className='flex items-center justify-between pt-3'>
              <p className='text-xl font-semibold text-slate-800'>
                #3066
              </p>
              <div className='inline-flex items-center px-3 py-1 text-green-500 bg-green-50 rounded-xl'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className='pl-2 text-xs font-medium'>
                    Delivered
                  </span>
              </div>
            </div>
          </div>
          <div className='px-5 py-2 text-right border-t border-t-slate-100'>
            <button className='inline-block text-xs font-medium text-indigo-600'>View</button>
          </div>
        </div>
            
      </section>
      
    </section>
  )
}
