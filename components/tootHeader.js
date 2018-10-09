const tootHeader = (props) => {
  const { display_name, acct, avatar_static } = props.message;
  return (
    <div className="card--toot-header">
      <img className="toot-header__img" src={avatar_static} alt="Profile" />
      <strong dangerouslySetInnerHTML={{ __html: display_name ? display_name : acct }} />
      <br />
      <span className="account-name">@{acct}</span>
    </div>
  );
};
export default tootHeader;
