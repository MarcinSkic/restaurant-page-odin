import 'normalize.css';
import "./main.css";

import homePage from './homePage/homePage.js';

const contentDiv = document.querySelector('div#content');

homePage.generatePage(contentDiv);