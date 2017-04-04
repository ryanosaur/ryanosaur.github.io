import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

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
          { ['about', 'projects', 'contact'].map(link => {
              return (
                <Link key={`${link}-nav-item clickable`} to={`/${link}`} className="navigation-list-item-wrap">
                  <div className="navigation-list-item">{ link }</div>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default Header;
