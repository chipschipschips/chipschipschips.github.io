import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Codepen,
  Github,
  Jsfiddle,
  Stackblitz
} from '@icons-pack/react-simple-icons';
import 'normalize-css';
import './page.css';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <div id="heading">
        <h1>hello, world.</h1>
      </div>
      <div id="content">
        <ul>
          <li key={1}>
            <a href="https://github.com/chipschipschips">
              <Github title="GitHub" size={"1.5em"} color="grey"/>
            </a>
          </li>
          <li key={2}>
            <a href="https://stackblitz.com/@chipschipschips">
              <Stackblitz title="StackBlitz" size={"1.5em"} color="grey"/>
            </a>
          </li>
          <li key={3}>
            <a href="https://codepen.io/chipscubed">
              <Codepen title="CodePen" size={"1.5em"} color="grey"/>
            </a>
          </li>
          <li key={4}>
            <a href="https://jsfiddle.net/user/chipschipschips/fiddles/">
              <Jsfiddle title="JSFiddle" size={"1.5em"} color="grey"/>
            </a>
          </li>
        </ul>
      </div>
    </React.StrictMode>
  );