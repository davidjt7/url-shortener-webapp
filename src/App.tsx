import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputSection from './components/InputSection/InputSection';
import ResultText from './components/ResultText/ResultText';

const App = () => {
  const [state, setState] = useState({
    shortUrl: '',
    inputUrl: ''
  });
  return (
    <div className="App">
      <Header name="Url Shortener" />
      <InputSection inputLabel="Enter link here" buttonLabel="Shorten url" callBack={displayResult(state, setState)} state={state} setState={setState} />
      <ResultText result={state.shortUrl}></ResultText>
    </div>

  );
};

export default App;

const getUrl = async (inputUrl: string) => {
  const result = await fetch('http://localhost:8001/links',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        link: inputUrl
      })
    });
  return result.json();
};

const formatResponse = async (input: any) => {
  const result = await getUrl(input);
  return result.shortUrl;
};

const displayResult = (state: any, setState: any) => async () => setState({ ...state, shortUrl: await formatResponse(state.inputUrl) })