import Link from 'next/link'
import React from 'react'

export default function Activite() {
    return (
        <div className="relative h-auto bg-black">
            <div className="px-4 ">
                <h1 className="font-bold text-gray-500 opacity-25 uppercase text-[300px] ">EN</h1>
            </div>
            <div className="px-56 ">
                <h1 className="font-bold text-gray-500 uppercase opacity-25 text-[300px] ">ER</h1>

            </div>
            <div className=" px-80">
                <h1 className="font-bold text-gray-500 uppercase opacity-25 text-[300px] ">GIE</h1>

            </div>

            <div className="absolute w-1/4 left-12 top-2">
                <h1 className="font-bold text-white text-8xl">Nos Activités</h1>
                <h1 className="text-white mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam praesentium rem deserunt eligendi necessitatibus ea qui beatae, error iure laudantium aut? Quos, blanditiis saepe?</h1>
            </div>

            <div className="absolute flex w-1/2 mb-4 space-x-4 right-12 top-2">
                <div className="w-full  h-[600px] space-y-2">
                    <div className="h-[450px] hover:scale-75 transition duration-500 ease-in">
                        <img src="/images/people.jpg" alt="" className="object-cover w-full h-full transition duration-300 ease-in hover:grayscale" />
                    </div>
                    <div className="h-[140px]">
                        <h1 className="mb-4 text-2xl font-bold text-white uppercase transition duration-300 ease-in hover:text-amber-400">COURS EN GROUPE</h1>
                        <h1 className="mb-4 text-white text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.</h1>
                        <Link href={"/more"}>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>
                        </Link>
                    </div>
                </div>
                <div className="w-full  h-[600px] space-y-2">
                    <div className="h-[450px] hover:scale-75 transition duration-500 ease-in">
                        <img src="/images/workout.jpg" alt="" className="object-cover w-full h-full transition duration-300 ease-in hover:grayscale" />
                    </div>
                    <div className="h-[140px] overflow-hidden">
                        <h1 className="mb-4 text-2xl font-bold text-white uppercase transition duration-300 ease-in hover:text-amber-400">ENTRAINEMENT</h1>
                        <h1 className="mb-4 text-white text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.</h1>
                        <Link href={"/more"}>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute flex w-1/2 mb-4 space-x-4 right-12 top-[650px]">
                <div className="w-full  h-[600px] space-y-2">
                    <div className="h-[450px] hover:scale-75 transition duration-500 ease-in">
                        <img src="/images/blur.jpg" alt="" className="object-cover w-full h-full transition duration-300 ease-in hover:grayscale" />
                    </div>
                    <div className="h-[140px]">
                        <h1 className="mb-4 text-2xl font-bold text-white uppercase transition duration-300 ease-in hover:text-amber-400">ZONE DE LIFTING</h1>
                        <h1 className="mb-4 text-white text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.</h1>
                        <Link href={"/more"}>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>
                        </Link>
                    </div>
                </div>
                <div className="w-full  h-[600px] space-y-2">
                    <div className="h-[450px] hover:scale-75 transition duration-500 ease-in">
                        <img src="/images/mixedfruit.jpg" alt="" className="object-cover w-full h-full transition duration-300 ease-in hover:grayscale" />
                    </div>
                    <div className="h-[140px]">
                        <h1 className="mb-4 text-2xl font-bold text-white uppercase transition duration-300 ease-in hover:text-amber-400">BAR ET REPAS</h1>
                        <h1 className="mb-4 text-white text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.</h1>
                        <Link href={"/more"}>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
