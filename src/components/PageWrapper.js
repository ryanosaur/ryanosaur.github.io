import React from 'react';
import Header from './Header';

class PageWrapper extends React.Component {

  render() {
    return (
      <div className="resume-app-wrap">
        <Header />
        { this.props.children }
      </div>
    );
  }

}

export default PageWrapper;
