import { Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleMapComponents } from '../../Component';
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { DropdownItems } from '../../Config';
import { Listbox, Transition } from '@headlessui/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input';

export default function Delivery() {
  const GoogleApi = 'AIzaSyCNKfLc9Skv5ijjGqkTSfJjOsMHIYuFvLc';
  const DropdownData = DropdownItems;
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [packageCover, setPackageCover] = useState();
  const [pikPhoneNumber, setPikPhoneNumber] = useState();
  const [dropPhoneNumber, setDropPhoneNumber] = useState();

  const [pickUpLocation, setPickUpLocation] = useState('kolkata');
  const [dropUpLocation, setDropValueTwo] = useState('chandannagar');

  const HandelPickup = (val) => {
    setPickUpLocation(val);
    console.log(val);
  }
  const HandelDrop = (val) => {
    setDropValueTwo(val);
    console.log(val)
  }

  const [DeliveryData, setDeliveryData] = useState({
    pickupLocation: "",
    pickupFirstName: "",
    pickupLastName: "",
    pickupCompany: "",
    pickupPhone: "",
    pickupEmail: "",
    saveToAddress: false,
    dropLocation: "",
    dropFirstName: "",
    dropLastName: "",
    dropPhone: "",
    dropEmail: "",
    packageSize: 1,
    deliveryNotes: "",
    referenceNumber: "",
    packageCover: "",
    deliveredTime:"",
    handover: false,
  })
  

  // const { ref } = usePlacesWidget({
  //   apiKey: 'AIzaSyCNKfLc9Skv5ijjGqkTSfJjOsMHIYuFvLc',
  //   onPlaceSelected: (place) => {
  //     setFieldValue("country", place.formatted_address);
  //   },
  // });

  // console.log(pikPhoneNumber);
  // console.log(FieldValue)

  return (
    <section className='grid md:grid-cols-5 gap-x-1'>
      <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
        <section className={`sm:flex justify-between items-center`}>
          <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>New Delivery</h1>

          <div className={`border md:text-base text-sm border-slate-300 bg-white inline-block py-3 mt-3 sm:mt-0 px-5 rounded-lg text-slate-600`}>
            Est. Delivery Fee 
            <span className={`font-semibold text-black pl-8`}>$ 00.00</span>
          </div>
        </section>

        <Formik
          initialValues={DeliveryData}
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
              console.log(DeliveryData)
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate('/delivery/checkout');
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
            setFieldValue,
            isSubmitting,
          }) => (
            <form className={`grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-4`} onSubmit={handleSubmit}>
              <h3 className={`font-medium sm:text-xl text-lg text-slate-700 col-span-full sm:pt-10 pt-8`}>Pick Up</h3>

              <div className={`col-span-full`}>

                <div className='relative'>
                  <span className='absolute top-3 left-4 text-slate-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>  
                  
                  <Autocomplete
                    className={`form-control icon-input`}
                    id="pickupLocation"
                    name="pickupLocation"
                    placeholder="Address"
                    value={values.pickupLocation}
                    apiKey={'AIzaSyCNKfLc9Skv5ijjGqkTSfJjOsMHIYuFvLc'}
                    onPlaceSelected={(place) =>
                      setFieldValue("pickupLocation", place.formatted_address)
                    }
                    onBlur={() => HandelPickup(values.pickupLocation)}
                    onChange={handleChange}
                  />
                </div>

                {errors.pickupLocation && touched.pickupLocation && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupLocation}
                  </p>
                )}

              </div>

              <div className={`col-span-1`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="pickupFirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pickupFirstName}
                  placeholder={`First Name`}
                />
                {errors.pickupFirstName && touched.pickupFirstName && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupFirstName}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="pickupLastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pickupLastName}
                  placeholder={`Last Name`}
                />
                {errors.pickupLastName && touched.pickupLastName && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupLastName}
                  </p>
                )}
              </div>

              <div className={`col-span-full`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="pickupCompany"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pickupCompany}
                  placeholder={`Company`}
                />
                {errors.pickupCompany && touched.pickupCompany && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupCompany}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <PhoneInput
                  className={`form-control`}
                  international
                  name="pickupPhone"
                  defaultCountry="AU"
                  placeholder="Phone number"
                  initialValueFormat="national"
                  value={pikPhoneNumber}
                  onChange={setPikPhoneNumber}
                  error={pikPhoneNumber ? (isValidPhoneNumber(pikPhoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
                />
                
                {errors.pickupPhone && touched.pickupPhone && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupPhone}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <div className='relative'>
                    <span className='absolute top-3 left-4 text-slate-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>  
                  <input
                    className={`form-control icon-input`}
                    type="text"
                    name="pickupEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pickupEmail}
                    placeholder={`Email`}
                  />
                </div>
                {errors.pickupEmail && touched.pickupEmail && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.pickupEmail}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <div className='form-checkbox'>
                  <input id='saveToAddress' name='saveToAddress' onChange={handleChange}  onBlur={handleBlur} type='checkbox'/>
                  <label htmlFor='saveToAddress'>
                    <span className='relative inline-block text-sm -top-1'>Save to Address Book</span>
                  </label>
                </div>
                
              </div>

              <h3 className={`font-medium sm:text-xl text-lg text-slate-700 col-span-full sm:pt-10 pt-8`}>Drop Off</h3>

              <div className={`col-span-full`}>
                <div className='relative'>
                  <span className='absolute top-3 left-4 text-slate-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>  
                  <Autocomplete
                    className={`form-control icon-input`}
                    id="dropLocation"
                    name="dropLocation"
                    placeholder="Address"
                    value={values.dropLocation}
                    apiKey={'GoogleApi'}
                    onPlaceSelected={(place) =>
                      setFieldValue("dropLocation", place.formatted_address)
                    }
                    onBlur={() => HandelDrop(values.dropLocation)}
                    onChange={handleChange}
                  />
                </div>

                {errors.dropLocation && touched.dropLocation && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.dropLocation}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="dropFirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dropFirstName}
                  placeholder={`First Name`}
                />
                {errors.dropFirstName && touched.dropFirstName && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.dropFirstName}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="dropLastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dropLastName}
                  placeholder={`Last Name`}
                />
                {errors.dropLastName && touched.dropLastName && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.dropLastName}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <PhoneInput
                  className={`form-control`}
                  international
                  name="pickupPhone"
                  placeholder="Phone number"
                  defaultCountry="AU"
                  initialValueFormat="national"
                  value={dropPhoneNumber}
                  onChange={setDropPhoneNumber}
                  error={dropPhoneNumber ? (isValidPhoneNumber(dropPhoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
                />
                
                
                {errors.dropPhone && touched.dropPhone && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.dropPhone}
                  </p>
                )}
              </div>

              <div className={`col-span-1`}>
                <div className='relative'>
                    <span className='absolute top-3 left-4 text-slate-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>  
                  <input
                    className={`form-control icon-input`}
                    type="text"
                    name="dropEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dropEmail}
                    placeholder={`Email`}
                  />
                </div>
                {errors.dropEmail && touched.dropEmail && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.dropEmail}
                  </p>
                )}
              </div>

              <div className={`col-span-full`}>

                <Listbox value={country} onChange={setCountry}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2.5 pl-3 pr-10 text-left bg-white rounded-md border border-slate-200 cursor-default outline-none sm:text-sm">
                        <span className="block truncate">{country?.mainText ? country?.mainText : 'Select Package Size'}</span>
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
                        <Listbox.Options className="absolute z-10 w-full p-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {DropdownData?.packageSize.map((items, i) => (
                            <Listbox.Option
                              key={i}
                              className={({ active }) =>
                                  `relative cursor-default select-none py-2.5 rounded pl-12 pr-4 transition-all ${
                                  active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900'
                                  }`
                              }
                              value={items}
                            >
                            {({ selected }) => (
                                <>
                                <span dangerouslySetInnerHTML={{__html: items.icon}} className={`absolute inset-y-0 flex items-center pl-3 ${selected ? `text-indigo-600`:`text-slate-500`} left-0`}></span>
                                  <span  className={`block truncate ${ selected ? 'font-medium text-indigo-600' : 'font-normal'}`}>
                                      {items.mainText}
                                      <span className={`pl-2 font-normal text-xs ${selected ? `text-indigo-600`:`text-slate-500`} `}>{items.subText}</span>
                                  </span>
                                  {selected ? (
                                      <span className="absolute inset-y-0 flex items-center pl-3 text-indigo-600 right-5">
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
                
                {errors.packageSize && touched.packageSize && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.packageSize}
                  </p>
                )}
              </div>

              <h3 className={`font-medium sm:text-xl text-lg text-slate-700 col-span-full sm:pt-10 pt-8`}>Delivery Options</h3>

              <div className={`col-span-full`}>
                <input
                  className={`form-control`}
                  type="text"
                  name="referenceNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.referenceNumber}
                  placeholder={`Referecne Number`}
                />
                {errors.referenceNumber && touched.referenceNumber && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.referenceNumber}
                  </p>
                )}
              </div>

              <div className={`col-span-full`}>
                <textarea
                  className={`form-control`}
                  type="text"
                  name="deliveryNotes"
                  rows={5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.deliveryNotes}
                  placeholder={`Delivery Notes`}
                ></textarea>
                {errors.deliveryNotes && touched.deliveryNotes && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.deliveryNotes}
                  </p>
                )}
              </div>

              <div className={`col-span-full`}>
                <Listbox value={packageCover} onChange={setPackageCover}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2.5 pl-3 pr-10 text-left bg-white rounded-md border border-slate-200 cursor-default outline-none sm:text-sm">
                        <span className="block truncate">{packageCover?.mainText ? packageCover?.mainText : 'Select Package Cover'}</span>
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
                        <Listbox.Options className="absolute z-10 w-full p-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {DropdownData?.packageCover?.map((items, i) => (
                            <Listbox.Option
                              key={i}
                              className={({ active }) =>
                                  `relative cursor-default select-none py-2.5 rounded pl-12 pr-4 transition-all ${
                                  active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900'
                                  }`
                              }
                              value={items}
                            >
                            {({ selected }) => (
                                <>
                                <span dangerouslySetInnerHTML={{__html: items.icon}} className={`absolute inset-y-0 flex items-center pl-3 ${selected ? `text-indigo-600`:`text-slate-500`} left-0`}></span>
                                  <span  className={`block truncate ${ selected ? 'font-medium text-indigo-600' : 'font-normal'}`}>
                                      {items.mainText}
                                      <span className={`pl-2 font-normal text-xs ${selected ? `text-indigo-600`:`text-slate-500`} `}>{items.subText}</span>
                                  </span>
                                  {selected ? (
                                      <span className="absolute inset-y-0 flex items-center pl-3 text-indigo-600 right-5">
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
                
                {errors.packageCover && touched.packageCover && (
                  <p className='mt-0.5 text-xs text-red-500'>
                    {errors.packageCover}
                  </p>
                )}
              </div>

              <div className={`col-span-full`}>
                <label className='block pt-4 text-sm text-slate-600'>When do you need it delivered?</label>
                <div className='inline-flex mt-3 overflow-hidden bg-white border divide-x rounded border-slate-300'>
                  <div className='radio-group'>
                    <input id='deliveredTimeOne' onChange={handleChange}  onBlur={handleBlur} name='deliveredTime' value='Now' type='radio'/>
                    <label htmlFor='deliveredTimeOne'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>

                      <span>Now</span>
                    </label>             
                  </div>
                  <div className='radio-group'>
                    <input id='deliveredTimeTwo' onChange={handleChange}  onBlur={handleBlur} name='deliveredTime' type='radio' value='Later'/>
                    <label htmlFor='deliveredTimeTwo'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <span>Later</span>
                    </label>             
                  </div>
                </div>
              </div>

              <div className={`col-span-full`}>
                  <div className='mt-4 switch-box'>
                    <input id='handover' onChange={handleChange}  onBlur={handleBlur} name='handover' type='checkbox'/>
                    <label htmlFor='handover'>
                      <span className='block text-sm font-medium sm:text-base'>PkgAuth at handover</span>
                      <span className='block text-xs'>
                        A secure way to authorise packages
                      </span>
                    </label>             
                  </div>
              </div>

              <div className={`col-span-full sm:flex justify-end pt-5`}>
                <button type="button" disabled={isSubmitting} className={`bg-white hover:bg-slate-200 px-5 py-2.5 text-sm sm:inline-block block w-full sm:w-auto rounded-md border mr-5`}>
                  Save
                </button>
                <button type="submit" className={`bg-indigo-500 text-white px-5 text-sm py-2.5 justify-between mt-3 sm:mt-0 rounded-md inline-flex w-full sm:w-auto items-center hover:bg-indigo-600`} disabled={isSubmitting}>
                  Calculate & Checkout
                  <span className='pl-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </button>
              </div>

            </form>
          )}
        </Formik>
      </section>

      <section className={`h-screen col-span-2 hidden md:block mapSection`}>
        <GoogleMapComponents start={pickUpLocation} end={dropUpLocation}/>
        
      </section>
      
    </section>
  )
}
