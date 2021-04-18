import Observer from './modules/observer.js';
import * as DOM from './modules/dom-elements.js';
import { scrollHandler } from './modules/scroll.js';
import { animateX, navMenuHandler } from './modules/navigation.js';
import { startLoader} from './modules/loader.js';

import '../sass/main.scss';

/**
 * UTILITIES
 */

/** Set debug = true to enable logging, false to disable. */
const debug = false;

/**
 * Log objects/events for debugging purposes.
 *
 * @param {object} obj Object being logged.
 * @param {string} msg Descriptive message. 
 */
export const logger = (obj, msg = 'Logger output') => {
    if (debug) {
        console.log(msg + ":");
        console.log(obj);
    }
};

/** Activate loader overlay. */
window.onload = () => {
    logger(document.readyState, 'Window loaded')
    logger(document.readyState, 'Ready State status');
    startLoader();
};

/**
 * ANIMATION CONTROLLER
 */

/** Animating 'About Me' section. */
const aboutObserverRight = new Observer([DOM.aboutElements.research, DOM.aboutElements.text]);
aboutObserverRight.animateIn('moveInLeft');
aboutObserverRight.createObserver();
logger(aboutObserverRight, 'About me animations - left');

const aboutObserverLeft = new Observer([DOM.aboutElements.photo, DOM.aboutElements.degree]);
aboutObserverLeft.animateIn('moveInRight');
aboutObserverLeft.createObserver();
logger(aboutObserverLeft, 'About me animations - right');

/** Animating 'Used on this page' section. */
const techWebObserver = new Observer(DOM.techWebElements);
techWebObserver.animateIn('moveInUp');
techWebObserver.createObserver();
logger(techWebObserver, 'Used on this page animations');

/** Animating 'Other stuff I work with' section. */
const techOtherObserver = new Observer(DOM.techOtherElements);
techOtherObserver.animateIn('moveInUp');
techOtherObserver.createObserver();
logger(techOtherObserver, 'Other stuff I work with animations');

/** Animating 'Projects' section. */
const projectsObserver = new Observer(DOM.projectsElements);
projectsObserver.animateIn('rotateInFront', false, 'rotateInBack');
projectsObserver.createObserver();
logger(projectsObserver, 'Projects animations');

/**
 * SCROLL TO TOP BUTTON CONTROLLER
 */

/** Changing the scroll button color when entering the footer. */
const scrollColorObserver = new Observer(DOM.footer);
scrollColorObserver.changeElement(DOM.scrollBtn, DOM.scrollChanges.color);
scrollColorObserver.createObserver();
logger(scrollColorObserver, 'Change color of scroll button in footer');

 /** Changing the scroll button visibility when entering the header. */
const scrollVisibleObserver = new Observer(DOM.header);
scrollVisibleObserver.changeElement(DOM.scrollBtn, DOM.scrollChanges.visibility);
scrollVisibleObserver.createObserver();
logger(scrollVisibleObserver, 'Change visibility of scroll button in header');

/** Scroll to top button functionality. */
DOM.scrollBtn.addEventListener('click', scrollHandler);
logger(DOM.scrollBtn, 'Scroll button functionality');

/**
 * NAV MENU CONTROLLER
 */

/** Nav menu items functionality. */
DOM.navElements.forEach(item => item.addEventListener('click', navMenuHandler));
logger(DOM.navElements, 'Nav menu functionality');

/** Nav button X animations. */
DOM.navBtn.addEventListener('click', animateX);

/** Reset scroll position on unload. */
window.onbeforeunload = () => {
    history.scrollRestoration = "manual";
    scrollHandler();
};














