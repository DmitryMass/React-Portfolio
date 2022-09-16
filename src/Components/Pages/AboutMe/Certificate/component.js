import React, { useState } from 'react';
import styles from './index.m.css';
import basic from '../../../../Assets/Images/fe-basic.png';
import fePro from '../../../../Assets/Images/fe-pro.png';
import trainee from '../../../../Assets/Images/trainee.png';
import EachCertificate from './EachCertificate/component';
import { useTranslation } from 'react-i18next';

const Certificate = () => {
  const { t } = useTranslation();
  // нужно доработать ()
  const [feProTransform, setFeProTransform] = useState(false);
  const [transform, setTransform] = useState(false);
  const [finTransform, setFinTransform] = useState(false);

  return (
    <div className={`${styles.fe__certificate} `}>
      <EachCertificate
        link='https://certificate.ithillel.ua/view/50462790'
        src={basic}
        imgClass={transform ? styles.fe__basic_active : styles.fe__basic_img}
        onImgClick={() => setTransform(!transform)}
      >
        {t('basicCertificate')}
      </EachCertificate>
      <EachCertificate
        link='https://certificate.ithillel.ua/ru/view/86466421'
        src={fePro}
        imgClass={feProTransform ? styles.fe__pro_active : styles.fe__pro_img}
        onImgClick={() => setFeProTransform(!feProTransform)}
      >
        {t('advancedCertificate')}
      </EachCertificate>
      <EachCertificate
        src={trainee}
        imgClass={finTransform ? styles.fe__pro_active : styles.fe__pro_img}
        onImgClick={() => setFinTransform(!finTransform)}
      >
        {t('traineeCertificate')}
      </EachCertificate>
    </div>
  );
};

export default Certificate;
