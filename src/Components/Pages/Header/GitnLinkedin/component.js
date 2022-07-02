import React from 'react';
import PropTypes from 'prop-types';

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

GitnLinkedin.propTypes = {
  linkStyle: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default GitnLinkedin;
