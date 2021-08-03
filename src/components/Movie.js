import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({title, summary, year, rating, poster, genres}) {
  return (
    <Link
      to={{
        pathname: '/movie/:id',
        state: {
          title,
          summary,
          year,
          rating,
          poster,
          genres,
        },
      }}
    >
      <main>
        <img src={poster} title={title} alt={title}></img>
        <h1> ✅ title : {title}</h1>
        <h2>summary : {summary.slice(0, 100)}...</h2>
        <h3>year : {year}</h3>
        <h3>⭐️ {rating}</h3>
        <ul>
          {genres.map((genre, number) => (
            <li key={number}>{genre}</li>
          ))}
        </ul>
      </main>
    </Link>
  );
}
Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
