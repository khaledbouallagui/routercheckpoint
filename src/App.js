import { useState } from "react";
import "./App.css";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import { moviesData } from "./Data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Description from "./component/Description";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchvalue, setSearchvalue] = useState("");
  const [serachrate, setSerachrate] = useState(1);
  const handleadd = (newmovie) => {
    setMovies([...movies, newmovie]);
  };
  const handlesearch = (e) => {
    setSearchvalue(e.target.value);
  };
  const handlerate = (newrate) => {
    setSerachrate(newrate);
  };

  return (
    <div className="App">
      <Router>
        <Search
          searchvalue={searchvalue}
          handlesearch={handlesearch}
          serachrate={serachrate}
          handlerate={handlerate}
        />
        <Switch>
          <Route
            exact
            path="/description/:name"
            render={(props) => <Description {...props} movies={movies} />}
          />
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                films={movies.filter(
                  (movie) =>
                    movie.name
                      .toLowerCase()
                      .includes(searchvalue.toLowerCase().trim()) &&
                    movie.rating >= serachrate
                )}
              />
            )}
          />
        </Switch>
        <AddMovie handleadd={handleadd} />
      </Router>
    </div>
  );
}

export default App;
