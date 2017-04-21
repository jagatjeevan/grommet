// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-social-reddit`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'social-reddit');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="#FF4500" fillRule="evenodd" d="M15.57,15.284 C14.673,15.284 13.91925,14.5565 13.91925,13.6595 C13.91925,12.7625 14.673,12.011 15.57,12.011 C16.467,12.011 17.1945,12.7625 17.1945,13.6595 C17.1945,14.5565 16.467,15.284 15.57,15.284 M15.951,18.437 C15.1155,19.27175 13.827,19.6775 12.012,19.6775 C12.00825,19.6775 12.00375,19.67675 11.99925,19.67675 C11.9955,19.67675 11.991,19.6775 11.9865,19.6775 C10.1715,19.6775 8.88375,19.27175 8.049,18.437 C7.7925,18.1805 7.7925,17.76575 8.049,17.51 C8.30475,17.25425 8.7195,17.25425 8.976,17.51 C9.552,18.086 10.53675,18.3665 11.9865,18.3665 C11.991,18.3665 11.9955,18.36725 11.99925,18.36725 C12.00375,18.36725 12.00825,18.3665 12.012,18.3665 C13.46175,18.3665 14.44725,18.086 15.024,17.51 C15.2805,17.2535 15.69525,17.25425 15.951,17.51 C16.20675,17.7665 16.20675,18.18125 15.951,18.437 M6.8055,13.6595 C6.8055,12.76325 7.55775,12.011 8.454,12.011 C9.351,12.011 10.0785,12.76325 10.0785,13.6595 C10.0785,14.5565 9.351,15.284 8.454,15.284 C7.55775,15.284 6.8055,14.5565 6.8055,13.6595 M19.998,3.311 C20.6055,3.311 21.09975,3.80525 21.09975,4.412 C21.09975,5.0195 20.6055,5.51375 19.998,5.51375 C19.3905,5.51375 18.89625,5.0195 18.89625,4.412 C18.89625,3.80525 19.3905,3.311 19.998,3.311 M24,11.87525 C24,10.2845 22.70625,8.99075 21.1155,8.99075 C20.427,8.99075 19.79475,9.23375 19.29825,9.638 C17.5395,8.5325 15.3075,7.8665 12.915,7.7255 L14.163,3.77975 L17.59275,4.5875 C17.68275,5.83625 18.72675,6.82475 19.998,6.82475 C21.32775,6.82475 22.41,5.7425 22.41,4.412 C22.41,3.08225 21.32775,2 19.998,2 C19.068,2 18.2595,2.5295 17.85675,3.30275 L13.87125,2.3645 C13.5375,2.28575 13.2,2.47775 13.0965,2.80475 L11.547,7.70225 C8.96925,7.76525 6.546,8.4335 4.65825,9.6035 C4.1685,9.22025 3.55275,8.99075 2.8845,8.99075 C1.29375,8.99075 0,10.2845 0,11.87525 C0,12.8585 0.495,13.72775 1.24875,14.24825 C1.21725,14.477 1.20075,14.70725 1.20075,14.9405 C1.20075,16.92875 2.3565,18.77825 4.455,20.14775 C6.4665,21.461 9.129,22.184 11.95125,22.184 C14.7735,22.184 17.436,21.461 19.4475,20.14775 C21.546,18.77825 22.70175,16.92875 22.70175,14.9405 C22.70175,14.72825 22.6875,14.5175 22.66125,14.30825 C23.46525,13.796 24,12.89675 24,11.87525" stroke="none"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialReddit';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

