import React from 'react';

class FadeInText extends React.Component {

  constructor(props) {
    super(props);
    this.state = { start: false };
  }

  componentDidMount() {
    this.startFadeIn();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.text !== nextProps.text) {
      Object.assign(nextState, { start: false });
      this.startFadeIn();
    }
  }

  startFadeIn = () => {
    setTimeout(() => {
      this.setState({ start: true });
    }, 300);
  }

  render() {
    let { text } = this.props;
    return (
      <span className={`fade-in-text${this.state.start ? ' fade' : ''}`}>{ text }</span>
    );
  }

}

export default FadeInText;
