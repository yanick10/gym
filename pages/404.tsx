import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="h-screen bg-black">
            <img src="/images/sport-1235019_1920.jpg"
                alt=""
                className="float-left object-cover w-1/2 h-full rounded-lg shadow-lg mr-10
                [clip-path:circle(70%_at_20%_30%)]
                [shape-outside:circle(70%_at_20%_30%)]"
            />
            <p className="min-h-screen py-32 text-white bg-black">
                <h1 className="mb-5 font-bold text-amber-500 text-9xl">404</h1>
                <h1 className="mb-8 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus id dolores quam, soluta omnis mollitia illo perspiciatis repudiandae facilis et labore pariatur dolor, ad officia asperiores repellat, sed ex ipsa animi quo velit quae deserunt dolore consectetur! Veniam architecto aspernatur possimus quasi, repellat delectus illo!</h1>
                <h1 className="mb-8 text-3xl font-medium text-white">Page Not Found</h1>
                <Link href={"/"}>
                    <a className='text-xl text-amber-500'>
                        Back to Homepage...
                    </a>
                </Link>
            </p>
        </div>
    )
}
