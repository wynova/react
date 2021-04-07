import React from 'react';
import ReactDOM from 'react-dom';

const createApp = (props) => {
  return (
    <div>
      <h1>Welcome {props.title}</h1>
    </div>
  )
};

const app = createApp({
  title: 'Woqu 复刻'
});

ReactDOM.render(
  app,
  document.querySelector('#root')
)