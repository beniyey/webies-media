import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioMasonary extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="portfolio-masonary  go-top">
      <div className="container">
        <div className="row masonary-layout">
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/crispy-portfolio.png"} alt={imagealt} />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3>< >Crispy pizza</></h3>
                <p>עיצוב ופיתוח</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/foodies-mockup-1.jpg"} alt="" />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3>< >Foodies market</></h3>
                <p>עיצוב ופיתוח</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/havana-portfolio.png"} alt="" />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3>< >Havana vacations</></h3>
                <p>עיצוב ופיתוח</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/WLLOT-portfolio.png"} alt="" />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3>< >Wallot finance</></h3>
                <p>עיצוב ופיתוח</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/spring.png"} alt="" />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3>< >Euphoria</></h3>
                <p>עיצוב מוצר</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/bikini.png"} alt={imagealt} />
              </div>
              <div className="portfolio-two__content">
                <h3>< >Playa</></h3>
                <p>שיווק מותג</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 masonary-item">
            <div className="portfolio-two__single">
              <div className="portfolio-two__image">
                <img src={publicUrl + "assets/images/portfolio/mood.png"} alt="" />
              </div>{/* /.portfolio-two__image */}
              <div className="portfolio-two__content">
                <h3><Link >Mood</Link></h3>
                <p>עיצוב ופיתוח</p>
              </div>
            </div>{/* /.portfolio-two__single */}
          </div>{/* /.col-md-6 masonary-item */}
        </div>{/* /.row masonary-layout */}
        <div className="text-center">
          <Link to="/contact" className="portfolio-masonary__more-btn thm-btn">צור קשר <i className="fa fa-angle-double-right" /></Link>
        </div>{/* /.text-center */}
      </div>{/* /.container */}
    </section>

  }
}

export default PortFolioMasonary