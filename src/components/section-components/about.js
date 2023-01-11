import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="service-two service-two__service-page service-two__about-page  go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="service-two__image">
							<img src={publicUrl + "assets/images/resources/photo-main-page.png"}  width="450px" alt={imagealt} />
						</div>{/* /.service-two__image */}
					</div>{/* /.col-lg-6 */}
					<div className="col-lg-6">
						<div className="service-two__block">
							<div className="block-title-two text-left">
								<p>אז מי אנחנו </p>
								<h3>צוות של צעירים <br /> שחיים טכנולוגיה</h3>
							</div>
							<p>
                              הסטודיו שלנו נוצר במטרה עיקרית, להביא את בשורת הטכנולוגיה לעסקים וחברות וקידום שלהם 
							  .במרחב הדיגיטלי,  נכנסנו לתחום ולמקצוע עם רקע רב בתחום הטכנולוגי והמכירות, ובעלי ניסיון רב בתחום העיצוב והפיתוח של אתרי אינטרנט
							</p>
							<ul className="list-unstyled video-one__list">
								<li>
									<i className="far fa-check" />
									נעצב לכם אתר אינטרנט מותאם לעבודה בעידן המודרני
								</li>
								<li>
									<i className="far fa-check" />
									נכשיר את הצוות שלכם איך להישתמש בו בצורה נכונה
								</li>
								<li>
									<i className="far fa-check" />
									נגדיל את החשיפה שלכם ברשת, ובכך נגדיל את פוטנציאל המכירות
								</li>
								<li>
									<i className="far fa-check" />
									נעניק שירות של תפעול ותחזוקה ונעזור לכם להתמודד עם כל תקלה
								</li>
							</ul>{/* /.list-unstyled video-one__list */}
							<Link to="/service" className="thm-btn">למדו עוד <i className="fa fa-angle-double-right" /></Link>
							{/* /.thm-btn */}
						</div>{/* /.service-two__block */}
					</div>{/* /.col-lg-5 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>



	}
}

export default AboutPage