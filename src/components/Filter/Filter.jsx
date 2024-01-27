import PropTypes from 'prop-types';

const Filter = ({ onChange }) => (
  <div>
    <p>Find contacts by name</p> <input type="text" onChange={onChange} />
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
