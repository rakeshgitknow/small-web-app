import { Formik } from 'formik';
import React, { useState } from 'react';
import { Logo } from '../../Assets';

export default function Company() {
    const [companyData, setCompanyData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        abn: "",
        tagline: "",
        logo: Logo,
    });

    const HandelFile = (e) => {
        setCompanyData({...companyData, 'logo': e.currentTarget.files[0]});
    }
  return (
    <div className='pt-8'>
        <div className='items-start justify-between border-b sm:flex pb-7 border-b-slate-200'>
            <div>
                <p className='text-base font-medium sm:text-lg text-slate-800'>Company Profile</p>
                <p className='mt-1 text-xs text-slate-500'>Update your company photo and details here.</p>
            </div>

            <div className='flex pt-3 sm:pt-0'>
                <button className='inline-block px-4 py-2 mr-2 text-sm font-medium bg-white border rounded-md text-slate-800 hover:bg-slate-50 border-slate-200'>
                    Cancel
                </button>
                <button className='inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-500 border rounded-md hover:bg-indigo-600 border-slate-200'>
                    Save
                </button>
            </div>
        </div>

        <Formik
          initialValues={companyData}
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
              console.log(companyData)
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
            <form className={`sm:space-y-8 space-y-5 sm:pt-12 pt-10 `} onSubmit={handleSubmit}>
                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='text-sm font-medium text-slate-800 sm:text-base'>Name</p>
                    </div>
                    <div className={`sm:col-span-2`}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    placeholder={`First Name`}
                                />
                                {errors.firstName && touched.firstName && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>
                            
                            <div>
                                <input
                                    className={`form-control`}
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    placeholder={`Last Name`}
                                />
                                {errors.lastName && touched.lastName && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='text-sm font-medium text-slate-800 sm:text-base'>Email address</p>
                    </div>
                    <div className={`sm:col-span-2`}>
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
                </div>

                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='text-sm font-medium text-slate-800 sm:text-base'>Company Name</p>
                        <p className='pt-1 text-xs '>This will be displayed on your profile.</p>
                    </div>
                    <div className={`sm:col-span-2`}>
                    
                        <input
                            className={`form-control`}
                            type="text"
                            name="companyName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.companyName}
                            placeholder={`Company Name`}
                        />
                        {errors.companyName && touched.companyName && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.companyName}
                            </p>
                        )}
                        
                    </div>
                </div>
                
                <div className='grid pt-8 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium text-slate-800 sm:text-base'>ABN</p>
                        <p className='pt-1 text-xs '>Australian Business Number</p>
                    </div>
                    <div className={`sm:col-span-2`}>
                    
                        <input
                            className={`form-control`}
                            type="text"
                            name="abn"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.abn}
                            placeholder={`ABN`}
                        />
                        {errors.abn && touched.abn && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.abn}
                            </p>
                        )}
                        
                    </div>
                </div>

                <div className='grid pt-8 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Tagline</p>
                        <p className='pt-1 text-xs '>A quick snapshot of your company.</p>
                    </div>
                    <div className={`sm:col-span-2`}>
                    
                        <textarea
                            className={`form-control`}
                            type="text"
                            rows={5}
                            name="tagline"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tagline}
                            placeholder={`Tagline`}
                        ></textarea>
                        <p className='text-xs'>40 characters left</p>
                        {errors.tagline && touched.tagline && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.tagline}
                            </p>
                        )}
                        
                    </div>
                </div>

                <div className='grid pt-8 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='text-sm font-medium sm:text-base text-slate-800'>Company logo</p>
                        <p className='pt-1 text-xs'>Update your company logo and then choose where you want it to display.</p>
                    </div>
                    <div className={`sm:col-span-2`}>
                        <div className='grid items-center gap-4 sm:grid-cols-3'>
                            <div>
                                <img className='object-cover pr-5' src={values.logo} alt=""/>
                            </div>
                            <div className='sm:col-span-2'>
                                <label htmlFor='logo' className='block p-5 text-center bg-white border rounded cursor-pointer'>
                                    <input
                                        className={`hidden`}
                                        type="file"
                                        id='logo'
                                        name="logo"
                                        onChange={handleChange}
                                    />
                                    <span className='inline-flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-slate-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>
                                    </span>
                                    <p className='pt-5 text-sm text-slate-700'>
                                        <span className='font-medium text-indigo-500 transition-all hover:text-indigo-600'>Click to upload</span> or drag and drop
                                    </p>
                                    <p className='pt-1 text-xs text-slate-500'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </label>
                                
                                {errors.logo && touched.logo && (
                                    <p className='mt-0.5 text-xs text-red-500'>
                                        {errors.logo}
                                    </p>
                                )}
                            </div>
                        </div>
                        
                    
                        
                        
                    </div>
                </div>

                <div className='flex items-start justify-end border-t border-b pb-7 border-slate-200 pt-7'>
            

                    <div className='flex'>
                        <button className='inline-block px-4 py-2 mr-2 text-sm font-medium bg-white border rounded-md text-slate-800 hover:bg-slate-50 border-slate-200'>
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
