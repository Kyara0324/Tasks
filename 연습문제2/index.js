const collapseBtns = document.querySelectorAll(".collapsible");
const contents = document.querySelectorAll(".content");

for (let i = 0; i < collapseBtns.length; i++) {
  collapseBtns[i].addEventListener("click", function () {
    collapseBtns[i].classList.toggle("active");
    if (contents[i].style.maxHeight === "block") {
      contents[i].style.display = "none";
    } else {
      contents[i].style.display = "block";
    }
  });
}
