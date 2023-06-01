let buttons = document.getElementsByTagName("button");
let answers = document.getElementsByClassName("answer");
let icons = document.getElementsByTagName("i");
let liAll = document.getElementsByTagName("li");

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", (event) => {
    let p = event.currentTarget.parentElement.querySelector(".answer");
    let button = event.currentTarget;
    let li = event.currentTarget.parentElement;
    for (let i = 0; i < answers.length; i++) {
      if (!answers[i].classList.contains("hidden")) {
        if (answers[i] === p) {
          continue;
        }
        buttons[i].style.transform = "rotate(0deg)";
        liAll[i].style.height = "20px";
        answers[i].classList.add("hidden");
      }
    }

    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      button.style.transform = "rotate(45deg)";
      li.style.height = "80px";
    } else {
      li.style.height = "20px";
      p.classList.add("hidden");
      button.style.transform = "rotate(0deg)";
    }
  });
}
