/** @module navigation */
import { navBtn, navX, navXClasses } from './dom-elements.js';

/**
 * Switch classes that animate the nav button X so animations run forward/backward.
 * @param {string} action add/remove classes.
 * @param {array} direction forward/reverse classes to perform action on.
 */
const navXClassSwitcher = (action, direction) => {
    if (action === 'add') {
        navX.map((line, i) => {
            line.classList.add(direction[i]);
        });
    } else if (action === 'remove') {
        navX.map((line, i) => {
            line.classList.remove(direction[i]);
        });
    }    
};

/** Animate the X forward on check. */
const navChecked = () => {
    navXClassSwitcher('remove', navXClasses.reverse);

    setTimeout(() => {
        navXClassSwitcher('add', navXClasses.forward);
    }, 1); 
};

/** Animate the X backward on check. */
export const navUnchecked = () => {
    navXClassSwitcher('remove', navXClasses.forward);

    setTimeout(() => {
        navXClassSwitcher('add', navXClasses.reverse);
    }, 1);
};

/** Animate the X button forward/backward. */
export const animateX = (event) => {
    if (event.target.checked) {
        navChecked();
    } else {
        navUnchecked();
    }
};

/** Scrolls to section from nav menu and closes menu. */
export const navMenuHandler = () => {
    navBtn.checked = false;
    navUnchecked();
    const scrollTo = document.getElementById('nav-' + event.target.id);
    scrollTo.scrollIntoView(true);
};
