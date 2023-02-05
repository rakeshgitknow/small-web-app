import React, { useState, Fragment } from 'react'
import { CardLogoOne, CardLogoTwo } from '../../Assets';
import { GoogleMapComponents } from '../../Component';
import { useAuth } from '../../Hook/useAuth';
import { Modal, BillingModal } from '../../Component';

export default function Checkout() {
  const { user, logout } = useAuth();
  const [isCard, setIsCard] = useState();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = (val) => {
    setIsOpen(val)
  }

  console.log(isOpen)

 


  const HandelCardDetails = (val) => {
    setIsCard(val)
  }

  return (
    <section className='grid md:grid-cols-5 gap-x-1'>
      <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
        <section className={`sm:flex justify-between items-center`}>
          <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>Checkout</h1>

          <div className={`border md:text-base text-sm border-slate-300 bg-white inline-block py-3 mt-3 sm:mt-0 px-5 rounded-lg text-slate-600`}>
            Est. Delivery Fee 
            <span className={`font-semibold text-black pl-8`}>$ 00.00</span>
          </div>
        </section>

        <section className='pt-10 sm:pt-14'>
          <div className='flex items-center justify-between p-3 text-sm bg-white border rounded-lg sm:block sm:px-4 sm:py-6 text-slate-700'>
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
          

          <div className='mt-5 sm:mt-7'>
            <p className='pt-5 pb-1 font-medium text-slate-700'>Discount code</p>
            <div className='flex'>
              <div className='flex-1 px-5 py-2 bg-white border rounded-md'>
                FRIENDS
              </div>
              <button className='inline-flex items-center justify-center w-12 p-2 ml-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
              </button>
            </div>

            <div className='py-5 space-y-5 mt-7 border-y'>
              <div className='flex justify-between text-sm text-slate-700'>
                  <span>Delivery Fee</span>
                  <span className='text-slate-500'>$28.00</span>
              </div>
              <div className='flex justify-between text-sm text-slate-700'>
                  <span>Package Cover</span>
                  <span className='text-slate-500'>$13.95</span>
              </div>
              <div className='flex justify-between text-sm text-slate-700'>
                  <span>Carbon Offset</span>
                  <span className='text-slate-500'>$0.98</span>
              </div>
              <div className='flex justify-between text-sm text-slate-700'>
                  <span>Discount</span>
                  <span className='text-red-500'>-$4.00</span>
              </div>
              <div className='flex justify-between text-sm text-slate-700'>
                  <span>GST</span>
                  <span className='text-green-500'>$3.38</span>
              </div>
            </div>
            <h1 className='py-5 text-2xl font-bold text-center border-b'>
              $38.03
            </h1>

            <div className='pt-5 space-y-5'>
              <div className={`flex justify-between p-5 border rounded-lg border-slate-100 ${isCard === 1 ? 'bg-indigo-100/70':'bg-white'}`}>
                <div className='flex'>
                  <div className='flex items-center justify-center w-12 p-2 bg-white border rounded-md h-7'>
                    <img src={CardLogoOne} alt=""/>
                  </div>
                  <div className='pl-4'>
                    <p className='text-slate-800'>Visa ending in 1234</p>
                    <button className='inline-block mt-1 text-sm font-medium text-indigo-500 border-0 outline-none'>Edit</button>
                  </div>
                </div>
                <button onClick={() => HandelCardDetails(1)} className={`w-5 h-5 border rounded-full ${isCard === 1 ? 'bg-indigo-500':'bg-white'}`}></button>
              </div>
            </div>
            
            <div className='flex flex-col items-center justify-between pt-4 pb-10 sm:flex-row'>
                <button onClick={() => setIsOpen(true)} className='inline-flex text-xs font-medium text-indigo-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <span className='pl-2'>
                    Add Payment Method
                  </span>
                </button>

                <button className='inline-flex mt-3 text-xs font-medium text-indigo-600 sm:mt-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span className='pl-2'>
                    Change Payment Method
                  </span>
                </button>
            </div>

            

          </div>
        </section>
        <button type="submit" className={`bg-indigo-500 text-white w-full justify-between sm:mt-5 px-5 text-base py-3 rounded-md flex items-center hover:bg-indigo-600`} >
          Order Now
          <span className='pl-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>

        {/* <button className='px-5 py-2 text-white bg-indigo-500 rounded' onClick={() => logout()}>Logout</button> */}
      </section>
      <section className={`h-screen col-span-2 hidden md:block mapSection`}>
        <GoogleMapComponents/>
      </section>

      <Modal isModal={isOpen} setIsOpen={closeModal}  title={'Add Payment Method'}>
        <BillingModal setCloseModal={closeModal} />
      </Modal>

    </section>
  )
}
