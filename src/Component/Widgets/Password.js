import { Formik } from 'formik';
import React, { useState } from 'react'
import { facebookImage, googleImage } from '../../Assets';

export default function Password() {

    const [companyData, setCompanyData] = useState({
        currentPassword: "",
        newPassword: "",
    });

  return (
    <div className='pt-8'>
        <div className='flex items-start justify-between border-b pb-7 border-b-slate-200'>
            <div>
                <p className='text-lg font-medium text-slate-800'>Password & Authentication</p>
                <p className='mt-1 text-xs text-slate-500'>Update your password and authentication details here.</p>
            </div>

            <div className='flex'>
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
            <form className={`space-y-8 pt-12 `} onSubmit={handleSubmit}>
                
                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='font-medium text-slate-800'>Current Password</p>
                        <p className='pt-1 text-xs '>This will be displayed on your profile.</p>
                    </div>
                    <div className={`col-span-2`}>
                        <div className='relative'>
                            <span className='absolute top-3 left-4 text-slate-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </span>
                            <input
                                className={`form-control icon-input`}
                                type="password"
                                name="currentPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.currentPassword}
                                placeholder={`********`}
                            />
                        </div>
                        {errors.currentPassword && touched.currentPassword && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.currentPassword}
                            </p>
                        )}
                        
                    </div>
                </div>

                <div className='grid sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='font-medium text-slate-800'>New Password</p>
                        <p className='pt-1 text-xs '>This will be displayed on your profile.</p>
                    </div>
                    <div className={`col-span-2`}>
                        <div className='relative'>
                            <span className='absolute top-3 left-4 text-slate-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </span>
                            <input
                                className={`form-control icon-input`}
                                type="password"
                                name="newPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.newPassword}
                                placeholder={`********`}
                            />
                        </div>
                       
                        {errors.newPassword && touched.newPassword && (
                            <p className='mt-0.5 text-xs text-red-500'>
                                {errors.newPassword}
                            </p>
                        )}
                        
                    </div>
                </div>

                <div className='grid pt-8 border-t sm:gap-10 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 border-slate-200'>
                    <div>
                        <p className='font-medium text-slate-800'>Connect</p>
                        <p className='pt-1 text-xs '>A quick snapshot of your company.</p>
                    </div>
                    <div className={`col-span-2`}>
                    
                        <div className='flex space-x-7'>
                            <div>
                                <button
                                className='inline-flex items-center px-5 py-3 text-sm font-medium bg-white border rounded-md border-slate-100 text-slate-600'>
                                    <span className='pr-3'>
                                        <img className='w-6' src={facebookImage} alt="facebook"/>
                                    </span>
                                    <span>
                                        Connect Facebook
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button
                                className='inline-flex items-center px-5 py-3 text-sm font-medium bg-white border rounded-md border-slate-100 text-slate-600'>
                                    <span className='pr-3'>
                                        <img className='w-6' src={googleImage} alt="facebook"/>
                                    </span>
                                    <span>
                                        Connect Google
                                    </span>
                                </button>
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
