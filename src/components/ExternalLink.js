import React from 'react';

class ExternalLink extends React.Component {

  render() {
    return (
      <a href={this.props.href} className="external-link" target="_blank">{this.props.children}</a>
    );
  }

}

export default ExternalLink;
