import { Tab } from '@headlessui/react';
import React, { Fragment } from 'react';
import { AddressBook, Billing, Company, Password } from '../../Component';
import { useAuth } from '../../Hook/useAuth';

export default function Settings() {
  const { user, logout } = useAuth();

  return (
    <section className='h-screen p-3 pb-24 sm:px-5 sm:pt-8 md:p-10 md:col-span-3 scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin'>
      
      <h1 className={`font-medium md:text-3xl text-2xl text-slate-800`}>Settings</h1>

      <section className='pt-6 sm:pt-10'>
        <Tab.Group >
          <Tab.List className={`border-b`}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` sm:px-3 px-1.5 py-2 border-b-2 sm:text-sm text-xs border-transparent outline-none
                    ${selected ? ' text-indigo-600 border-indigo-600' : ' text-slate-600'}
                  `}
                >
                  Company
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` sm:px-3 px-1.5 py-2 border-b-2 sm:text-sm text-xs border-transparent outline-none
                    ${selected ? ' text-indigo-600 border-indigo-600' : ' text-slate-600'}
                  `}
                >
                  Password
                </button>
              )}
            </Tab>


            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` sm:px-3 px-1.5 py-2 border-b-2 sm:text-sm text-xs border-transparent outline-none
                    ${selected ? ' text-indigo-600 border-indigo-600' : ' text-slate-600'}
                  `}
                >
                  Billing
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` sm:px-3 px-1.5 py-2 border-b-2 sm:text-sm text-xs border-transparent outline-none
                    ${selected ? ' text-indigo-600 border-indigo-600' : ' text-slate-600'}
                  `}
                >
                  Address Book
                </button>
              )}
            </Tab>
            
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
                <Company/>
            </Tab.Panel>
            <Tab.Panel>
                <Password/>
            </Tab.Panel>
            <Tab.Panel>
                <Billing/>
            </Tab.Panel>
            <Tab.Panel>
                <AddressBook/>
            </Tab.Panel>
        
          </Tab.Panels>
        </Tab.Group>
      </section>
      
    </section>
  )
}
