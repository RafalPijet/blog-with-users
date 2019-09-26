import React from 'react';
import PropTypes from 'prop-types';

const LoggedUser = ({hidden, firstName, lastName}) => (
  <p hidden={hidden}>{`${firstName} ${lastName}`}</p>
);

LoggedUser.propTypes = {
    hidden: PropTypes.bool.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string
};

export default LoggedUser;
