const TootFooter = props => (
  <div style={{ color: '#606984' }}>
    <span className="toot-footer__metadata">
      &#11178;
      {props.replyCount}
    </span>
    <span className="toot-footer__metadata">
      &#11156;
      {props.boostCount}
    </span>
    <span className="toot-footer__metadata">
      &#9733;
      {props.favoriteCount}
    </span>
  </div>
);

export default TootFooter;
