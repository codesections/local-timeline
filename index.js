import './style';
import { Component } from 'preact';
import LoadingMsg from './components/loading.js';
import Toot from './components/toot.js';

export default class App extends Component {
  constructor() {
    super();
    this.state.loaded = 'false';
    this.state.messages = [];
    this.state.idOfLastLoadedToot = '';
  }

  componentDidMount() {
    this.getLocalTimeline();
  }

  getLocalTimeline() {
    const xhr = new XMLHttpRequest();
    let url = 'https://fosstodon.org/api/v1/timelines/public?local=true';
    if (this.state.idOfLastLoadedToot) { url += `&max_id=${this.state.idOfLastLoadedToot}`; }

    xhr.open('GET', url, true);
    const context = this;

    xhr.onreadystatechange = () => {
      if (
        xhr.readyState === XMLHttpRequest.DONE
        && xhr.status === 200
      ) {
        const fullResponse = JSON.parse(xhr.responseText);
        const propertiesToKeep = [
          'account',
          'content',
          'created_at',
          'favourites_count',
          'reblogs_count',
          'replies_count',
          'media_attachments',
          'spoiler_text',
        ];
        const response = [];
        fullResponse.forEach((responseObj) => {
          const filtered = Object.keys(responseObj).filter(key => propertiesToKeep.includes(key))
            .reduce((obj, key) => {
              obj[key] = responseObj[key];
              return obj;
            }, {});
          response.push(filtered);
        });
        context.setState({ messages: context.state.messages.concat(response) });
        context.setState({ idOfLastLoadedToot: fullResponse[fullResponse.length - 1].id });
        context.setState({ loaded: true });
      }
    };
    xhr.send();
  }

  render() {
    return (
      <div className="body__defaults">
        <div>
          <h1 className="header--main" id="add-an-instance-h1">
            Fosstodon local timeline
          </h1>
        </div>
        <div className="results--target-toot">
          {this.state.loaded === true
            ? this.state.messages.map(message => <Toot message={message} />)
            : <LoadingMsg />}
        </div>
        <button
          type="button"
          onClick={() => this.getLocalTimeline.call(this)}
          className="button button--good"
        >
          Load More
        </button>
      </div>
    );
  }
}
/*


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta property="og:title" content="Mastodon De-Mob"> 
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Mastodon De-Mob">
    <meta name="twitter:image:src" content="https://www.codesections.com/codesections_logo.png"> 
    <meta property="og:type" content="article">
    <meta property="og:url" content="www.codesections.com">
    <meta property="og:site_name" content="CodeSections">
    <meta property="article:section" content="Article Section">
    <meta property="og:image" itemprop="image primaryImageOfPage" content="https://www.codesections.com/codesections_logo_large.png"><meta name="og:description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <meta name="description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <meta name="twitter:description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#d9d9d9">
    <link rel="canonical" href="https://mastodon-de-mob.codesections.com">
    <title>
Fosstodon local timeline
    </title>
  <body lang="en" class="body__defaults">
    <h1 class="header--main" id="add-an-instance-h1">
      Fosstodon local timeline
    </h1>
    <noscript>
      <div class="alert alert__warning">
        <strong class="header--alert">JavaScript Required</strong>
        <p class="paragraph--alert">Ok, yes, I know you probably have 
        JavaScript disabled for good reasons—I also value my privacy and
        don't like the bloat of the modern web.  But look, this app is
        neither bloated nor spying on you.  If you don't believe me, check
        out the <a class="link" href="https://github.com/codesections/mastodon-de-mob">source</a>. 
        In fact, just read the source for this page—I didn't even minify 
        anything or take out the comments.  You can see for yourself that
        there aren't any trackers; just simple http requests to your mastodon
        instance.  This is one to add to your whitelist.
        </p>
      </div>
    </noscript>

    <div class="content__login">
    </div>
    
    
      <div class="alert alert__error error--toot-not-found">
        <strong>Error</strong>: Could not find toot.  Please check the URL and try again.
      </div>

    <div class="alert alert__error error--unknown">
        <strong class="header--alert">Sever error</strong>
        <p>
          Something went wrong.  Sorry about that!
        </p>
    </div> 
    
    <div class="content__results">
      <h2 class="header--secondary">
      </h2>
      <div class="results--target-toot">
      </div>
      <button class="button button--good button--block-all">Next</button>
    </div>
    <script src="main.js"></script>
  </body>
</html>
*/
