import React from 'react';
import styles from '../index.m.css';
import PropTypes from 'prop-types';

const Slide = ({ children, link, description, img }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__img}>
        <img src={img} alt="analytic website 1 page" />
      </div>
      <div className={styles.slide__description}>
        <p className={styles.slide__info}>{description}</p>
        <a className={styles.slide__link} href={link} target="blank">
          {children}
        </a>
      </div>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Slide;
