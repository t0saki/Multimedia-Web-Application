const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const heroImage = document.querySelector(".hero-image");

const imagePaths = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
];
let imageIndex = 1;

leftButton.addEventListener("click", () => {
  imageIndex--;
  if (imageIndex < 1) {
    imageIndex = 3;
  }
  heroImage.src = `image${imageIndex}.jpg`;
});

rightButton.addEventListener("click", () => {
  imageIndex++;
  if (imageIndex > 3) {
    imageIndex = 1;
  }
  heroImage.src = `image${imageIndex}.jpg`;
});

function ClickStart() {
  // jmp to page2.html
  window.location.href = "page2.html";
}