/** @module dom-elements */

/** Loader elements. */
export const loaderElements = {
    loader: document.querySelector('.loader'),
    left: document.querySelector('.overlay__left'),
    right: document.querySelector('.overlay__right'),
    k: document.querySelector('#k'),
    bOut: document.querySelector('#b-out'),
    bInTop: document.querySelector('#b-in-top'),
    bInBottom: document.querySelector('#b-in-bottom')
};

/** Elements to animate in the About Me section. */
export const aboutElements = {
    degree: document.querySelector('.about__education'),
    research: document.querySelector('.about__research'),
    photo: document.querySelector('.about__photo'),
    text: document.querySelector('.about__text')
};

/** Elements to animate in the Used On This Page/Other Stuff section. */
export const techWebElements = document.querySelectorAll('[id^="tech__web"]');
export const techOtherElements = document.querySelectorAll('[id^="tech__other"]');

/** Elements associated to scroll to top button and classes to change when entering header/footer. */
export const scrollBtn = document.getElementById('scroll-btn')
export const footer = document.querySelector('.footer');
export const header = document.querySelector('.header');

export const scrollChanges = {
    visibility: ['u-visible', 'u-hidden'],
    color: ['scroll-btn--dark', 'scroll-btn--light']
};

/** Checkbox element that controls visibility of the main nav menu. */
export const navBtn = document.getElementById('nav-check');

/** Elements in the main navigation menu. */
export const navElements = document.querySelectorAll('.navigation__item');

/** Navigation button X lines and animation classes. */
export const navX = [
    document.querySelector('.navigation__x--top'),
    document.querySelector('.navigation__x--bottom')
];

export const navXClasses = {
    forward: ['TopForward', 'BottomForward'],
    reverse: ['TopReverse', 'BottomReverse']
};

