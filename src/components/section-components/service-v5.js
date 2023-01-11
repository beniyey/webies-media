import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="service-two service-two__service-page  go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="service-two__block">
							<div className="block-title-two text-left">
								<p>השירותים שלנו</p>
								<h3>אנחנו מציעים  <br /> מגוון שירותים לעסקים</h3>
							</div>{/* /.block-title-two */}
							<p>
								המיקוד שלנו הוא ביעילות והנגשת המרחב הדיגיטלי לעסקים, העבודות שלנו כוללות את כל מה שנדרש לסביבת עבודה מודרנית.
							</p>
							<ul className="list-unstyled video-one__list">
								<li>
									<i className="far fa-check" />
									העלאת העסק לדיגיטל
								</li>
								<li>
									<i className="far fa-check" />
									תחזוקת האתרים ועמודי העסק
								</li>
								<li>
									<i className="far fa-check" />
									הבאת לקוחות חדשים דרך פרסומות וקידום
								</li>
								<li>
									<i className="far fa-check" />
									תמיכה ועבודה עם הלקוח לאורך זמן		            </li>
							</ul>{/* /.list-unstyled video-one__list */}
							<Link to="/contact" className="thm-btn">צור קשר <i className="fa fa-angle-double-right" /></Link>
							{/* /.thm-btn */}
						</div>{/* /.service-two__block */}
					</div>{/* /.col-lg-5 */}
					<div className="col-lg-7">
						<div className="service-two__box-wrap">
							<div className="row">
								<div className="col-md-6">
									<div className="service-two__single js-tilt">
										<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/web-developement.jpg)' }} />
										{/* /.service-two__single-image */}
										<div className="service-two__single-inner">
											<i className="fal fa-hand-holding-usd" />
											<h3><Link to="/contact">עיצוב ופיתוח אתרים</Link></h3>
											<p>
												תוך שימוש בטכנולוגיות המתקדמות ביותר, אנחנו נעצב נפתח ונעלה אתר לעסק שלכם
											</p>
											<Link to="/contact" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
											{/* /.service-two__link */}
										</div>{/* /.service-two__single-inner */}
									</div>{/* /.service-two__single */}
								</div>{/* /.col-md-6 */}
								<div className="col-md-6">
									<div className="service-two__single js-tilt">
										<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/seo.jpg)' }} />
										{/* /.service-two__single-image */}
										<div className="service-two__single-inner">
											<i className="fal fa-umbrella-beach" />
											<h3><Link to="/contact">קידום אתרים</Link></h3>
											<p>
											אנחנו נעניק לאתר שלכם חשיפה גבוה יותר במנועי החיפוש, ונדאג לכך שלקוחות יוכלו למצוא אתכם יוצר בקלות במרחב הדיגיטלי
												</p>
											<Link to="/contact" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
											{/* /.service-two__link */}
										</div>{/* /.service-two__single-inner */}
									</div>{/* /.service-two__single */}
								</div>{/* /.col-md-6 */}
								<div className="col-md-6">
									<div className="service-two__single js-tilt">
										<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/maintanance.jpg)' }} />
										{/* /.service-two__single-image */}
										<div className="service-two__single-inner">
											<i className="fal fa-paper-plane" />
											<h3><Link to="/contact">תחזוקת אתרים</Link></h3>
											<p>
											בכל מקרה שאתר שלכם דורש תחזוקה או חידוש של התוכן, אנחנו נדאג לעזור לכם ולבצע את השינויים הנדרשים בצורה הטובה ביותר
											</p>
											<Link to="/contact" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
											{/* /.service-two__link */}
										</div>{/* /.service-two__single-inner */}
									</div>{/* /.service-two__single */}
								</div>{/* /.col-md-6 */}
								<div className="col-md-6">
									<div className="service-two__single js-tilt">
										<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/social-media.jpg)' }} />
										{/* /.service-two__single-image */}
										<div className="service-two__single-inner">
											<i className="fal fa-chart-network" />
											<h3><Link to="/contact">מדיה חברתית</Link></h3>
											<p>
											אנחנו נקים לכם עמוד instagram/Facebook שיתאים לדרישות שלכם, וינגיש את השירותים שלכם ללקוחות
											</p>
											<Link to="/contact" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
											{/* /.service-two__link */}
										</div>{/* /.service-two__single-inner */}
									</div>{/* /.service-two__single */}
								</div>{/* /.col-md-6 */}
							</div>{/* /.row */}
						</div>{/* /.service-two__box-wrap */}
					</div>{/* /.col-lg-7 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>

	}
}

export default ServiceV5