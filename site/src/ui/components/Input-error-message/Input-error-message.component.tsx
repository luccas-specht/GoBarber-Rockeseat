import React from 'react';

import { BiErrorCircle } from 'react-icons/bi';

import { Error } from './Input-error-message';

interface PropsInputErrorMessage {
  message: string;
  dataSelector: string;
}
const InputErrorMessage = ({ message, dataSelector }: PropsInputErrorMessage) => (
  <Error data-selector={dataSelector}>
    <BiErrorCircle size={19} />
    <span>{message}</span>
  </Error>
);

export { InputErrorMessage }