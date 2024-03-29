import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';
import IconText from 'parts/IconText';
export default function Footer() {
  return (
    <Fade>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-auto" style={{ width: 350 }}>
              <IconText />
              <p className="brand-tagline">
                We kaboom your beauty holiday instantly and memorable.
              </p>
            </div>
            <div className="col-auto mr-5">
              <h6 className="mt-2">For Beginners</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Start Booking a Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Use Payments
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mr-5">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/careers">
                    Our Careers
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/privacy">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/terms">
                    Terms & Conditions
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h6 className="mt-2">Connect Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:rhobbie09@gmail.com"
                  >
                    rhobbie09@gmail.com
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6234122081997">
                    0882-1208-6292
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Staycation, Rhoka, Jakarta</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2020 • Rhobbi Khaidir • All rights reserved • Staycation
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
