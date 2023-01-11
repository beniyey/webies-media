import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV9 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-two cta-two__about-page  go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/meeting-about-page.jpg)'}}>
              <div className="container text-center">
                <h3>עם הצוות המסור שלנו <br />
                  לא תרגישו לבד</h3>
              </div>{/* /.container */}
            </section>

        }
	}

export default CtaV9