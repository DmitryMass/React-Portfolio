import React, { useState } from 'react';
import styles from './index.m.css';
import basic from '../../../../Assets/Images/fe-basic.png';
import fePro from '../../../../Assets/Images/fe-pro.png';
import EachCertificate from './EachCertificate/component';

const Certificate = () => {
  const [feProTransform, setFeProTransform] = useState(false);
  const [transform, setTransform] = useState(false);

  return (
    <div className={`${styles.fe__certificate} `}>
      <EachCertificate
        link="https://certificate.ithillel.ua/view/50462790"
        src={basic}
        imgClass={transform ? styles.fe__basic_active : styles.fe__basic_img}
        onImgClick={() => setTransform(!transform)}
      >
        Front End Basic (Certificate)
      </EachCertificate>
      <EachCertificate
        link="https://certificate.ithillel.ua/ru/view/86466421"
        src={fePro}
        imgClass={feProTransform ? styles.fe__pro_active : styles.fe__pro_img}
        onImgClick={() => setFeProTransform(!feProTransform)}
      >
        Front End Advanced (Certificate)
      </EachCertificate>
    </div>
  );
};

export default Certificate;
