/** @module scroll */

/** Scrolls to top of page. */
export const scrollHandler = () => {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
};