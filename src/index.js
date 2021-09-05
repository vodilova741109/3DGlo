'use strict';
import counterTimer from './modules/counterTimer';
import calc from './modules/calc';
import comand from './modules/comand';
import regular from './modules/regular';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';

// таймер 
counterTimer('30 september 2021');    
 // меню

toggleMenu();
// popup

togglePopup();
// табы

tabs();
// слайдер

slider();
// блок наша командв

comand();

// регулярные выражения
regular(); 

// калькулятор

calc(100); 

//send-ajax-form

sendForm();