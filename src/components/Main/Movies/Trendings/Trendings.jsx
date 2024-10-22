import "./Trendings.css";

export function Trendings({ trends }) {
  return (
    <div className="trends">
      <div className="img">
        <img className="films" src={trends.thumbnail.regular.large} />
        <div className="saving-icon">
          <img src="/public/assets/bookmark.svg" alt="bookmark" />
        </div>
      </div>
      <div className="text">
        <div className="about">
          <span>{trends.year}</span>
          <span>•</span>
          <span>{trends.category}</span>
          <span>•</span>
          <span>{trends.rating}</span>
        </div>
        <h3>{trends.title}</h3>
      </div>
    </div>
  );
}
