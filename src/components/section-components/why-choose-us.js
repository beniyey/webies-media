import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WhyChooseUs extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="service-one go-top">
      <div className="container">
        <div className="block-title text-center">
          <p><span>? מה אנחנו עושים</span></p>
          <h3>מעלים את העסק שלך לדיגטל <br />
            עם הטובים ביותר</h3>
          <div className="block-title__line" />{/* /.block-title__line */}
        </div>{/* /.block-title */}
        <div className="row high-gutter  go-top">
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-1.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/service-details">תחזוקת <br /> אתרים</Link></h3>
                  <p>להיות בשליטה מלאה</p>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p>
                אתר הוא כלי המאפשר לך לספק ערך ללקוחותיך, וככל כלי מדי פעם הוא דורש טיפוח וחידוש,
                אנחנו נספק לך שירות שיעזור לך בזה , צוות המקצוענים שלנו יבצע חידוש, העלאת תוכן ושידרוג לפי הצרכים שלך, בשביל שתוכלו להתעסק במה שבאמת חשוב לכם ולעסק שלכם
              </p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/service-details">SEO, PPC &amp; Social
                    Media Soluation</Link></h3>
                  <p>SEO Optimization</p>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p>
                דירוג אתרים במנועי החיפוש הוא הכלי העיקרי בקידום העסק, אתרים המדורגים בצמרת מנועי החיפוש מקבלים חשיפה גבוה יותר ומספר גבוה יותר של לקוחות ומכירות, וכך גם יותר תוצאות חיוביות לעסק שלך
                ביחד עם צוות קידום האתרים שלנו תוכלו להגיע לדירוג גבוה במנועי החיפוש ולהגדיל את החשיפה שלך

              </p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3><Link to="/service-details">עיצוב ופיתוח <br /> אתרים</Link></h3>
                  <p>פיתרונות דיגיטליים</p>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p>
                ,אנחנו עובדים עם צוות של מעצבי ומפתחי האתרים הטובים בתחום, על מנת לספק לכם את המוצר המתאים ביותר לצרכי העסק
                אנחנו נעזור לך להגדיר את המוצר המתאים ביותר, ונפתח אתר מותאם אישית לצרכים שלך
              </p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>

  }
}

export default WhyChooseUs