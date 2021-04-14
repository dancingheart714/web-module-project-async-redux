import { connect } from 'react-redux';
import { fetchData } from '../store';
import { useEffect } from 'react';

const GameQuotes = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="quote-wrapper">
      {props.isLoading ? <h3>Loading data...</h3> : null}
      {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
      {props.quotes.map((quotes) => (
        <p key={quotes.index}>{quotes.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    quotes: state.quotes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(GameQuotes);
