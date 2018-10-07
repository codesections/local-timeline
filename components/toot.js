import TootHeader from './tootHeader.js';
import TootContent from './tootContent.js';
import TootFooter from './tootFooter.js';
import TootImage from './tootImage.js';

const Toot = props => (
  <div>
    <TootHeader message={props.message.account} />
    <TootContent
      text={props.message.content}
      cwText={props.message.spoiler_text}
    />
    {props.message.media_attachments.map(img => (
      <TootImage
        url={img.preview_url}
        altText={img.description}
      />
    ))}
    <TootFooter
      replyCount={props.message.replies_count}
      boostCount={props.message.reblogs_count}
      favoriteCount={props.message.favourites_count}
    />
    <hr />
  </div>
);
export default Toot;
