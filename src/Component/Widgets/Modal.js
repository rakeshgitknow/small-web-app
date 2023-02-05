import { Dialog, Transition } from '@headlessui/react'
import { Children, Fragment, useState } from 'react'

export default function Modal({isModal, setIsOpen, children, title}) {
//   let [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false)
  }

  

  return (
    <>
      

      <Transition appear show={isModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl min-w-md rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="pb-5 text-lg font-medium leading-6 text-gray-900 border-b"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
