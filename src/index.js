import 'normalize.css';
import "./main.scss";

import homePage from './homePage/homePage.js';
import menuPage from './menuPage/menuPage.js';
import contactPage from './contactPage/contactPage.js';

const contentDiv = document.querySelector('div#content');
const homeButton = document.querySelector('nav>button.home');
const menuButton = document.querySelector('nav>button.menu');
const contactButton = document.querySelector('nav>button.contact');

function assignListeners(){
    const generatedHomePage = homePage.generatePage();
    homeButton.addEventListener('click',changePage.bind(homeButton,generatedHomePage));

    const generatedMenuPage = menuPage.generatePage();
    menuButton.addEventListener('click',changePage.bind(menuButton,generatedMenuPage));

    const generatedContactPage = contactPage.generatePage();
    contactButton.addEventListener('click',changePage.bind(contactButton,generatedContactPage));
}

function changePage(generatedPage){
    (()=>{
        homeButton.classList.remove('active');
        menuButton.classList.remove('active');
        contactButton.classList.remove('active');
    })();

    contentDiv.innerHTML = "";
    contentDiv.append(generatedPage);
    this.classList.add('active');
}

assignListeners();
changePage.call(homeButton,homePage.generatePage());