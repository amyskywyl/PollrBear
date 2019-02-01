import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser }) => {
  const primaryHome = () => (
    <div className="home">
      <div className="hero-img-frame">
        <img className="hero-img" src={window.splashURL} />
      </div>
      <h1>Live interactive audience participation</h1>
      <p>Engage your audience or class in real time</p>
      <Link className="get-started" to="/signup">Get started</Link>
    </div>
  );
  const loggedinHome = ({ currentUser }) => (
    <div>
      <div className="home">
        <div className="hero-img-frame">
          <img className="hero-img" src={window.splashURL} />
        </div>
        <h1>Live interactive audience participation</h1>
        <p>Engage your audience or class in real time</p>
        <Link className="get-started" to={"/groups"}>Get started</Link>
      </div>
        <div className="extra-spacing--top three-up">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="three-up__thumb">
                  <img alt="Ask a question" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/img-text/ask-a-question-bc3a32579028581c293fbb2927fe0b6740d206d4f801eeda75d8893c22ea69db.jpg" className="lazy-load-fade-in" src="//d20idoa067r6h3.cloudfront.net/assets/img-text/ask-a-question-bc3a32579028581c293fbb2927fe0b6740d206d4f801eeda75d8893c22ea69db.jpg"/>
</div>
                  <div className="three-up__content">
                    <h4 className="three-up__title">Ask a question</h4>
                    <p>Use multiple choice questions to identify gaps in understanding, or kick off group discussions with a colorful word cloud.</p>

                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="three-up__thumb">
                    <img alt="Collect live responses" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/img-text/collect-live-responses-0acc77ff4c552e1e8b23bdac9159ba8095574e05da8f3c619469b475b832e97e.jpg" className="lazy-load-fade-in" src="//d20idoa067r6h3.cloudfront.net/assets/img-text/collect-live-responses-0acc77ff4c552e1e8b23bdac9159ba8095574e05da8f3c619469b475b832e97e.jpg"/>
</div>
                    <div className="three-up__content">
                      <h4 className="three-up__title">Collect live responses</h4>
                      <p>Invite the audience to respond simultaneously by visiting a website or texting a number on their phones.</p>

                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="three-up__thumb">
                      <img alt="See instant results" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/img-text/see-instant-results-4ef0b9571a81baf3ebc2905e2bb1fda33a8d6b16766f73aec4a903dd8dd634e4.jpg" className="lazy-load-fade-in" src="//d20idoa067r6h3.cloudfront.net/assets/img-text/see-instant-results-4ef0b9571a81baf3ebc2905e2bb1fda33a8d6b16766f73aec4a903dd8dd634e4.jpg"/>
</div>
                      <div className="three-up__content">
                        <h4 className="three-up__title">See instant results</h4>
                        <p>Responses appear in an animated graph or chart embedded in your presentation. Results update live for all to see.</p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

      <div className="logo-display">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="logo-display__content">
                <h2 className="logo-display__title">Over 75% of the Fortune 500 trust Poll Everywhere</h2>
                <p>We also help over 300,000 educators facilitate tough discussions in classNamerooms worldwide</p>
              </div>
              <div className="logo-display__thumbs">
                <div className="row">
                  <div className="col-xs-4 col-sm-3 col-md-2">
                    <img className="logo-display__logo lazy-load-fade-in" alt="Apple logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/apple-8482ca637bce84e6fa9ce409c3e88c9d0ad1655f497b57cddc0fde3d59d4532f.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/apple-8482ca637bce84e6fa9ce409c3e88c9d0ad1655f497b57cddc0fde3d59d4532f.png"/>
</div>
                    <div className="col-xs-4 col-sm-3 col-md-2">
                      <img className="logo-display__logo lazy-load-fade-in" alt="Att logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/att-723fbcad50377a0b64493197bb7d284d6131bcd4fe289c40b4f5ce6f036ccd7c.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/att-723fbcad50377a0b64493197bb7d284d6131bcd4fe289c40b4f5ce6f036ccd7c.png"/>
</div>
                      <div className="col-xs-4 col-sm-3 col-md-2">
                        <img className="logo-display__logo lazy-load-fade-in" alt="Bank of america logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/bank_of_america-5436d01556ea3f0b2a16e1e9d7826b80fbe8c6cdd1304a2c2ecc1cc1167ca43d.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/bank_of_america-5436d01556ea3f0b2a16e1e9d7826b80fbe8c6cdd1304a2c2ecc1cc1167ca43d.png"/>
</div>
                        <div className="col-xs-4 col-sm-3 col-md-2">
                          <img className="logo-display__logo lazy-load-fade-in" alt="Chevron logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/chevron-a7a855eec9a7c9732a1308beeaec7bc1af3c15303c3ddf49800f4be866419396.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/chevron-a7a855eec9a7c9732a1308beeaec7bc1af3c15303c3ddf49800f4be866419396.png"/>
</div>
                          <div className="col-xs-4 col-sm-3 col-md-2">
                            <img className="logo-display__logo lazy-load-fade-in" alt="Coca cola logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/coca_cola-83aa26f06bfef22ff1700fd939e97e6a1fe24acc39d5fa271a64a2c029d8fd5f.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/coca_cola-83aa26f06bfef22ff1700fd939e97e6a1fe24acc39d5fa271a64a2c029d8fd5f.png"/>
</div>
                            <div className="col-xs-4 col-sm-3 col-md-2">
                              <img className="logo-display__logo lazy-load-fade-in" alt="Americas navy logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/americas_navy-802dbc33fad2a7b3abd5e16fbd4df4e389e55cbd672380341a3b42745c91cac1.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/americas_navy-802dbc33fad2a7b3abd5e16fbd4df4e389e55cbd672380341a3b42745c91cac1.png"/>
</div>
                              <div className="col-xs-4 col-sm-3 col-md-2">
                                <img className="logo-display__logo lazy-load-fade-in" alt="Google logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/google-35af199befa73fe383f9d41ee57dae58b6a8d59c90e746bb51a80cbc40064c55.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/google-35af199befa73fe383f9d41ee57dae58b6a8d59c90e746bb51a80cbc40064c55.png"/>
</div>
                                <div className="col-xs-4 col-sm-3 col-md-2">
                                  <img className="logo-display__logo lazy-load-fade-in" alt="Hewlett packard logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/hewlett_packard-21da2c62a5b42852c5af0d9201145eec1c7f7d21f53a5e0bbddbed9b5cfcf1b3.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/hewlett_packard-21da2c62a5b42852c5af0d9201145eec1c7f7d21f53a5e0bbddbed9b5cfcf1b3.png"/>
</div>
                                  <div className="col-xs-4 col-sm-3 col-md-2">
                                    <img className="logo-display__logo lazy-load-fade-in" alt="Merrill lynch logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/merrill_lynch-5ca45bba23301798be0f8b9b945380b3604f0d7dd3cb73f0d421ca6cfd3f0d02.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/merrill_lynch-5ca45bba23301798be0f8b9b945380b3604f0d7dd3cb73f0d421ca6cfd3f0d02.png"/>
</div>
                                    <div className="col-xs-4 col-sm-3 col-md-2">
                                      <img className="logo-display__logo lazy-load-fade-in" alt="Microsoft logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/microsoft-8ccf62534a73757d5a9e1528ec757e8d029534e4810a26a1a20acbb88943b4ee.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/microsoft-8ccf62534a73757d5a9e1528ec757e8d029534e4810a26a1a20acbb88943b4ee.png"/>
</div>
                                      <div className="col-xs-4 col-sm-3 col-md-2">
                                        <img className="logo-display__logo lazy-load-fade-in" alt="Target logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/target-68f92c07a7801a0461b566aea10a0b86f18e5c624706f1ef3e7de58c8284a291.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/target-68f92c07a7801a0461b566aea10a0b86f18e5c624706f1ef3e7de58c8284a291.png"/>
</div>
                                        <div className="col-xs-4 col-sm-3 col-md-2">
                                          <img className="logo-display__logo lazy-load-fade-in" alt="Verizon logo" js-lazy-load="//d20idoa067r6h3.cloudfront.net/assets/logo/verizon-d859ad22035e8862d5a93e2713733fb9379fd8806f4639eb5c2087ad7ea9b52b.png" src="//d20idoa067r6h3.cloudfront.net/assets/logo/verizon-d859ad22035e8862d5a93e2713733fb9379fd8806f4639eb5c2087ad7ea9b52b.png"/>
</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
    </div>
  );
  return currentUser ? loggedinHome() : primaryHome();
};

export default Home;