/** @module observer */

/** Class representing an IntersectionObserver. */
export default class Observer {
    /**
     * Create an observer.
     * @param {object} targets observer's targets.
     */
    constructor(targets) {
        this.options = {
            root: null,
            threshold: 0.5
        };
        this.targets = targets;
    }

    /**
     * Set the root intersection element.
     * @param {Element} newRoot root element.
     */
    setRoot(newRoot) {
        this.options.root = newRoot;
    }

    /**
     * Set the threshold of intersection.
     * @param {number} newThreshold threshold value.
     */
    setThreshold(newThreshold) {
        this.options.threshold = newThreshold;
    }

    /**
     * Create callback function to animate elements into the page.
     * @param {string} animation animation class name.
     * @param {boolean} single set to true to animate elments one by one.
     */
    animateIn(animation, single = false) {
        const callback = (entries, observer) => {
            entries.forEach( (entry, i) => {
                let t;
                if (single) {
                    t = i; 
                } else {
                    t = 1;
                }

                if(entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(animation);
                        entry.target.classList.replace('u-hidden', 'u-visible');
                    }, t * 250);
                    observer.unobserve(entry.target);
                }
            });
        };
        this.callback = callback;
    }

    /**
     * Create callback function to change an element on intersection.
     * @param {Element} element element to change.
     * @param {array} changes classes to change.
     */
    changeElement(element, changes) {
        const callback = (entries) => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {
                    element.classList.replace(changes[0], changes[1]);
                }
                else {
                    element.classList.replace(changes[1], changes[0]);
                }
            });
        };
        this.callback = callback;
    }

    /**
     * Create callback function to toggle an element's class on intersection.
     * @param {Element} element element to change.
     * @param {string} cl class to toggle.
     */
    toggleElement(element, cl) {
        const callback = (entries) => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {
                    element.classList.toggle(cl);
                }
                else {
                    element.classList.toggle(cl);
                }
            });
        };
        this.callback = callback;
    }
    
    /** Create the IntersectionObserver. */
    createObserver() {
        const observer = new IntersectionObserver(this.callback, this.options);
        if (this.targets.length > 1) {
            this.targets.forEach(target => observer.observe(target));
        } else {
            observer.observe(this.targets);
        }        
    }
};
