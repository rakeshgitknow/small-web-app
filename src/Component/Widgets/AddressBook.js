import React from 'react'

export default function AddressBook() {
  return (
    <div className='pt-8'>
        <div className='items-start justify-between border-b sm:flex pb-7 border-b-slate-200'>
            <div>
                <p className='text-base font-medium sm:text-lg text-slate-800'>Address Book</p>
                <p className='mt-1 text-xs text-slate-500'>Add places of work that you can select when making a new delivery order</p>
            </div>

            <div className='flex pt-3 sm:pt-0'>
                <button className='inline-block px-4 py-2 mr-2 text-sm font-medium bg-white border rounded-md text-slate-800 hover:bg-slate-50 border-slate-200'>
                    Cancel
                </button>
                <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border rounded-md hover:bg-indigo-600 border-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New
                </button>
            </div>

        </div>

        
        <div className={`space-y-8 pt-12 `} >
            
            <div className='grid gap-10 md:grid-cols-4'>
                <div>
                    <p className='text-sm font-medium text-slate-800 sm:text-base'>Your Places</p>
                    <p className='pt-1 text-xs '>Update your company logo and then choose where you want it to display.</p>
                </div>
                <div className={`md:col-span-3`}>
                    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                        <div className='p-5 bg-white rounded'>
                            <div className='flex items-center justify-between'>
                               <div className='flex items-center pr-4'>
                                    <p className='pr-2 text-sm font-medium text-slate-800 sm:text-base'>HQ</p>
                                    <span className='px-3 py-0.5 text-xs font-medium text-indigo-500 rounded-lg bg-indigo-50'>Primary</span>
                               </div> 
                               <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                               </button>
                            </div>
                            <p className='pt-5 text-sm text-slate-500'>47 Waterfall Road Nambour, QLD , 4556, AUD</p>
                        </div>


                        <div className='p-5 bg-white rounded'>
                            <div className='flex items-center justify-between'>
                               <div className='flex items-center pr-4'>
                                    <p className='pr-2 text-sm font-medium text-slate-800 sm:text-base'>HQ</p>
                                    <span className='px-3 py-0.5 text-xs font-medium text-indigo-500 rounded-lg bg-indigo-50'>Secondary</span>
                               </div> 
                               <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                               </button>
                            </div>
                            <p className='pt-5 text-sm text-slate-500'>47 Waterfall Road Nambour, QLD , 4556, AUD</p>
                        </div>



                       

                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
