const TootImage = props => (
  <div className="image__container">
    <img src={props.url} alt={props.altText} className="toot__image" />
  </div>
);

export default TootImage;
