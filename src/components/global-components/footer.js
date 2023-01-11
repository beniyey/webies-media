import React, { Component } from 'react';
import { fs } from "fs"

class Footer_v1 extends Component {

	send(e){
		let a = e.target
		console.log(a)
	}

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div>
				<footer className="site-footer-one">
					<div className="site-footer-one__upper">
						<div className="container">
							<img src={publicUrl + "assets/images/resources/lets-talk.png"} width="449px" height="484px" alt={imgattr} className="site-footer-one__upper-moc" />
							<div className="row">
								<div className="col-lg-3">
									<div className="footer-widget footer-widget__about">
										<a href="index-2.html">
											<img src={publicUrl + "assets/images/pink-logo-webies-png.png"} width="220px" style={{ color: "#ff57a4" }} alt={imgattr} />
										</a>
										</div>{/* /.footer-widget */}
								</div>{/* /.col-lg-3 */}
								<div className="col-lg-4">
									<div className="footer-widget footer-widget__contact">
										<div className="footer-widget__contact-box">
											<div className="footer-widget__contact-top">
												<i className="far fa-phone" />
												<h3>דברו איתנו</h3>
											</div>{/* /.footer-widget__contact-top */}
											<p><a href="tel:0544737024">054-4737024</a></p>
										</div>{/* /.footer-widget__contact-box */}
										<div className="footer-widget__contact-box">
											<div className="footer-widget__contact-top">
												<i className="far fa-envelope" />
												<h3>המייל שלנו</h3>
											</div>{/* /.footer-widget__contact-top */}
											<p><a href="mailto:bensp@webies-media.com">bensp@webies-media.com</a></p>
										</div>{/* /.footer-widget__contact-box */}
									</div>{/* /.footer-widget footer-widget__contact */}
								</div>{/* /.col-lg-4 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.site-footer-one__upper */}
					<div className="site-footer-one__bottom">
						<div className="container">
							<div className="site-footer-one__bottom-line" />{/* /.site-footer-one__bottom-line */}
							<p>Copy@2022. All Right Reserved.Design By <a href="#">Webies</a>. </p>
						</div>{/* /.container */}
					</div>{/* /.site-footer-one__bottom */}
				</footer>
			</div>


		)
	}
}


export default Footer_v1