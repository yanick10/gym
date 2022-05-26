import React from 'react'

export default function Header() {
    return (
        <div className="h-screen bg-[url('/images/dumbbell.jpg')] space-y-4">
            <div className="flex justify-between h-24 px-12 py-4 ">
                <div className="w-16 h-16 bg-white rounded-full"></div>
                <ul className="flex py-4">
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">COURS</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">agenda</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">coahes</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">debutants</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">entrainement personel</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">contact</a>
                    <a href='#' className="mx-2 text-sm font-semibold text-white uppercase transition duration-300 ease-in hover:text-amber-400">autres</a>
                    <button className="px-2 mx-2 text-sm font-semibold uppercase transition duration-300 ease-in border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">devenir membre</button>
                    <button className="px-2 mx-2 text-sm font-semibold uppercase transition duration-300 ease-in border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">reserver session</button>

                </ul>
            </div>

            <div className="px-12 py-4">
                <div className="w-1/5 ">
                    <h1 className="font-bold text-white text-8xl ">VOTRE CLUB DE GYM</h1>
                </div>
            </div>

            <div className="flex justify-between px-12 py-6 ">
                <button className="px-2 py-6 text-xs font-semibold text-black uppercase transition duration-300 ease-in border-2 border-amber-400 hover:text-amber-400 bg-amber-400 hover:bg-black">acces au cours gratuit</button>
                <button className="p-4 text-xs text-white bg-black rounded-full ">découvrez nos playlists</button>
            </div>
        </div>
    )
}
