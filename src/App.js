import React from 'react';
import {useSelector} from 'react-redux';

import Routes from './routes';

const App = () => {
  const signed = useSelector((state) => state.navigate.signed);

  useSelector((state) => console.tron.log(state.navigate));

  return <Routes isSigned={true} />;
};

export default App;
