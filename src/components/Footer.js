import React from "react";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <div className="navbar-item footer-list-heading">
                        Quick links
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://sign.twala.io/register"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/pricing/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/features/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/contact/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sign.twala.io/verify/public"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Verify Document
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <div className="navbar-item footer-list-heading">
                        Quick links
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/faqs/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.atlassian.net/servicedesk/customer/portals"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/blockchain/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Blockchain
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/trust/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Trust Center
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <div className="navbar-item footer-list-heading">
                        Quick links
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/human-resource/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Human Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/finance/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Finance and Accounting
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/legal/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Legal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/sales/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Sales and Procurement
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/education/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/real-estate/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twala.io/solutions/local-government/"
                        target="_blank"
                        className="navbar-item footer-navbar-item"
                      >
                        Local Government
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 social social-media-container">
                <a
                  title="facebook"
                  className="social-media-link"
                  href="https://www.facebook.com/twalaio"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em", color: "white" }}
                  />
                </a>
                <a
                  title="twitter"
                  className="social-media-link"
                  href="https://twitter.com/Twalaio"
                >
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
