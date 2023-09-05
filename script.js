"use strict";
let reviews = [
  {
    id: "1",
    img: "./images/person-1.jpg",
    name: "anna johnson",
    profession: "web designer",
    review:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: "2",
    img: "./images/person-2.jpg",
    name: "susan smith",
    profession: "web developer",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: "3",
    img: "./images/person-3.jpg",
    name: "peter jones",
    profession: "intern",
    review:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

let count = 0;

let img = document.getElementById("img");
let authorName = document.getElementById("author-name");
let profession = document.getElementById("profession");
let review = document.getElementById("review");

window.addEventListener("load", showNextReview);

let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => (count < 2 ? ++count : (count = 0)));
nextBtn.addEventListener("click", showNextReview);

function showNextReview() {
  img.src = reviews[count].img;
  authorName.innerText = reviews[count].name;
  profession.innerText = reviews[count].profession;
  review.innerText = reviews[count].review;
}
