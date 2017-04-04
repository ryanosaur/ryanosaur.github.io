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
            <h3 className="home-header-detail-item home-header-email"><a className="external-link" href="mailto:ryan.justin.taylor@gmail.com">ryan.justin.taylor@gmail.com</a></h3>
            <h3 className="home-header-detail-item home-header-telephone"><a className="external-link" href="tel:+14089148921">+1 (408) 914-8921</a></h3>
          </div>
        </section>
        <section className="home-header-section">
          <div className="home-section-content-wrap">
            <h2 className="home-section-title">Who am I?</h2>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              Oh boy, we're starting with existentialism? Well, first and foremost I'm a Newfoundlander. If you've never noticed it on a map,
              it's the (not so little) island off the east coast of Canada that resembles a foam finger people wear to sports games. There's about 500 000
              of us in existence at any given time, so we're a pretty rare breed.
            </p>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              More relevently, I'm a data driven software developer -- with a love for VIM. After college, I started working at startup in Newfoundland
              called <a href="https://verafin.com/" className="external-link" target="_blank">Verafin</a> doing first integrations between their software and core banking systems
              in the United States and Canada, and later between their software and <a href="https://www.salesforce.com/" className="external-link" target="_blank">Salesforce.com</a>.
            </p>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              In the spring of 2015, I decided I was ready for a new challenge. One that would marry my creative mind with my technical talents. So I
              travelled to Fremont, California to join a 90 day javascript intensive bootcamp. There I would learn all of the wizardry of modern front-end
              development.
            </p>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              While in California job searching, I was approached by <a href="http://canvs.tv/" className="external-link" target="_blank">Canvs</a>. Canvs has given me the opportunity
              to move to New York City and lead a team of developers to creating their new front-end application in whatever libraries and architecture I chose.
              For that, I will be forever grateful.
            </p>
          </div>
        </section>
        <section className="home-header-section">
          <div className="home-section-content-wrap">
            <h2 className="home-section-title">Who are you?</h2>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              Hopefully, you are someone who would has a challenge in mind and would like to collaborate in some way.
            </p>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              Here's what technical skillsets I can offer you immediately, although I'm open to learning continuously.
            </p>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              Front-End Development:
            </p>
            <ul>
              <li>React</li>
              <li>Relay</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              API Design:
            </p>
            <ul>
              <li>GraphQL</li>
              <li>REST</li>
            </ul>
          </div>
        </section>
        <section className="home-header-section">
          <div className="home-section-content-wrap">
            <p className="home-section-content">
              &copy; 2017. All Rights Reserved, or whatever. Just <a className="external-link" href="mailto:ryan.justin.taylor@gmail.com">email</a> me if you
              want to steal something of mine and I'll probably just give it to you.
            </p>
          </div>
        </section>
      </div>
    );
  }

}

export default Home;
