import './modules/pets-slider.js';
import './modules/smoothscroll.js';
import 'focus-visible';
import './modules/nojs.js';
import {NavigationMenu} from './modules/navigation.js';

const navigation = new NavigationMenu(`header__navigation`, `header__trigger`);
navigation.init();



