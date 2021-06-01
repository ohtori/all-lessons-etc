import React from 'react';
import image6 from '../images/6.png';
import main from './main.module.scss';
import Counter from './Counter';
import Todos from './Todos';
import Timer from './Timer';
import FetchedPosts from './FetchedPosts';
//import exampleJson from './example.json';

export default function MainPage(): JSX.Element {  
  return (
    <div className="main">
      <h1>Hello world!</h1>
      <Timer />
      <img src={image6} alt=""/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, similique deleniti iure sapiente optio corporis harum. Beatae architecto deserunt atque iste. Dolore reprehenderit nam nobis illo molestias error eos numquam!</p>
      <span className={ main.subtext }>subtext</span>
      <Counter />
      <Todos />
      <FetchedPosts />
    </div>
  );
}