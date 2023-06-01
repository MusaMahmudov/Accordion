let buttons = document.getElementsByTagName("button");
let answers = document.getElementsByClassName("answer");
let icons = document.getElementsByTagName("i");
console.log(icons);
for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", (event) => {
    let p = event.currentTarget.parentElement.querySelector(".answer");
    let icon = event.target;
    let li = event.currentTarget.parentElement;
    console.log(li);
    for (let i = 0; i < answers.length; i++) {
      if (!answers[i].classList.contains("hidden")) {
        if (answers[i] === p) {
          continue;
        }
        icons[i].style.transform = "rotate(0deg)";

        answers[i].classList.add("hidden");
      }
    }

    if (li.classList.contains("hidden")) {
      li.classList.remove("hidden");
      li.style.height = "80px";
      icon.style.transform = "rotate(45deg)";
    } else {
      li.style.height = "15px";

      li.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  });
}
