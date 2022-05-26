import React from 'react'

export default function Footer() {
    return (
        <div className="grid grid-cols-4 gap-16 px-6 bg-black h-72">
            <div className="py-12 ">
                <div className="w-16 h-16 bg-white rounded-full"></div>
                <div className="flex space-x-2">

                </div>

            </div>
            <div className="py-12 ">
                <ul className="space-y-3">
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">Cours</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">Agenda</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">coaches</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">debutants</a>
                    </li>

                </ul>
            </div>
            <div className="py-12 ">
                <ul className="space-y-3">
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">Entrainement personnel</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">boutique</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">A propos de nous</a>
                    </li>
                    <li className="">
                        <a href="#" className="font-bold text-white uppercase hover:text-amber-400">contact</a>
                    </li>

                </ul>
            </div>
            <div className="py-12 ">
                <ul className="space-y-3">
                    <li className="">
                        <h1 className="text-xl font-bold text-white uppercase">Avec nous pas de secret</h1>
                    </li>
                    <li className="">
                        <h1 className="text-white">Inscrivez vous pour plus d'info</h1>
                    </li>
                    <li className="flex-col">
                        <input type="text" className='w-full p-4 text-sm text-gray-500 bg-black border border-gray-600 focus:outline-none focus:text-white' placeholder='Entre votre email' />
                        <button className="px-2 py-4 font-bold uppercase transition duration-500 ease-in border border-gray-600 text-amber-400 hover:bg-amber-400 hover:text-black">inscrivez vous</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
