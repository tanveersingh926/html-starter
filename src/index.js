import { Header } from "./app/header";
import { Footer } from "./app/footer";
import '../src/style.css';
import './styles/scss/main.scss';
import webpackgif from './assets/images/webpack.gif';

// setting the source of img document.getElementById('webpack-gif').setAttribute('src', webpackgif);

// document.getElementById('webpack-gif').setAttribute('src', webpackgif);

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);
