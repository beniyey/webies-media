import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="about-two  go-top">
			<img src={publicUrl + "assets/images/shapes/about-two-bg.png"} alt={imagealt} className="about-two__bg" />
			<div className="container">
				<img src={publicUrl + "assets/images/resources/what-we-offer.png"} width="587px" alt={imagealt} className="about-two__moc" />
				<div className="row">
					<div className="col-lg-6">
						<div className="about-two__content">
							<div className="block-title text-left">
								<p><span>מה אנחנו עושים</span></p>
								<h3>אנחנו מציעים את הכלים הטובים ביותר<br /> לעסק שלך</h3>
								<div className="block-title__line" />{/* /.block-title__line */}
							</div>{/* /.block-title */}
							<p>
							המשימה שלנו היא לספק לך את הכלים הטובים ביותר לניהול העסק שלך ביעילות , כדי שתוכל להתמקד במה שאתה עושה הכי טוב, ואנחנו נדאג עבורך לכל השאר.
							</p>
							<div className="about-two__box">
								<div className="about-two__box-icon">
									<i className="far fa-leaf" />
								</div>{/* /.about-two__box-icon */}
								<div className="about-two__box-content">
									<h3>כלים לניהול</h3>
									<p>
										אנחנו נעזור לך לפתח כלים לשיפור ויעול הניהול באתר שלךת על מנת ליעל את הזמן שלך ואת איכות השירותים שאתה מציע,
									</p>
								</div>{/* /.about-two__box-content */}
							</div>{/* /.about-two__box */}
							<div className="about-two__box">
								<div className="about-two__box-icon">
									<i className="far fa-laptop-code" />
								</div>{/* /.about-two__box-icon */}
								<div className="about-two__box-content">
									<h3>סטטיסטיקה וביצועי האתר</h3>
									<p>
                                     אנחנו נעמיד ברשותך כלים לבקרת ביצועי האתר שלך,
									 ונעזור לך להבין את המשתמשים שלך ואת הפעילות שלהם באתר שלך, בשביל לספק להם בעתיד חווית משתמש טובה יותר,
									 ולהגדיל את הכנסות העסק שלך
									</p>
								</div>{/* /.about-two__box-content */}
							</div>{/* /.about-two__box */}
						</div>{/* /.about-two__content */}
					</div>{/* /.col-lg-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>


	}
}

export default AboutStyleTwo