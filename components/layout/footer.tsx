import React from 'react'

export default function Footer() {
    return (
        <div className="grid grid-cols-4 gap-16 px-6 bg-black h-72">
            <div className="py-12 space-y-8">
                <div className="w-16 h-16 bg-white rounded-full"></div>
                <div className="flex space-x-3">

                    <a href="#" className="">
                        <svg className="w-8 h-8 text-white transition duration-500 ease-in border-2 border-white rounded hover:text-amber-400 hover:border-amber-400"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                    </a>

                    <a href="#" className="">
                        <svg className="w-8 h-8 text-white transition duration-500 ease-in border-2 border-white rounded hover:text-amber-400 hover:border-amber-400"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>

                    <a href="#" className="">
                        <svg className="w-8 h-8 text-white transition duration-500 ease-in border-2 border-white rounded hover:text-amber-400 hover:border-amber-400"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>

                    <a href="#" className="">
                        <svg className="w-8 h-8 text-white transition duration-500 ease-in border-2 border-white rounded hover:text-amber-400 hover:border-amber-400"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                    </a>
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
