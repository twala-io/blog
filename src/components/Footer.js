import React from "react";
import { Link } from "gatsby";
import { URL_HELPERS } from "../utils/urls";
import Icon from "./icon";

import "./footer.scss";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="socmed-links">
              <a className="facebook" href="https://www.facebook.com/twalaio">
                <Icon className="icon-facebook" size={20} />
              </a>
              <a className="twitter" href="https://twitter.com/Twalaio">
                <Icon className="icon-twitter" size={20} />
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/company/twalaio"
              >
                <Icon className="icon-linkedin" size={20} />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/channel/UCEBwlLlYX-q472ACUawmYYQ"
              >
                <Icon className="icon-youtube" size={20} />
              </a>
            </div>
            <div className="subscribe-form">
              <label className="label">Subscribe to our news letter</label>
              <input className="input" placeholder="youremail@email.com" />
              <button className="button">
                <Icon type="icon-send" size={20} />
              </button>
            </div>
          </div>
          <div className="footer-right">
            <small className="preamble">Quick Links</small>
            <small className="preamble">Help</small>
            <small className="preamble">Solutions</small>

            <Link to={`${URL_HELPERS.twalaSign}/register`}>Sign Up</Link>
            <Link to={URL_HELPERS.faqs}>FAQs</Link>
            <Link to={URL_HELPERS.humanResource}>Human Resources</Link>

            <Link to={URL_HELPERS.solutions}>Solutions</Link>
            <Link to={URL_HELPERS.helpCenter}>Help Center</Link>
            <Link to={URL_HELPERS.finance}>Finance and Accounting</Link>

            <Link to={URL_HELPERS.pricing}>Pricing</Link>
            <Link to={URL_HELPERS.blockchain}>Blockchain</Link>
            <Link to={URL_HELPERS.legal}>Legal</Link>

            <Link to={URL_HELPERS.features}>Features</Link>
            <Link to={URL_HELPERS.trust}>Trust Center</Link>
            <Link to={URL_HELPERS.sales}>Sales and Procurement</Link>

            <Link to={URL_HELPERS.contact}>Contact</Link>
            <div />
            <Link to={URL_HELPERS.education}>Education</Link>

            <Link to={URL_HELPERS.verify}>Verify Document</Link>
            <div />
            <Link to={URL_HELPERS.realEstate}>Real Estate</Link>

            <div />
            <div />
            <Link to={URL_HELPERS.localGovernment}>Local Governments</Link>
          </div>
        </div>
        <div className="meta-info">
          <span className="copyright">© 2021 Twala, Inc.</span>
          <div />
          <div className="policy-wrapper">
            <Link to={URL_HELPERS.terms}>Terms of Use</Link>
            <Link to={URL_HELPERS.privacy}>Privacy Policy</Link>
            <Link to={URL_HELPERS.cookie}>Cookie Policy</Link>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
