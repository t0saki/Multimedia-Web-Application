const itemsToAnimate = document.querySelectorAll('.my-element');
const delay=10;
let index = 0;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animate() {
    itemsToAnimate.forEach(item => {
        if (isInViewport(item)) {
            setTimeout(() => {
                item.classList.add('animated');
            }, index * delay);
            index++;
        }
        // } else {
        //     item.classList.remove('animated');
        // }
    });
}

window.addEventListener('scroll', animate);
animate();
