const keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

const preventDefault = e => e.preventDefault();

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true;
        }
    }));
} catch (e) {}

const wheelOpt = supportsPassive ? {
    passive: false
} : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

class ScrollDisabler {
    static disable() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    static enable() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.removeEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
}

export default ScrollDisabler;