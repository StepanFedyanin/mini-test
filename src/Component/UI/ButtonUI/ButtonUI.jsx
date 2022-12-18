import React from 'react'
import { NavLink } from 'react-router-dom'
import './ButtonUI.scss'
function ButtonUI({ children, href, func }) {
	return (
		<NavLink to={href} >
			<button onClick={() => func()} className='ButtonUI'>{children}</button>
		</NavLink>
	)
}

export default ButtonUI