
import React from 'react';
import './App.css';

function CoolButton (props) {
  let classes = 'button';
  if (props.className) {classes += ` ${props.className}`}
  if (props.isDanger) {classes += ' is-danger'}
  if (props.isSmall) {classes += ' is-small'}
  if (props.isSuccess) {classes += ' is-success'}

  return(
    <div>
      <button type={props.type} class={classes}>{props.children}</button>
    </div>
  )
}

export default CoolButton;