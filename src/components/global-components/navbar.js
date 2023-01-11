import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	closeNavbar(e) {
		document.getElementsByClassName('.side-menu__block').removeClass('active');
		e.preventDefault();
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		return (
			<header className="site-header-one go-top">
				<nav className="main-nav__one stricky">
					<div className="container-fluid">
						<div className="main-nav__logo-box">
							<Link to="/">
								<img src={publicUrl + "assets/images/resources/logo.png"} width="200px" />
							</Link>
							<a href="/" className="side-menu__toggler"><i className="fa fa-bars" /></a>
						</div>{/* /.main-nav__logo-box */}
						<div className="main-nav__main-navigation">
							<ul className=" main-nav__navigation-box">
								<li>
									<Link to="/">עמוד הבית</Link>
								</li>
								<li >
									<Link to="/about">אודות</Link>
								</li >
								<li >
									<Link to="/service" >שירותים</Link>
								</li>
								<li >
									<Link to="/portfolio">העבודות שלנו</Link>
								</li>
							</ul>
						</div>{/* /.main-nav__main-navigation */}
						<div className="main-nav__right tzor">
							<Link to="/contact" className="thm-btn ">צור קשר<i className="fa fa-angle-right" /></Link>
							{/* /.thm-btn */}
						</div>{/* /.main-nav__right */}
					</div>
				</nav>
			</header>
		)
	}
}


export default Navbar