import PropTypes from 'prop-types';

const Statistics = props => {
  const dataToInsert = props.stats.map(({ label, percentage, id }) => {
    return (
      <li className="stat-item" key={id} id={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );
  });
  return (
    <section className="statistics-section section">
      <div className="statistics-container container">
        {props.title && (
          <h2 className="title">Upload stats</h2>
        )}
        <ul className="stat-list">{dataToInsert}</ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

export default Statistics;
