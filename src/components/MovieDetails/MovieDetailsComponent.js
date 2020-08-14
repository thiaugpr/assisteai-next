import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';
import RatingSummary from './RatingSummary';
import Genres from './Genres';
import classes from './style.module.scss';

const MovieDetailsComponent = ({ movie, isModal }) => (
  <div className={`${classes.movieDetails} ${isModal ? classes.isModal : ''}`}>
    <Backdrop backdrop={movie.backdrop_path} />
    <div className={`${classes.content} container`}>
      <div className={classes.posterWrapper}>
        <div className={`${classes.poster} magic-border`} style={{ backgroundImage: `url(${movie.poster_path})` }} />
      </div>
      <div className={classes.title}>
        <h1>
          {movie.original_title}
          <small>({movie.year})</small>
        </h1>
      </div>
      <div className={classes.description}>
        <p>{movie.description}</p>
        <Genres genres={movie.genre} />
      </div>
      <div className={classes.ratingSummaryWrapper}>
        <RatingSummary rating={movie.rating} />
      </div>
    </div>
  </div>
);

MovieDetailsComponent.propTypes = {
  isModal: PropTypes.bool,
  movie: PropTypes.object.isRequired,
};

MovieDetailsComponent.defaultProps = {
  isModal: false,
};

export default MovieDetailsComponent;
