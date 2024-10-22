import "./Main.css";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Movies } from "./Movies/Recommended/Movies";
import { Trendings } from "./Movies/Trendings/Trendings";
import { Route, Routes } from "react-router-dom";
import { TvSeries } from "./Pages/TvSeries/TvSeries";
import { Films } from "./Pages/Films/Films";
import { Bookmarked } from "./Pages/Bookmarked/Bookmarked";

export function Main() {
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [films, setFilms] = useState([]);
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setFilms(
          data.filter((film) => {
            return film.category;
          })
        );
        setTrending(
          data.filter((it) => {
            return it.isTrending;
          })
        );
        setData(data);
      });
  }, []);

  function searchMovie() {
    setSearchData(
      data.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  }

  return (
    <main>
      <SearchBar
        value={value}
        setValue={setValue}
        setMovie={setMovie}
        searchMovie={searchMovie}
      />
      <div className="contents">
        <div className="movies">
          <Routes>
            <Route
              path="/"
              element={trending.map((trends) => {
                return (
                  <>
                    <Trendings trends={trends} />
                  </>
                );
              })}
            />
          </Routes>
        </div>
        <div className="recommendations">
          <div className="title">
            <h1>Recommended for you</h1>
          </div>
          <div className="elements">
            <Routes>
              <Route
                path="/"
                element={
                  searchData
                    ? searchData.map((item) => {
                        return (
                          <>
                            <Movies data={item} />
                          </>
                        );
                      })
                    : data.map((item) => {
                        return (
                          <>
                            <Movies data={item} />
                          </>
                        );
                      })
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      <div className="page">
        <Routes>
          <Route
            path="/movies"
            element={films.map((item) => {
              if (item.category == "Movie") {
                return <Films data={item} />;
              }
            })}
          />
          <Route
            path="/series"
            element={films.map((item) => {
              if (item.category == "TV Series") {
                return <TvSeries data={item} />;
              }
            })}
          />
          <Route
            path="/bookmarked"
            element={films.map((it) => {
              if (it.isBookmarked) {
                return <Bookmarked it={it} />;
              }
            })}
          />
        </Routes>
      </div>
    </main>
  );
}
