const LoadingMsg = () => (
  <div className="content__loading">
    <div className="loading--in-progress">
      <h2 className="header--secondary">
        Loading local timeline
        <span className="loader__dot">.</span>
        <span className="loader__dot">.</span>
        <span className="loader__dot">.</span>
      </h2>
    </div>
  </div>
);

export default LoadingMsg;
