import React, { Children } from 'react';
import styles from '../index.m.css';
import PropTypes from 'prop-types';

const EachCertificate = ({ children, link, imgClass, src, onImgClick }) => {
  return (
    <div className={styles.fe__basic}>
      <img
        className={imgClass}
        src={src}
        alt="My basic certificate"
        onClick={onImgClick}
      />
      <a href={link} target="blank">
        {children}
      </a>
    </div>
  );
};

EachCertificate.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default EachCertificate;
