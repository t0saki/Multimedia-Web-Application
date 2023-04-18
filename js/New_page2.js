// function isVisible(element) {
//     const elementBox = element.getBoundingClientRect();
//     const distanceFromTop = -100;

//     if (elementBox.top - window.innerHeight < distanceFromTop) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function handleScroll() {
//     const myDiv = document.querySelector("#myDiv");

//     myDiv.addEventListener("click", function () {
//         myDiv.classList.add("animated", "fadein");
//     });
// }

// window.addEventListener('scroll', handleScroll);
window.onload = function () {
    const myDiv = document.querySelector("#myDiv");
    myDiv.classList.add("animated", "fadein");
};
const itemsToAnimate = document.querySelectorAll('.my-element');
const delay=500;
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
        } else {
            item.classList.remove('animated');
        }
    });
}

window.addEventListener('scroll', animate);
animate();