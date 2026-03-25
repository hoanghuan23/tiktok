import './GlobalStyles.scss'; 
import Proptypes from 'prop-types';
import React from 'react';

function GlobalStyles({ children }) {
  return React.Children.only(children);
}

GlobalStyles.propTypes = {
  children: Proptypes.node.isRequired,
}

export default GlobalStyles;
