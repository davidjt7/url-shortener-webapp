import React from 'react';
import './InputSection.css';
import { Button, TextField } from '@material-ui/core';

function InputSection(props: any) {
  return (
    <div className="Input-section">
      <TextField className="Url-input" label={props.inputLabel} variant="outlined" onChange={captureInput(props)} />
      <Button onClick={props.callBack} className="Shorten-button" variant="contained" color="primary">{props.buttonLabel}</Button>
    </div>
  );
}

export default InputSection;

const captureInput = (props: any) => (e: any) => props.setState({ ...props.state, inputUrl: e.target.value });