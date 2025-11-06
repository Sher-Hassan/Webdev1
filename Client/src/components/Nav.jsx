import React from 'react'
import Btn2 from './Btn2.jsx'
import Btn1 from './Btn1.jsx'
import '../styles/Nav.css'

export default function Nav(){
	return (
		<nav className="nav-wrap">
			<div className="nav-inner">
				<div className="nav-left">
					<span className="nav-logo-square" aria-hidden="true"/>
					<span className="nav-brand">MYAPP</span>
				</div>

				<div className="nav-right">
					<ul className="nav-links">
						<li><Btn1 text="ABOUT" /></li>
						<li><Btn1 text="DOCS" /></li>
						<li><Btn1  text="PRODUCTS" /></li>
					</ul>

					<div className="nav-cta">
						<Btn2 text="LAUNCH APP" />
					</div>
				</div>
			</div>
		</nav>
	)
}
