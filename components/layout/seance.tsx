import React from 'react'

export default function Seance() {
    return (
        <>
            <div className="h-screen px-12 space-y-4 bg-black">
                <div className="flex justify-between py-12 space-x-5 ">
                    <h1 className="text-6xl font-bold text-white uppercase">Seances</h1>
                    <h1 className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, est?</h1>
                    <button className="px-2 py-6 text-xs font-semibold text-black uppercase transition duration-300 ease-in border-2 border-amber-400 hover:text-amber-400 bg-amber-400 hover:bg-black">Voir plus</button>

                </div>

                <div className="grid grid-cols-3 gap-4 ">
                    <div className=" h-[450px] space-y-2">
                        <div className=" h-[300px] hover:scale-75 transition duration-500 ease-in">
                            <img src="/images/men.jpg" alt="" className="object-cover h-full hover:grayscale" />
                        </div>
                        <div className=" h-[140px]">
                            <a href='#' className="mb-4 text-2xl font-bold text-white uppercase hover:text-amber-400">yoga</a>
                            <h1 className="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis explicabo enim inventore officia modi?</h1>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>

                        </div>
                    </div>
                    <div className=" h-[450px] space-y-2">
                        <div className=" h-[300px] hover:scale-75 transition duration-500 ease-in">
                            <img src="/images/box.jpg" alt="" className="object-cover h-full hover:grayscale" />
                        </div>
                        <div className=" h-[140px]">
                            <a href='#' className="mb-4 text-2xl font-bold text-white uppercase hover:text-amber-400">box</a>
                            <h1 className="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis explicabo enim inventore officia modi?</h1>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>

                        </div>
                    </div>
                    <div className=" h-[450px] space-y-2">
                        <div className=" h-[300px] hover:scale-75 transition duration-500 ease-in">
                            <img src="/images/cat.jpg" alt="" className="object-cover h-full hover:grayscale" />
                        </div>
                        <div className=" h-[140px]">
                            <a href='#' className="mb-4 text-2xl font-bold text-white uppercase hover:text-amber-400">STRETCHING</a>
                            <h1 className="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis explicabo enim inventore officia modi?</h1>
                            <a href="#" className="text-amber-400 hover:text-black hover:bg-amber-400">Voir plus</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-12 py-20 space-x-5 bg-white">
                <h1 className="text-6xl font-bold text-gray-600 uppercase">Seances</h1>
                <h1 className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, est?</h1>
                <button className="px-2 py-6 text-xs font-semibold text-black uppercase transition duration-300 ease-in border-2 border-amber-400 hover:text-amber-400 bg-amber-400 hover:bg-black">Voir plus</button>

            </div>
        </>
    )
}
