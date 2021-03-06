import React from 'react';

//Photos from Buzz
import BuzzHome from '../assets/images/Buzz Home.png';
import BuzzHomeLarge from '../assets/images/Buzz Home Large.png';
import BuzzCategories from '../assets/images/Buzz Categories.png';
import BuzzCategoriesLarge from '../assets/images/Buzz Categories Large.png';
import BuzzHHList from '../assets/images/Buzz HH List.png';
import BuzzHHListLarge from '../assets/images/Buzz HH List Large.png';

//Photos from JCF Page
import JCFHome from '../assets/images/JCF Home.png';
import JCFHomeLarge from '../assets/images/JCF Home Large.png';

//Photos from iResist
import iResistProtests from '../assets/images/iResist Protests.png';
import iResistProtestsLarge from '../assets/images/iResist Protests Large.png';
import iResistProtestInfo from '../assets/images/iResist Protest Info.png';
import iResistProtestInfoLarge from '../assets/images/iResist Protest Info Large.png';
import iResistMap from '../assets/images/iResist Map.png';
import iResistMapLarge from '../assets/images/iResist Map Large.png';
import iResistMessages from '../assets/images/iResist Messages.png';
import iResistMessagesLarge from '../assets/images/iResist Messages Large.png';
import iResistTweets from '../assets/images/iResist Tweets.png';
import iResistTweetsLarge from '../assets/images/iResist Tweets Large.png';

//Photos from Cat Facts
import CatFacts from '../assets/images/Cat Facts.png';
import CatFactsLarge from '../assets/images/Cat Facts Large.png';

//Photo from Yahoogle Mail
import Yahoogle from '../assets/images/Yahoogle.png';
import YahoogleLarge from '../assets/images/Yahoogle-Large.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h2>Portfolio</h2>

        <h3> iResist </h3>
        <p>
          iResist allows users to anonymously organize, execute, or join protests.
          On the day of the protest, participants are able to view a live message feed, drop pins on a map alerting others of happenings, and view a Twitter feed.
        </p>
        <p id="italicize">
          iResist is built with React, Redux, Socket.io, Leaflet, Twit, NodeJS, ExpressJS, PostgreSQL, Heroku
        </p>
        <span> Check it out at <a href="https://i-resist.herokuapp.com" target="_blank" rel="noopener noreferrer">i-resist.herokuapp.com</a> and see the code on <a href="https://github.com/iResist/iResist" target="_blank" rel="noopener noreferrer" >Github</a></span>
        <br/>
        <br/>
        <a target="_blank" href={iResistProtestsLarge}><img src={iResistProtests} alt="iResist Protests" /></a>
        <a target="_blank" href={iResistProtestInfoLarge} rel="noopener"><img src={iResistProtestInfo} alt="iResist Protests Info" /></a>
        <a target="_blank" href={iResistMapLarge} rel="noopener"><img src={iResistMap} alt="iResist Map" /></a>
        <a target="_blank" href={iResistMessagesLarge} rel="noopener"><img src={iResistMessages} alt="iResist Messages" /></a>
        <a target="_blank" href={iResistTweetsLarge} rel="noopener"><img src={iResistTweets} alt="iResist Tweets" /></a>

      <h3>Buzz: SF Happy Hour Finder </h3>
      <p>
        Buzz allows users to find happy hours in SF neighborhoods. Users can select a neighborhood or choose a category (Divey, Bougie, Hip, etc.) and see recommendations. This app was created because Yelp did not have information on what time happy hours occurred.
        <br/>
        <br/>
        Turn your "sad hours" into "happy hours"
      </p>
      <p id="italicize">
        Buzz is built with React, NodeJS, ExpressJS, PostgreSQL, Heroku
      </p>
      <span> Check it out at <a href="https://buzzhappyhour.herokuapp.com/" target="_blank" rel="noopener noreferrer">buzzhappyhour.herokuapp.com</a> and see the code on <a href="https://github.com/BuzzHappyHour/Buzz" target="_blank" rel="noopener noreferrer">Github</a></span>
      <br/>
      <br/>

      <a target="_blank" href={BuzzHomeLarge} rel="noopener"><img src={BuzzHome} alt="Buzz Homepage" /></a>
      <a target="_blank" href={BuzzCategoriesLarge} rel="noopener"><img src={BuzzCategories} alt="Buzz Categories" /></a>
      <a target="_blank" href={BuzzHHListLarge} rel="noopener"><img src={BuzzHHList} alt="Buzz HH List" /></a>

      <h3>Journey Christian Fellowship Homepage</h3>
      <p>
        This is the website for Journey Christian Fellowship, a church in Walnut Creek.
      </p>
      <p id="italicize">
        JCF's homepage is built with Jekyll and Heroku
      </p>
      <span> Check it out at <a href="http://journeychristianfellowship.herokuapp.com/" target="_blank" rel="noopener noreferrer">journeychristianfellowship.herokuapp.com</a> and see the code on <a href="https://github.com/tabithahsia/churchwebsite" target="_blank" rel="noopener noreferrer">Github</a></span>
        <br/>
        <br/>
      <a target="_blank" href={JCFHomeLarge} rel="noopener"><img src={JCFHome} alt="JCF Homepage" /></a>

      <h3>Cat Facts</h3>
      <p>
        Cat Facts generates cat facts and allows you to share these amazing facts with your fellow human beings.
      </p>
      <p id="italicize">
        Cat Facts is built with React, NodeJS, ExpressJS, PostgreSQL, and Heroku
      </p>
      <span> Check it out at <a href="http://catfacts.life" target="_blank" rel="noopener noreferrer">catfacts.life</a> and see the code on <a href="https://github.com/tabithahsia/Cat-Facts" target="_blank" rel="noopener noreferrer">Github</a></span>
        <br/>
        <br/>
      <a target="_blank" href={CatFactsLarge} rel="noopener"><img src={CatFacts} alt="Cat Facts" /></a>

      <h3>YahoogleMail</h3>
      <p>
        YahoogleMail is an email service.
      </p>
      <p id="italicize">
        YahoogleMail is built with React, NodeJS, ExpressJS, Heroku, SendGrid, and Mailgun
      </p>
      <span> Check it out at <a href="http://yahooglemail.herokuapp.com" target="_blank" rel="noopener noreferrer">yahooglemail.herokuapp.com</a> and see the code on <a href="https://github.com/tabithahsia/email-service" target="_blank" rel="noopener noreferrer">Github</a></span>
        <br/>
        <br/>
      <a target="_blank" href={YahoogleLarge} rel="noopener"><img src={Yahoogle} alt="Cat Facts" /></a>

      </div>

    )
  }
}

export default Portfolio;
