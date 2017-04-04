import React from 'react';
import FadeInText from './FadeInText';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // NOTE: just random list of cities that came to mind.
      locations: ['World', 'Newfoundland', 'New York City', 'Amsterdam', 'London', 'San Francisco', 'Barcelona', 'Los Angeles', 'Sydney'],
      current: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      let { current, locations } = this.state;
      this.setState({
        current: (current === locations.length - 1) ? 0 : current + 1
      });
    }, 2000);
  }

  render() {
    let { locations, current } = this.state;
    return (
      <div className="home-page-wrap">
        <section className="home-header-section home-banner">
          <h1 className="home-header-hello-banner">Hello, <FadeInText text={`${locations[current]}.`} /></h1>
        </section>
        <section className="home-header-section business-card-section">
          <div className="home-header-img-wrap">
            <img className="home-header-img" alt="ryanosaur's github profile img" src="https://avatars2.githubusercontent.com/u/5642293?s=400"></img>
          </div>
          <div className="home-header-details-wrap">
            <h1 className="home-header-detail-item home-header-name">Ryan Taylor</h1>
            <h3 className="home-header-detail-item home-header-title">Software Developer</h3>
            <h3 className="home-header-detail-item home-header-email clickable"><a href="mailto:ryan.justin.taylor@gmail.com">ryan.justin.taylor@gmail.com</a></h3>
            <h3 className="home-header-detail-item home-header-telephone clickable"><a href="tel:+14089148921">+1 (408) 914-8921</a></h3>
          </div>
        </section>
        <section className="home-header-section">
          <div className="home-section-content-wrap">
            <h2 className="home-section-title">Who am I?</h2>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">This is a paragraph.</p>
          </div>
        </section>
        <section className="home-header-section">
          <div className="home-section-content-wrap">
            <h2 className="home-section-title">Who are you?</h2>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-text">This is a paragraph.</p>
          </div>
        </section>
      </div>
    );
  }

}

export default Home;
