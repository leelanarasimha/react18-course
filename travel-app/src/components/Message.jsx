import PropTypes from 'prop-types';
export default function Message({ message }) {
  Message.propTypes = {
    message: PropTypes.string.isRequired
  };
  return <div>{message}</div>;
}
