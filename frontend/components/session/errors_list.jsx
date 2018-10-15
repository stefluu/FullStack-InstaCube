import React from 'react';

const ErrorsList = ({errors}) => {
  if (!errors.length) return null;
  const errorsItems = errors.map(error => <li>{error}</li>)

  return (
    <ul className="errors-list">
      {errorsItems}
    </ul>
  )
};

export default ErrorsList;
