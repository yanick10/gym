import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
export default function More() {
    return (
        <div className="min-h-screen px-12 py-8 space-y-4 bg-gray-200">
            {/* bouton retour  */}
            <div className="flex justify-between py-5">
                <Link href="/">
                    <a className='w-16 h-16 border-2 rounded-full border-amber-400'>
                        <ChevronLeftIcon className='fill-amber-400' />
                    </a>
                </Link>

                <h1 className="my-auto text-5xl font-medium">Notre Palette</h1>
                <div className="w-16 h-16 bg-black rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 gap-7">

                {/* normal  */}
                <div className="col-span-4 space-y-10 laptop:col-span-1 tablet:col-span-2">
                    <div className="shadow-2xl shadow-gray-400 h-[50vh] rounded-2xl hover:shadow-md space-y-2">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                </div>

                {/* decalage  */}
                <div className="col-span-4 space-y-10 laptop:col-span-1 tablet:col-span-2">
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                </div>

                {/* normal  */}
                <div className="col-span-4 space-y-10 laptop:col-span-1 tablet:col-span-2">
                    <div className="shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="shadow-2xl shadow-gray-400 space-y-2 h-[50vh] rounded-2xl hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                </div>

                {/* decalage  */}
                <div className="col-span-4 space-y-10 laptop:col-span-1 tablet:col-span-2">
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl h-[50vh] rounded-2xl shadow-gray-400 space-y-2 hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl h-[50vh] rounded-2xl shadow-gray-400 space-y-2 hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                    <div className="relative laptop:top-10 tablet:top-10 top-0 shadow-2xl h-[50vh] rounded-2xl shadow-gray-400 space-y-2 hover:shadow-md">
                        <div className="overflow-hidden h-2/3 rounded-t-2xl">
                            <img src="/images/dumbbell.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias!</h1>
                        </div>
                        <div className="flex justify-end pr-2 overflow-hidden h-14 rounded-b-2xl">
                            <button className="text-sm font-medium uppercase">Ouvrir</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-5 m-1 laptop:mt-10 tablet:mt-10">
                <button className="">me</button>
            </div>
        </div>
    )
}
