import React from 'react'

const year = new Date().getFullYear()

export const Footer = () => {
    return (
        <footer className='py-4'>
            <p className='text-center font-bold text-lg'>DwShop - {year} - Copyright - All right reserved</p>
        </footer>
    )
}
