import React from 'react'

export default function Offre() {
    return (
        <>
            <div className="relative h-auto bg-black">
                <div className="px-4 ">
                    <h1 className="font-bold text-gray-500 opacity-25 uppercase text-[230px] ">Rejoignez</h1>
                    <h1 className="font-bold text-gray-500 opacity-25 uppercase text-[230px] ">nous</h1>
                </div>

                <div className="absolute flex justify-center py-12 left-12 right-12 top-4">
                    <h1 className="text-6xl font-bold text-white uppercase">CHOISISSEZ VOTRE OFFRE</h1>
                </div>

                <div className="absolute bottom-0 mb-4 h-2/3 left-12 right-12">
                    <div className="group">
                        <div className="py-4 border-b border-gray-500 h-28 hover:bg-gray-800">
                            <a href="#" className="text-xl font-medium text-white group-hover:text-amber-400">3 Mois</a>
                            <div className="flex justify-between">
                                <h1 className="w-1/2 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iste ipsum numquam autem, eveniet unde explicabo et voluptates quisquam incidunt ducimus. Ipsa cum quisquam pariatur.</h1>
                                <h1 className="text-2xl font-bold text-amber-400">439€</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="py-4 border-b border-gray-500 h-28 hover:bg-gray-800">
                            <a href="#" className="text-xl font-medium text-white group-hover:text-amber-400">10 SÉANCES</a>
                            <div className="flex justify-between">
                                <h1 className="w-1/2 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iste ipsum numquam autem, eveniet unde explicabo et voluptates quisquam incidunt ducimus. Ipsa cum quisquam pariatur.</h1>
                                <h1 className="text-2xl font-bold text-amber-400">439€</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="py-4 border-b border-gray-500 h-28 hover:bg-gray-800">
                            <a href="#" className="text-xl font-medium text-white group-hover:text-amber-400">SÉANCE DÉCOUVERTE</a>
                            <div className="flex justify-between">
                                <h1 className="w-1/2 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iste ipsum numquam autem, eveniet unde explicabo et voluptates quisquam incidunt ducimus. Ipsa cum quisquam pariatur.</h1>
                                <h1 className="text-2xl font-bold text-amber-400">439€</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-6">
                        <button className="px-2 py-6 text-xs font-semibold text-black uppercase transition duration-300 ease-in border-2 border-amber-400 hover:text-amber-400 bg-amber-400 hover:bg-black">Voir plus</button>


                    </div>
                </div>
            </div>

            <div className="flex justify-center px-32 bg-white h-60">
                <div className="flex space-x-3">

                    <div className="px-6 my-auto space-y-2 ">
                        <div className="space-y-6">
                            <svg className="w-10 h-10 mx-auto text-amber-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            <h1 className="flex justify-center text-xl font-bold text-gray-700 uppercase">contact</h1>
                        </div>

                        <h1 className="flex justify-center text-sm text-gray-500">Tel:0123456789</h1>
                        <h1 className="flex justify-center text-sm text-gray-500">email@email.com</h1>
                    </div>
                    <div className="px-6 my-auto space-y-2 ">
                        <div className="space-y-6">
                            <svg className="w-10 h-10 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="flex justify-center text-xl font-bold text-gray-700 uppercase">Horaires</h1>

                        </div>
                        <h1 className="flex justify-center text-sm text-gray-500">Mardi</h1>
                        <h1 className="flex justify-center text-sm text-gray-500">Samedi</h1>
                    </div>
                    <div className="px-6 my-auto space-y-2">
                        <div className="space-y-6">
                            <svg className="w-10 h-10 mx-auto text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <h1 className="flex justify-center text-xl font-bold text-gray-700 uppercase">Adresse</h1>

                        </div>
                        <h1 className="flex justify-center text-sm text-gray-500">N° adresse</h1>
                        <h1 className="flex justify-center text-sm text-gray-500">complet</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
