import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
	return (
		<section className="navigation">
			<div className="nav-container">
				<div>
					<img
						alt="StudioGraphene"
						src="/images/logo.png"
						srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
					/>
								{/* <h6>swsjwnsjwnsjws</h6> */}
				</div>
				<div><h6 className="text-white p-0 m-0">Redux CRUD Application </h6></div>	
				<nav>	
					<ul className="nav-list">	
						{/* <li>
							<NavLink exact className="link" activeClassName="active" to="/">
								Home
							</NavLink>
						</li> */}
						
						<li>
							<NavLink exact className="link" activeClassName="active" to="/">
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink exact className="link" activeClassName="active" to="/add">
								Add Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
}

export default Header;
