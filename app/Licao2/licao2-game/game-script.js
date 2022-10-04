

const range = document.querySelector("#range");
const progressbar = document.querySelector(".progress-bar");

console.log(range);
console.log(progressbar);

range.addEventListener("input", function () {
  const value = range.value;
  progressbar.style.setProperty("--progress", value);
});


