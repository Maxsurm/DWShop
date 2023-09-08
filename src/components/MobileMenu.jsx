import React from 'react'
import { Link } from 'react-router-dom'

export const MobileMenu = ({ links }) => {
    return (
        <nav className='flex flex-col items-center p-4'>
            <ul className='absolute bg-green-100 top-0 right-0 p-4 mt-16 z-10 w-full border-green-700 border-4 rounded-xl'>
                {links.map(({ title, href }) => (
                    <li className='mb-4 font-bold hover:text-green-700' key={title}>
                        <Link
                            className='block'
                            to={href}>
                            {title}
                        </Link>
                    </li>
                ))}
                <li className='relative font-bold flex gap-2'>
                    <button >
                        Panier
                    </button>
                    <p className=' bg-green-700 text-green-50 p-1 rounded-full'>0</p>
                </li>

            </ul>

        </nav>
    )
}