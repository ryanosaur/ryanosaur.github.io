import React from 'react';
import Header from './Header';

class PageWrapper extends React.Component {

  render() {
    return (
      <div className="resume-app-wrap">
        <Header />
        <div className="resume-pages-wrap">
          { this.props.children }
        </div>
      </div>
    );
  }

}

export default PageWrapper;
