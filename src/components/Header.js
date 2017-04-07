import React from 'react';
import { Link } from 'react-router';
import IconSocial from './IconSocial';

class Header extends React.Component {

  getUriFor(type) {
    let socialLinks = {
      linkedin: 'https://www.linkedin.com/in/ryanomite/',
      github: 'https://github.com/ryanosaur',
      instagram: 'https://www.instagram.com/ryanorite/',
      twitter: 'https://twitter.com/ryanotopia',
    }
    return socialLinks[type] || null;
  }

  render() {
    return (
      <div className="sticky-header">
        <Link to="/">
          <div className="brand-name-wrap">
            <span className="brand-name-text">
              <span className="react-brackets">&lt;</span>
              <span className="react-element">RyanTaylor</span>
              <span className="react-attr">developer=
                <span className="react-brackets">&#123;</span>
                <span className="react-value">true</span>
                <span className="react-brackets">&#125;</span></span>
              <span className="react-brackets">/&gt;</span>
            </span>
          </div>
        </Link>
        <div className="navigation-list-wrap">
          { ['linkedin', 'github', 'instagram', 'twitter'].map(link => {
              return (
                <a href={this.getUriFor(link)} target="_blank" key={link} className="navigation-list-item clickable">
                  <IconSocial type={link} />
                </a>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default Header;
