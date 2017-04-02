import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="sticky-header">
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
      </div>
    );
  }

}

export default Header;
