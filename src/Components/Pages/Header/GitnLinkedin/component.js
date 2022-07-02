import React from 'react';

const GitnLinkedin = ({ linkStyle, gitHub, linkedin }) => {
  return (
    <div className="flex__container">
      <a
        className={linkStyle}
        href="https://github.com/DmitryMass"
        target="blank"
      >
        <object data={gitHub} type=""></object>
      </a>
      <a
        className={linkStyle}
        href="https://www.linkedin.com/in/dmitry-moskalenko-69a19a226/"
        target="blank"
      >
        <object data={linkedin} type=""></object>
      </a>
    </div>
  );
};

export default GitnLinkedin;
