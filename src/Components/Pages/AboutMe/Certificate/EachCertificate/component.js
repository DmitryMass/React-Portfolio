import React from 'react';
import styles from '../index.m.css';

const EachCertificate = ({ link, imgClass, src, onImgClick }) => {
  return (
    <div className={styles.fe__basic}>
      <img
        className={imgClass}
        src={src}
        alt="My basic certificate"
        onClick={onImgClick}
      />
      <a href={link} target="blank">
        {link}
      </a>
    </div>
  );
};

export default EachCertificate;
