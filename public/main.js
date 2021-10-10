const next = document.getElementById("iconNext");
const prev = document.getElementById("iconPrev");
const person = document.getElementById("imgPerson");

next.addEventListener("click", () => {
  johnImage();
});

prev.addEventListener("click", () => {
  tanyaImage();
});

const johnImage = () => {
  person.src = "./images/image-john.jpg";
};

const tanyaImage = () => {
  person.src = "./images/image-tanya.jpg";
};
