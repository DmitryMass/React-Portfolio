import React, { Children } from 'react';
import styles from '../index.m.css';

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

export default EachCertificate;
