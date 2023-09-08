import { useEffect, useState } from 'react'

//Custom Hooks

export const useWindowSize = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const mobile = width <= 900
    const desktop = width > 900

    return {width, height, mobile, desktop}
}