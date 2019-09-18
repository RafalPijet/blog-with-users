import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const HtmlBox = ({children}) => (
    <div>
        {ReactHtmlParser(children)}
    </div>
);

HtmlBox.propTypes = {
  children: PropTypes.string
};

export default HtmlBox;
