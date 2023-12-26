import React from 'react';

function Pokemon({ name, type }) {
  return <div>{`${name}는(은) ${type}타입이다!`}</div>;
}

