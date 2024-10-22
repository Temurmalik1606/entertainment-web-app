import React from "react";

export function TvSeries({ data }) {
  return (
    <section>
      <div className="items">
        <div className="card">
          <div className="img">
            <img src={data.thumbnail.regular.medium} />
            <div className="saving-icon">
              <img src="/public/assets/bookmark.svg" alt="bookmark" />
            </div>
          </div>
          <div className="texts">
            <div className="about">
              <span>{data.year}</span>
              <span>•</span>
              <span>{data.category}</span>
              <span>•</span>
              <span>{data.rating}</span>
            </div>
            <h3>{data.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
