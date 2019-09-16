import React from 'react'

import './Logo.scss';

const Logo = ({ image, name }) => (
  <img className="logo" src={image} alt={name}/>
);

export default Logo;
