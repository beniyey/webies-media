import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortfolioONe extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="portfolio-one go-top">
			<div className="container">
				<div className="block-title text-center">
					<p><span>כנסו והתרשמו</span></p>
					<h3>הפרוייקטים המובילים שלנו <br /></h3>
					<div className="block-title__line" />{/* /.block-title__line */}
				</div>{/* /.block-title */}
				<div className="row">
					<div className="col-lg-4">
						<div className="portfolio-one__single">
							<img src={publicUrl + "assets/images/portfolio/havana-mockup-1(1).jpg"} alt={imagealt} />
							<div className="portfolio-one__content">
								<div className="portfolio-one__content-inner">
									<h3><Link to="/portfolio-details">Havana trips</Link></h3>
									<p>Design, Development</p>
								</div>{/* /.portfolio-one__content-inner */}
							</div>{/* /.portfolio-one__content */}
						</div>{/* /.portfolio-one__single */}
					</div>{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<div className="portfolio-one__single">
							<img src={publicUrl + "assets/images/portfolio/foodies-mockup-1.jpg"} alt={imagealt} />
							<div className="portfolio-one__content">
								<div className="portfolio-one__content-inner">
									<h3><Link to="/portfolio-details">Foodies market</Link></h3>
									<p>Design, Development</p>
								</div>{/* /.portfolio-one__content-inner */}
							</div>{/* /.portfolio-one__content */}
						</div>{/* /.portfolio-one__single */}
					</div>{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<div className="portfolio-one__single">
							<img src={publicUrl + "assets/images/portfolio/chrispy-pizza-mobig.jpg"} alt={imagealt} />
							<div className="portfolio-one__content">
								<div className="portfolio-one__content-inner">
									<h3><Link to="/portfolio-details">Crispy pizza</Link></h3>
									<p>Design, Branding</p>
								</div>{/* /.portfolio-one__content-inner */}
							</div>{/* /.portfolio-one__content */}
						</div>{/* /.portfolio-one__single */}
					</div>{/* /.col-lg-4 */}
				</div>{/* /.row */}
				<div className="portfolio-one__more-btn__block text-center">
					<Link to="/portfolio-full" className="thm-btn portfolio-one__more-btn">לעוד פרוייקטים <i className="fa fa-angle-double-right" /></Link>
					{/* /.thm-btn */}
				</div>{/* /.portfolio-one__more-btn__block */}
			</div>{/* /.container */}
		</section>

	}
}

export default PortfolioONe