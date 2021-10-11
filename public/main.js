const d = document;
const next = d.getElementById("iconNext");
const prev = d.getElementById("iconPrev");
const person = d.getElementById("imgPerson");
const named = d.getElementById("name");
const occupation = d.getElementById("occupation");
const description = d.getElementById("description");
const queryMobile = matchMedia("(max-width: 768px)");

document.addEventListener("DOMContentLoaded", () => {
  tanya();
});

next.addEventListener("click", () => {
  john();
});

prev.addEventListener("click", () => {
  tanya();
});

const page = id => {
  if (id > 0) {
    next.style.cursor = "auto";
    prev.style.cursor = "pointer";
  } else {
    prev.style.cursor = "auto";
    next.style.cursor = "pointer";
  }
};

const changeSize = id => {
  if (id == 1) {
    queryMobile.matches ? (description.style.fontSize = "1.25rem") : (description.style.fontSize = "1.28rem");
  } else {
    queryMobile.matches ? (description.style.fontSize = "1.20rem") : (description.style.fontSize = "1.25rem");
  }
};
queryMobile.addEventListener("change", changeSize);

const john = () => {
  const id = 1;
  named.innerHTML = "John Tarkpor";
  person.src = "./images/image-john.jpg";
  person.alt = "image-john";
  occupation.innerHTML = "Junior Front-end Developer";
  description.innerHTML = `
  “ If you want to lay the best foundation possible I’d recommend taking this
  course. The depth the instructors go into is incredible. I now feel so
  confident about starting up as a professional developer. ”
  `;
  page(id);
  changeSize(id);
};

const tanya = () => {
  const id = 0;
  named.innerHTML = "Tanya Sinclair";
  person.src = "./images/image-tanya.jpg";
  person.alt = "image-tanya";
  occupation.innerHTML = "UX Enginner";
  description.innerHTML = `
  “ I’ve been interested in coding for a while but never taken the jump, 
  until now. I couldn’t recommend this course enough. I’m
  now in the job of my dreams and so excited about the future. ”
  `;
  page(id);
  changeSize(id);
};
