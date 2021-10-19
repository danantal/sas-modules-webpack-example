import _ from 'lodash';

import {button} from './button';
import {text} from './text';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = button + text;

  return element;
}

document.body.appendChild(component());
