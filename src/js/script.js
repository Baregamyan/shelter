import 'smoothscroll-anchor-polyfill';
import './modules/pets-slider.js';
import {NavigationMenu} from './modules/navigation.js';

const navigation = new NavigationMenu(`header__navigation`, `header__trigger`);
navigation.init();



