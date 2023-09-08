import React from 'react'
import { HeaderItem } from './HeaderItem'
import { useDispatch, useSelector } from 'react-redux'
import { toogleCart } from '../store/actions/cartActions'
import { getCartCount } from '../store/selectors/cartSelectors'

export const DesktopMenu = ({ links }) => {
  const dispatch = useDispatch()
  const countCart = useSelector(getCartCount)


  const toogleCartWithReducer = () => {
    dispatch(toogleCart())
  }
  return (
    <nav>
      <ul className="flex gap-10">
        {links.map((link, index) => (
          <HeaderItem key={index} href={link.href} title={link.title} />
        ))}
        <div className='relative'>
          <p className='transform-neg-full bg-green-500 absolute left-12 bottom-2 text-green-50 p-1'>{countCart}</p>
          <button
            onClick={toogleCartWithReducer}
            className='font-bold'>Panier</button>
        </div>
      </ul>
    </nav>
  )
}