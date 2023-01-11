import React, { Component } from 'react';
import emailjs from '@emailjs/browser';


class Contact extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.form = React.createRef()
	}

	handleSubmit(e) {
		e.preventDefault()
		emailjs.sendForm('service_wce0mfb', 'template_mioj9ho', this.form.current, 'QzBbRQ7vOWe4l0YsW')
		.then(()=>{
			alert("ההודעה נשלחה בהצלחה")
		}).catch((err)=>{
			console.log(err)
			alert("נתקלנו בשגיאה, אנא נסו שוב או התקשרו אלינו")
		})
	}

	render() {

		return <div>
			<section className="contact-two">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="contact-two__content">
								<div className="contact-two__block">
									<h3>Don't hesitate to contact us</h3>
								</div>{/* /.contact-two__block */}
								<ul className="list-unstyled contact-two__info-list">
									<li>
										<div className="contact-two__info-list-title">
											<i className="far fa-phone" />
											חייגו אלינו :
										</div>{/* /.contact-two__info-list-title */}
										<p><a href="tel:0544737024">0544737024</a></p>
									</li>
									<li>
										<div className="contact-two__info-list-title">
											<i className="far fa-envelope" />
											שלחו לנו מייל :
										</div>{/* /.contact-two__info-list-title */}
										<p><a href="mailto:bensp@webies-media.com">bensp@webies-media.com</a></p>
									</li>
								</ul>{/* /.contact-two__info-list */}
							</div>{/* /.contact-two__content */}
						</div>{/* /.col-lg-5 */}
						<div className="col-lg-7">
							<form ref={this.form} onSubmit={this.handleSubmit} className="contact-two__form" >
								<div className="contact-two__block">
									<h3>Get In Touch</h3>
									<p>השאירו לנו פרטים והצוות המסור שלנו יחזור אליכם בהקדם</p>
								</div>{/* /.contact-two__block */}
								<div className="row">
									<div className="col-md-6">
										<input type="text" placeholder="שם מלא" name='fullName' />
									</div>{/* /.col-md-6 */}
									<div className="col-md-6">
										<input type="text" placeholder="מייל" name='email' />
									</div>{/* /.col-md-6 */}
									<div className="col-md-12">
										<input type="phone" placeholder="טלפון" name='phone' />
									</div>{/* /.col-md-12 */}
									<div className="col-md-12">
										<textarea name="msg" placeholder="הודעה" defaultValue={""} />
										<button type='submit' className="thm-btn contact-two__btn">שליחה <i className="fa fa-angle-double-right" /></button>{/* /.thm-btn contact-two__btn */}
									</div>{/* /.col-md-12 */}
								</div>{/* /.row */}
							</form>{/* /.contact-two__form */}
						</div>{/* /.col-lg-7 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>{/* /.contact-two */}
		</div>

	}
}

export default Contact