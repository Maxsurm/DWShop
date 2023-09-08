import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(-1)}
            className='py-4 px-10 bg-green-50 text-green-700 shadow-lg shadow-black hover:bg-green-300 my-4'
        >
            Retour
        </button>
    )
}