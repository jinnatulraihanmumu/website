const triggerEl = document.querySelector(".fa-ellipsis-v");
const sideBarEl = document.querySelector(".side");

function main() {
  triggerEl.addEventListener("click", () => {
    console.log("Clicked");
    sideBarEl.classList.add("active");
  });

  window.addEventListener("click", function (e) {
    if (!e.target.classList.contains("side-bar")) {
      sideBarEl.classList.remove("active");
    }
  });
}

main();
