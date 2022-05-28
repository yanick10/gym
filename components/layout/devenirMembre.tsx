import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { motion } from "framer-motion"


export default function DevenirMembre() {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <button onClick={openModal} className="px-2 mx-2 text-sm font-semibold uppercase transition duration-300 ease-in border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                devenir membre
            </button>

            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto">
                <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-50" />
                <motion.div initial={{ opacity: 1, y: -600 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.3,
                        },
                    }}
                    exit={{ opacity: 0, y: 600 }} className="fixed right-0 w-1/3 h-screen p-6 bg-black">
                    <div className="flex justify-end">
                        <button onClick={closeModal} className="w-10 h-10 uppercase transition duration-300 ease-in border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black">x</button>
                    </div>
                    <form action="" className="space-y-6">

                        <div className="flex justify-center py-8">
                            <h1 className="text-2xl font-medium text-amber-400">Devenir Membre du Club Gym</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" className="p-2 text-sm text-gray-300 bg-black border rounded border-amber-200 focus:outline-none" placeholder='First Name' />
                            <input type="text" className="p-2 text-sm text-gray-300 bg-black border rounded border-amber-200 focus:outline-none" placeholder='Last Name' />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" className="p-2 text-sm text-gray-300 bg-black border rounded border-amber-200 focus:outline-none" placeholder='Adress' />
                            <input type="text" className="p-2 text-sm text-gray-300 bg-black border rounded border-amber-200 focus:outline-none" placeholder='Tel' />
                        </div>
                        <div className="">
                            <input type="text" className="w-full p-2 text-sm text-gray-300 bg-black border rounded border-amber-200 focus:outline-none" placeholder='Email' />
                        </div>
                        <div className="flex justify-center">
                            <button className="px-2 py-4 text-xs font-semibold text-black uppercase transition duration-300 ease-in border-2 border-amber-400 hover:text-amber-400 bg-amber-400 hover:bg-black">Soumettre</button>
                        </div>
                    </form>
                </motion.div>
            </Dialog>
        </>
    )
}
