import { Listbox, Transition } from '@headlessui/react';
import { Formik } from 'formik';
import React, { Fragment, useState } from 'react'


const countryData = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]

export default function BillingModal({setCloseModal}) {
    const closeModal = () => {
        setCloseModal(false)
      }

    const [country, setCountry] = useState(countryData[0])

    const [cardData, setCardData] = useState({
        nameOfCard: "",
        expiry: "",
        cardNumber: "",
        cvv: "",
        email: "",
        streetAddress: "",
        city: "",
        State: "",
        province: "",
    });

  return (
    <div className='max-w-3xl'>
        <Formik
          initialValues={cardData}
          validate={values => {
            const errors = {};
            // if (!values.email) {
            //   errors.email = 'Required';
            // } else if (
            //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //   errors.email = 'Invalid email address';
            // }
            // return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(cardData)
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className={`space-y-5 pt-5 `} onSubmit={handleSubmit}>
                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Card Details</p>
                    </div>
                    <div className={`col-span-3`}>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2'>
                                <label className='text-sm text-slate-800'>Name on card</label>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="nameOfCard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nameOfCard}
                                    placeholder={``}
                                />
                                {errors.nameOfCard && touched.nameOfCard && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.nameOfCard}
                                    </p>
                                )}
                            </div>
                            
                            <div className='col-span-1'>
                                <label className='text-sm text-slate-800'>Expiry</label>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="expiry"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.expiry}
                                    placeholder={``}
                                />
                                {errors.expiry && touched.expiry && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.expiry}
                                    </p>
                                )}
                            </div>

                            <div className='col-span-2'>
                                <label className='text-sm text-slate-800'>Card Number</label>
                                <div className='relative'>
                                    <span className='absolute top-3 left-4 text-slate-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </span>
                                    <input
                                        className={`form-control icon-input`}
                                        type="text"
                                        name="cardNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardNumber}
                                        placeholder={``}
                                    />
                                </div>
                                {errors.cardNumber && touched.cardNumber && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.cardNumber}
                                    </p>
                                )}
                            </div>
                            
                            <div className='col-span-1'>
                                <label className='text-sm text-slate-800'>CVV</label>
                                <input
                                    className={`form-control`}
                                    type="password"
                                    name="cvv"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cvv}
                                    placeholder={``}
                                />
                                {errors.cvv && touched.cvv && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.cvv}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid pt-5 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Email Address</p>
                        <p className='pt-1 text-xs '>Invoices will be sent to this email address.</p>
                    </div>
                    <div className={`col-span-3`}>

                        <div>
                            <div className='relative'>
                                <span className='absolute top-3 left-4 text-slate-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <input
                                    className={`form-control icon-input`}
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder={`Email`}
                                />
                            </div>
                        
                            {errors.email && touched.email && (
                                <p className='mt-0.5 text-xs text-red-500'>
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        <button className='inline-flex items-center mt-4 space-x-2 text-sm font-medium text-indigo-500 hover:text-indigo-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            <span>
                                Add another
                            </span>
                        </button>
                        
                        
                    </div>
                </div>

                <div className='grid pt-5 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Street address</p>
                    </div>
                    <div className={`col-span-3`}>
                    
                        <input
                            className={`form-control`}
                            type="text"
                            name="streetAddress"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.streetAddress}
                            placeholder={`Street Address`}
                        />
                        {errors.streetAddress && touched.streetAddress && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.streetAddress}
                            </p>
                        )}
                        
                    </div>
                </div>
                
                <div className='grid pt-5 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>City</p>
                    </div>
                    <div className={`col-span-3`}>
                    
                        <input
                            className={`form-control`}
                            type="text"
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            placeholder={`City`}
                        />
                        {errors.city && touched.city && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.city}
                            </p>
                        )}
                        
                    </div>
                </div>

                <div className='grid pt-5 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>State / Province</p>
                    </div>
                    <div className={`col-span-3`}>
                    
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="State"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.State}
                                    placeholder={`State`}
                                />
                                {errors.State && touched.State && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.State}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="province"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.province}
                                    placeholder={`Province`}
                                />
                                {errors.province && touched.province && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.province}
                                    </p>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='grid pt-5 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Country</p>
                    </div>
                    <div className={`col-span-3`}>
                       
                        
                        <Listbox value={country} onChange={setCountry}>
                            <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2.5 pl-3 pr-10 text-left bg-white rounded-md border border-slate-200 cursor-default outline-none sm:text-sm">
                                <span className="block truncate">{country.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full p-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {countryData.map((person, personIdx) => (
                                    <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 transition-all ${
                                        active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                    >
                                    {({ selected }) => (
                                        <>
                                        <span
                                            className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {person.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                        ) : null}
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                                </Listbox.Options>
                            </Transition>
                            </div>
                        </Listbox>
                        
                        
                    </div>
                </div>

                <div className='flex items-start justify-end border-t sm:pb-5 border-slate-200 pt-7'>
                    <div className='flex'>
                        <button onClick={() => closeModal()} type='button' className='inline-block px-4 py-2 mr-2 text-sm font-medium bg-white border rounded-md text-slate-800 hover:bg-slate-50 border-slate-200'>
                            Cancel
                        </button>
                        <button className='inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-500 border rounded-md hover:bg-indigo-600 border-slate-200'>
                            Save
                        </button>
                    </div>
                </div>
              
            </form>
          )}
        </Formik>

    </div>
  )
}
