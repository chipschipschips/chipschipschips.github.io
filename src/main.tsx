import React from 'react';
import ReactDOM from 'react-dom/client';
import {Codepen, Github, Jsfiddle} from '@icons-pack/react-simple-icons';
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
              {/* TODO(issues/1): Get from icons-pack once supported */}
              <svg viewBox="0 0 24 24"
                   fill="grey"
                   height="1.5em"
                   width="1.5em"
              >
                <title>stackblitz</title>
                <path
                  d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"/>
              </svg>
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