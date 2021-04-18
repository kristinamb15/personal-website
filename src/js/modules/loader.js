/** @module loader */
import { loaderElements } from './dom-elements.js';
import { logger } from '../index.js';

/** Curtain effect for sliding open loader overlay. */
const slideLoad = () => {
    logger(slideLoad, 'Slide loader panels');
    loaderElements.left.classList.add('loader-left');
    loaderElements.right.classList.add('loader-right');

    return document.querySelector('.loader-right');
};

/** Animates SVG elements on loader page. */
const animateSVG = () => {
    logger(animateSVG, 'Draw SVG');
    loaderElements.k.classList.add('draw-k');
    loaderElements.bOut.classList.add('draw-b-out');
    loaderElements.bInTop.classList.add('draw-b-in-top');
    loaderElements.bInBottom.classList.add('draw-b-in-bottom');

    return document.querySelector('.draw-b-in-bottom');
};

/** Clears loader from DOM */
const clearLoader = () => {
    loaderElements.loader.innerHTML = '';
    loaderElements.loader.remove();
};

/** Initiates animations of loader overlay and elements, then removes them from DOM. */
export const startLoader = () => {
    loaderElements.page.style.overflow = 'hidden';
    logger(loaderElements.page, 'Make page invisible');

    logger(startLoader, 'Begin loader actions');
    animateSVG()
    .onanimationend = () => {
        logger(animateSVG, 'Draw Animation Ended');
        slideLoad()
        .onanimationend = setTimeout(() => {
                loaderElements.page.style.removeProperty('overflow');
                logger(loaderElements.page, 'Make page visible');
            }, 1300);
        slideLoad()
        .onanimationend = setTimeout(() => {
            logger(slideLoad, 'Slide Animation Ended');
            clearLoader();
        }, 2000);
    }; 
};




