import React from 'react';
import {useSelector} from 'react-redux';

import Routes from './routes';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);

  return <Routes isSigned={signed} />;
};

export default App;
