import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/movieSlice";


import MovieItem from "../../components/MovieItem";
import Spinners from "../../components/Spinner";

function Movie() {
  const dispatch = useDispatch();

  const allMovies = useSelector((state) => state.home.movie);
  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <center style={{ paddingTop: 100 }}>
        <h1>Welcome to Movie API</h1>
        <p>Find your favorite movies here easily, comfortably and safely.</p>
        <hr width="80%" />
      </center>
      <div className="hero-container">
        <div className="row">
          {allMovies.map((movie, index) => (
            <div className="col-md-3 py-2" key={index}>
              <MovieItem
                Image={movie?.Poster}
                title={movie?.Title}
                idm={movie?.imdbID}
                Year={movie?.Year}
                Type={movie?.Type}
              />

            </div>
          ))}
        </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default Movie;
