import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getColor } from 'components/getColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(data => (
          <li
            style={{ backgroundColor: getColor() }}
            key={data.id}
            className={css.item}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentega: PropTypes.number,
    })).isRequired,
};