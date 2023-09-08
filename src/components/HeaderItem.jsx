import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const HeaderItem = ({ href, title }) => {
    const location = useLocation()
    //console.log(location);
    return (
        <li className='font-bold hover:text-green-700'>
            <Link
                className={location.pathname === href ? "border-b-4 border-green-700" : ""}
                to={href}>
                {title}
            </Link>
        </li>
    )
}