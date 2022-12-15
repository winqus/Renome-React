import PropTypes from 'prop-types';
import { facebookIcon, twitterIcon, googlePlusIcon } from '../atoms/Icons';

function Footer({ header, companyTitle, copyrightText }) {
  return (
    <footer className="footer">
      <h3 className="footer__header">{header}</h3>
      <div className="footer__icons">
        <a href="#fb" className="footer__icon">{facebookIcon}</a>
        <a href="#twitter" className="footer__icon">{twitterIcon}</a>
        <a href="#gplus" className="footer__icon">{googlePlusIcon}</a>
      </div>
      <a href="/#" className="footer__company-title">{companyTitle}</a>
      <h2 className="footer__copyright-text">{copyrightText}</h2>
    </footer>
  );
}

Footer.propTypes = {
  header: PropTypes.string.isRequired,
  companyTitle: PropTypes.string.isRequired,
  copyrightText: PropTypes.node.isRequired,
};

export default Footer;
