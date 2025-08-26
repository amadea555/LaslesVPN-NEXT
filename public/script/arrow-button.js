const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// set default state
leftArrow.classList.add("inactive");
rightArrow.classList.add("active");

leftArrow.addEventListener("click", () => {
  // toggle kelas saat tombol kiri diklik
  leftArrow.classList.remove("inactive");
  leftArrow.classList.add("active");

  rightArrow.classList.remove("active");
  rightArrow.classList.add("inactive");
});

rightArrow.addEventListener("click", () => {
  // toggle kelas saat tombol kanan diklik
  rightArrow.classList.remove("inactive");
  rightArrow.classList.add("active");

  leftArrow.classList.remove("active");
  leftArrow.classList.add("inactive");
});
