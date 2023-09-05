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
  {
    id: "4",
    img: "./images/person-4.jpg",
    name: "bill anderson",
    profession: "the boss",
    review:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

let count = 0;
let random = Math.floor(Math.random() * 4);

let img = document.getElementById("img");
let authorName = document.getElementById("author-name");
let profession = document.getElementById("profession");
let review = document.getElementById("review");

let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("previous-btn");
let randomBtn = document.getElementById("btn-surprise-me");

window.addEventListener("DOMContentLoaded", showNextReview);
nextBtn.addEventListener("click", () => {
  count < reviews.length - 1 ? ++count : (count = 0);
  showNextReview();
});

prevBtn.addEventListener("click", () => {
  count == 0 ? (count = reviews.length - 1) : --count;
  showNextReview();
});

randomBtn.addEventListener(
  "click",
  () => (count = Math.floor(Math.random() * reviews.length))
);
randomBtn.addEventListener("click", showNextReview);
function showNextReview() {
  let currrentReview = reviews[count];

  img.src = currrentReview.img;
  authorName.innerText = currrentReview.name;
  profession.innerText = currrentReview.profession;
  review.innerText = currrentReview.review;
}
