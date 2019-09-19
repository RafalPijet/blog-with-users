import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.scss';

const SectionTitle = ({ children }) => (
  <span className="section-title">
     {children}
  </span>
);

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
