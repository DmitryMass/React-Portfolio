import React from 'react';

const Title = ({ children, classStyle }) => {
  return <h3 className={classStyle}>{children}</h3>;
};

export default Title;
