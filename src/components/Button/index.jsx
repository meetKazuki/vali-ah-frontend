// react libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Button.scss';


const Button = ({
  children, id, className, onClick, type = 'button'
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    id={id}
    className={className || 'button__primary'}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  id: PropTypes.string,
  className: PropTypes.string.isRequired
};

Button.defaultProps = {
  id: ''
};

export default Button;
