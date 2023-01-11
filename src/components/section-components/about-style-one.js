import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="about-one  go-top">
			<div className="container">
				<img src={publicUrl + "assets/images/resources/photo-main-page.png"} width="585px" alt={imagealt} className="about-one__moc" />
				<div className="row justify-content-end">
					<div className="col-lg-6">
						<div className="about-one__content">
							<div className="block-title text-left">
								<p><span>קצת עלינו</span></p>
								<h3>ההצלחה שלך <br /> היא המטרה שלנו</h3>
								<div className="block-title__line" />{/* /.block-title__line */}
							</div>{/* /.block-title */}
							<p>
							 אנחנו צוות של מפתחים ומעצבים עם תשוקה רבה לתחום והמון רצון לעזור לעסקים להתקדם לעבר עידן הטכנולוגיה 
							 ולהתקדם בתחום בו הם עוסקיו
							</p>
							<h4>אנחנו איתך בכל צעד בדרך להצלחה</h4>
							<p>
								כל צעד איתנו בדרך להצלחה יהיה בתיאום מלא ובכל עת תוכל לפנות אלינו ולקבל עזרה והסברים על הפרויקט שלך,
								כמו כן נשמח לשמוע ממך ולהתאים את הפרויקט לצרכיך ולצרכי העסק שלך
							</p>
							<Link to="/about" className="thm-btn about-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
							{/* /.thm-btn */}
						</div>{/* /.about-one__content */}
					</div>{/* /.col-lg-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>

	}
}

export default AboutStyleOne