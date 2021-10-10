const d = document;
const next = d.getElementById("iconNext");
const prev = d.getElementById("iconPrev");
const person = d.getElementById("imgPerson");
const named = d.getElementById("name");
const occupation = d.getElementById("occupation");
const description = d.getElementById("description");

window.addEventListener("DOMContentLoaded", () => {
  tanya();
});

next.addEventListener("click", () => {
  john();
});

prev.addEventListener("click", () => {
  tanya();
});

const john = () => {
  named.innerHTML = "John Tarkpor";
  person.src = "./images/image-john.jpg";
  person.alt = "image-john";
  occupation.innerHTML = "Junior Front-end Developer";
  description.innerHTML = `
  “ If you want to lay the best foundation possible I’d recommend taking this
  course. The depth the instructors go into is incredible. I now feel so
  confident about starting up as a professional developer. ”
  `;
};

const tanya = () => {
  named.innerHTML = "Tanya Sinclair";
  person.src = "./images/image-tanya.jpg";
  person.alt = "image-tanya";
  occupation.innerHTML = "UX Enginner";
  description.innerHTML = `
  “ I’ve been interested in coding for a while but never taken the jump, 
    until now. I couldn’t recommend this course enough. I’m
    now in the job of my dreams and so excited about the future. ”
  `;
};
