import PropTypes from 'prop-types';

const TransactionHistory = props => {
  const dataToInsert = props.items.map(({ id, amount, currency, type }) => {
    return (
      <tr key={id}>
        <td className='type'>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <section className="transaction-section section">
      <div className="transaction-container container">
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>{dataToInsert}</tbody>
        </table>
      </div>
    </section>
  );
};

TransactionHistory.propTypes = {
  // type: PropTypes.string,
  // amount: PropTypes.number,
  // currency: PropTypes.number,
  items:PropTypes.array,
};

export default TransactionHistory;
