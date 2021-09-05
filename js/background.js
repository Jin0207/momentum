const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.body;
bgImage.style = `background-image: url("images/bg/${choseImage}");`;

