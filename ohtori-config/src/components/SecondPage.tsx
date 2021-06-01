import React, { useState } from 'react';
import image6 from '../images/6.png';
import main from './main.module.scss';

export default function SecondPage():JSX.Element {
  return (
    <div className="main">
      <h1>Its Second Page!</h1>
      <img src={image6} alt=""/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, similique deleniti iure sapiente optio corporis harum. Beatae architecto deserunt atque iste. Dolore reprehenderit nam nobis illo molestias error eos numquam!</p>
      <span className={ main.subtext }>subtext</span>
    </div>
  )
}