import PropTypes from "prop-types";

const Alert = ({ message }) => (
    <p className="alert alert-danger error">{message}</p>
);

Alert.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Alert;
