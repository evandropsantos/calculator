import React from 'react';
import './Button.css';

export default props =>
<button
  onClick={ e => props.click(props.label) }
  className={`
    button
    ${props.operation ? 'button--operation' : ''}
    ${props.double ? 'button--double' : ''}
    ${props.triple ? 'button--triple' : ''}
  `.trim()}>
  { props.label }
</button>