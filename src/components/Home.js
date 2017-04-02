import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className="home-page-wrap">
        <section className="home-header-section business-card-section">
          <div className="home-header-img-wrap">
            <img className="home-header-img" alt="ryanosaur's github profile img" src="https://avatars2.githubusercontent.com/u/5642293?s=400"></img>
          </div>
          <div className="home-header-details-wrap">
            <h1 className="home-header-detail-item home-header-name">Ryan Taylor</h1>
            <h3 className="home-header-detail-item home-header-title">Software Developer</h3>
            <h3 className="home-header-detail-item home-header-email"><a href="mailto:ryan.justin.taylor@gmail.com">ryan.justin.taylor@gmail.com</a></h3>
            <h3 className="home-header-detail-item home-header-telephone"><a href="tel:+14089148921">+1 (408) 914-8921</a></h3>
          </div>
        </section>
      </div>
    );
  }

}

export default Home;
