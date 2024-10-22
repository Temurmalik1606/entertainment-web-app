import React from "react";
import "./Bookmarked.css";

export function Bookmarked({ it }) {
  return (
    <section>
      <div className="items">
        <div className="card">
          <div className="img">
            <img src={it.thumbnail.regular.medium} />
            <div className="saving-icon">
              <img src="/public/assets/bookmark.svg" alt="bookmark" />
            </div>
          </div>
          <div className="texts">
            <div className="about">
              <span>{it.year}</span>
              <span>•</span>
              <span>{it.category}</span>
              <span>•</span>
              <span>{it.rating}</span>
            </div>
            <h3>{it.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
