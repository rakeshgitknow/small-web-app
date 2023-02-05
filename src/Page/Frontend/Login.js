import { Formik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../../Assets';
import { useAuth } from '../../Hook/useAuth';

export default function Login() {

  const { login } = useAuth();

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false
  });


  return (
    <div className={` py-10  text-center max-w-lg w-full`}>
        <img src={Logo} alt={'small logo'} className={`w-40 object-cover mx-auto`} />
        <h1 className={`text-center text-3xl text-slate-800 mt-7 font-medium`}>Log in to your account</h1>
        <p className={`mt-2 pb-7`}>Welcome back! Please enter your details.</p>

        <div className='text-left bg-white p-7 rounded-xl'>
          <Formik
            initialValues={LoginData}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Please enter email address!';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

              login({
                email: "email",
                password: "password"
              });

              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2))
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
              <form className={``} onSubmit={handleSubmit}>

                <div className={``}>
                  <label className='input-label'>Email</label>
                  <input
                    className={`form-control ${errors.email && touched.email ? 'error':''}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={`Enter your email`}
                  />
                  {errors.email && touched.email && (
                    <p className='mt-0.5 text-xs text-red-500'>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className={`pt-5`}>
                  <label className='input-label'>Password</label>
                  <input
                    className={`form-control ${errors.password && touched.password ? 'error':''}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={`* * * * * * * *`}
                  />
                  {errors.password && touched.password && (
                    <p className='mt-0.5 text-xs text-red-500'>
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className='flex justify-between pt-4 text-sm'>
                    <div className='form-checkbox'>
                        <input id='Remember' name='remember' onChange={handleChange}  onBlur={handleBlur} type='checkbox'/>
                        <label htmlFor='Remember'>
                          <span className='inline-block text-sm text-slate-600'>Remember for 30 days</span>
                        </label>
                    </div>
                    <Link className='font-medium text-indigo-600'>Forgot password</Link>
                </div>
               

                <div className={`col-span-full flex justify-end pt-4`}>
                  <button type='submit' disabled={isSubmitting} className={`bg-indigo-500 text-lg font-medium block hover:bg-indigo-600 rounded-md px-5 py-2.5 text-white w-full mt-7 disabled:bg-indigo-300 disabled:cursor-not-allowed`}>Sign in</button>
                </div>

                <p className='text-center mt-7 text-slate-500'>Don’t have an account? <Link className='font-medium text-indigo-600'>Contact Us</Link></p>
              </form>
            )}
          </Formik>
        </div>

        
    </div>
  )
}
