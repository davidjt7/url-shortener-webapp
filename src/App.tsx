import React from 'react';
import Header from './components/Header/Header';
import InputSection from './components/InputSection/InputSection';

function App() {
  return (
    <div>
      <Header name="Url Shortener" />
      <InputSection inputLabel="Enter link here" buttonLabel="Shorten url" />
    </div>

  );
}

export default App;
